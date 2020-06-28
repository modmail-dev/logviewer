# Original source https://github.com/Tyrrrz/DiscordChatExporter/tree/master/DiscordChatExporter.Core.Markdown
# Taken in part and rewritten into Python by Taaku18

import abc
import os
import pickle
from enum import Enum
from html import escape as html_encode
from typing import *

import regex

__all__ = ["format_markdown"]

_T = TypeVar("T")
_Pattern = type(regex.compile("", 0))
_Match = type(regex.compile("", 0).match(""))


def is_none_or_white_space(s: Optional[str]) -> bool:
    if s is None:
        return True
    return s.isspace()


class TextFormatting(Enum):
    BOLD = "BOLD"
    ITALIC = "ITALIC"
    UNDERLINE = "UNDERLINE"
    STRIKETHROUGH = "STRIKETHROUGH"
    SPOILER = "SPOILER"
    QUOTE = "QUOTE"


class MentionType(Enum):
    META = "META"
    USER = "USER"
    CHANNEL = "CHANNEL"
    ROLE = "ROLE"


class StringPart:
    @overload
    def __init__(self, target: str, start_index: int, length: int):
        ...

    @overload
    def __init__(self, target: str):
        ...

    def __init__(self, target, start_index=0, length=None):
        self.target = target
        self.start_index = start_index
        if length is None:
            length = len(target)
        self.length = length
        self.end_index = start_index + length

    @overload
    def slice(self, new_start_index: int, new_length: int) -> "StringPart":
        ...

    @overload
    def slice(self, new_start_index: int) -> "StringPart":
        ...

    @overload
    def slice(self, match: _Match, groups: int = 1) -> "StringPart":
        ...

    def slice(self, new_start_index, new_length=None):
        if isinstance(new_start_index, int):
            if new_length is None:
                new_length = self.end_index - new_start_index
            return StringPart(self.target, new_start_index, new_length)
        match = new_start_index
        group = new_length if new_length is not None else 1
        # TODO: Verify
        new_start_index = match.start(group)
        new_length = match.end(group) - match.start(group)
        return StringPart(self.target, new_start_index, new_length)

    def __str__(self):
        return self.target[self.start_index : self.start_index + self.length]


class ParsedMatch:
    def __init__(self, string_part: StringPart, value: _T):
        self.value = value
        self.string_part = string_part


class IMatcher(abc.ABC):
    @abc.abstractmethod
    def match(self, string_part: StringPart) -> Optional[ParsedMatch]:
        return NotImplemented

    def match_all(
        self, string_part: StringPart, fallback_transform: Callable[[StringPart], _T]
    ) -> Generator[ParsedMatch, None, None]:
        # Loop through segments divided by individual matches
        current_index = string_part.start_index
        while current_index < string_part.end_index:
            # Find a match within this segment
            match = self.match(
                string_part.slice(current_index, string_part.end_index - current_index)
            )

            # If there's no match - break
            if match is None:
                break

            # If this match doesn't start immediately at current index - transform and yield fallback first
            if match.string_part.start_index > current_index:
                fallback_part = string_part.slice(
                    current_index, match.string_part.start_index - current_index
                )
                yield ParsedMatch(fallback_part, fallback_transform(fallback_part))

            # Yield match
            yield match

            # Shift current index to the end of the match
            current_index = match.string_part.start_index + match.string_part.length

        # If EOL wasn't reached - transform and yield remaining part as fallback
        if current_index < string_part.end_index:
            fallback_part = string_part.slice(current_index)
            yield ParsedMatch(fallback_part, fallback_transform(fallback_part))


class RegexMatcher(IMatcher):
    # Callable must have two arguments
    def __init__(
        self, pattern: _Pattern, transform: Callable[[StringPart, _Match], _T]
    ):
        self._pattern = pattern
        self._transform = transform

    def match(self, string_part: StringPart) -> Optional[ParsedMatch]:
        # TODO: ???
        match = self._pattern.search(
            string_part.target,
            string_part.start_index,
            string_part.start_index + string_part.length,
        )
        if match is None:
            return None
        if (
            self._pattern.search(
                string_part.target[: string_part.end_index], string_part.start_index
            )
            is None
        ):
            return None
        # TODO: ???
        string_part_match = string_part.slice(
            match.start(), match.end() - match.start()
        )
        return ParsedMatch(string_part_match, self._transform(string_part_match, match))


class StringMatcher(IMatcher):
    def __init__(self, needle: str, transform: Callable[[StringPart], _T]):
        self._needle = needle
        self._transform = transform

    def match(self, string_part: StringPart) -> Optional[ParsedMatch]:
        try:
            # TODO: ???
            index = string_part.target.index(
                self._needle,
                string_part.start_index,
                string_part.start_index + string_part.length,
            )
        except ValueError:
            return None
        string_part_match = string_part.slice(index, len(self._needle))
        return ParsedMatch(string_part_match, self._transform(string_part_match))


class AggregateMatcher(IMatcher):
    def __init__(self, matchers: Union[List[IMatcher], IMatcher], *args: IMatcher):
        if isinstance(matchers, list):
            self.matchers = matchers
        else:
            self.matchers = [matchers, *args]

    def match(self, string_part: StringPart) -> Optional[ParsedMatch]:
        earliest_match = None

        # Try to match the input with each matcher and get the match with the lowest start index
        for matcher in self.matchers:
            # Try to match
            match = matcher.match(string_part)

            # If there's no match - continue
            if match is None:
                continue

            # If this match is earlier than previous earliest - replace
            if (
                earliest_match is None
                or match.string_part.start_index
                < earliest_match.string_part.start_index
            ):
                earliest_match = match

            # If the earliest match starts at the very beginning - break,
            # because it's impossible to find a match earlier than that
            if earliest_match.string_part.start_index == string_part.start_index:
                break

        return earliest_match


class Node(abc.ABC):
    pass


class FormattedNode(Node):
    def __init__(self, formatting: TextFormatting, children: List[Node]):
        self.formatting = formatting
        self.children = children

    def __str__(self):
        return f"<{self.formatting}> ({len(self.children)} direct children)"


class InlineCodeBlockNode(Node):
    def __init__(self, code: str):
        self.code = code

    def __str__(self):
        return f"<Code> {self.code}"


class MultiLineCodeBlockNode(Node):
    def __init__(self, language: str, code: str):
        self.code = code
        self.language = language

    def __str__(self):
        return f"<Code [{self.language}]> {self.code}"


class MentionNode(Node):
    def __init__(self, id: str, type: MentionType):
        self.type = type
        self.id = id

    def __str__(self):
        return f"<{self.type} mention> {self.id}"


class LinkNode(Node):
    def __init__(self, url: str, title: Optional[str] = None):
        if title is None:
            title = url
        self.url = url
        self.title = title

    def __str__(self):
        return f"<Link> {self.title}"


class TextNode(Node):
    def __init__(self, text: str):
        self.text = text

    def __str__(self):
        return self.text


class EmojiNode(Node):
    @overload
    def __init__(self, id: Optional[str], name: str, is_animated: bool):
        ...

    @overload
    def __init__(self, name: str):
        ...

    def __init__(self, id=None, name=None, is_animated=False):
        if name is None:
            name = id
            id = None
        self.id = id
        self.name = name
        self.is_animated = is_animated

    def is_custom_emoji(self) -> bool:
        return not is_none_or_white_space(self.id)

    def __str__(self):
        return f"<Emoji> {self.name}"


# The following parsing logic is meant to replicate Discord's markdown grammar as close as possible
def parse(
    string_part: Union[str, StringPart], matcher: Optional[IMatcher] = None
) -> List[Node]:
    if matcher is None:
        matcher = aggregate_node_matcher
    if not isinstance(string_part, StringPart):
        string_part = StringPart(string_part)

    return [p.value for p in matcher.match_all(string_part, lambda p: TextNode(str(p)))]


def parse_minimal(cls, string_part: Union[str, StringPart]) -> List[Node]:
    if not isinstance(string_part, StringPart):
        string_part = StringPart(string_part)
    return cls.parse(string_part, cls.minimal_aggregate_node_matcher)


default_regex_option = regex.MULTILINE | regex.UNICODE

# Formatting

# Capture any character until the earliest double asterisk not followed by an asterisk
# \*\*(.+?[*_]*)\*\*
_compiled = regex.compile(
    r"\*\*(.+?)\*\*(?!\*)", default_regex_option | regex.DOTALL
)

bold_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.BOLD, parse(p.slice(m)))
)

# Capture any character until the earliest single asterisk not preceded or followed by an asterisk
# Opening asterisk must not be followed by whitespace
# Closing asterisk must not be preceded by whitespace
_compiled = regex.compile(
    r"\*(?!\s)(.+?)(?<!\s|\*)\*(?!\*)", default_regex_option | regex.DOTALL
)
italic_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.ITALIC, parse(p.slice(m)))
)

# Capture any character until the earliest triple asterisk not followed by an asterisk
_compiled = regex.compile(
    r"\*(\*\*.+?\*\*)\*(?!\*)", default_regex_option | regex.DOTALL
)
italic_bold_formatted_node_matcher = RegexMatcher(
    _compiled,
    lambda p, m: FormattedNode(
        TextFormatting.ITALIC, parse(p.slice(m), bold_formatted_node_matcher)
    ),
)

_compiled = regex.compile(
    r"\*(\*\*.+?\*\*)\*(?!\*)", default_regex_option | regex.DOTALL
)
italic_bold_formatted_node_matcher_var1 = RegexMatcher(
    _compiled,
    lambda p, m: FormattedNode(
        TextFormatting.ITALIC, parse(p.slice(m), bold_formatted_node_matcher)
    ),
)


# Capture any character except underscore until an underscore
# Closing underscore must not be followed by a word character
_compiled = regex.compile(r"_([^_]+)_(?!\w)", default_regex_option | regex.DOTALL)
italic_alt_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.ITALIC, parse(p.slice(m)))
)

# Capture any character until the earliest double underscore not followed by an underscore
_compiled = regex.compile(r"__(.+?)__(?!_)", default_regex_option | regex.DOTALL)
underline_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.UNDERLINE, parse(p.slice(m)))
)

# Capture any character until the earliest triple underscore not followed by an underscore
_compiled = regex.compile(r"_(__.+?__)_(?!_)", default_regex_option | regex.DOTALL)
italic_underline_formatted_node_matcher = RegexMatcher(
    _compiled,
    lambda p, m: FormattedNode(
        TextFormatting.ITALIC, parse(p.slice(m), underline_formatted_node_matcher)
    ),
)

# Capture any character until the earliest double tilde
_compiled = regex.compile(r"~~(.+?)~~", default_regex_option | regex.DOTALL)
strikethrough_formatted_node_matcher = RegexMatcher(
    _compiled,
    lambda p, m: FormattedNode(TextFormatting.STRIKETHROUGH, parse(p.slice(m))),
)

# Capture any character until the earliest double pipe
_compiled = regex.compile(r"\|\|(.+?)\|\|", default_regex_option | regex.DOTALL)
spoiler_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.SPOILER, parse(p.slice(m)))
)

# Capture any character until the end of the line
# Opening 'greater than' character must be followed by whitespace
_compiled = regex.compile(r"^>\s(.+)\r?\n?", default_regex_option)
single_line_quote_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.QUOTE, parse(p.slice(m)))
)

# Capture any character until the end of the input
# Opening 'greater than' characters must be followed by whitespace
_compiled = regex.compile(r"^>>>\s(.+)", default_regex_option | regex.DOTALL)
multi_line_quote_formatted_node_matcher = RegexMatcher(
    _compiled, lambda p, m: FormattedNode(TextFormatting.QUOTE, parse(p.slice(m)))
)

# Code blocks

# Capture any character except backtick until a backtick
# Blank lines at the beginning and end of content are trimmed
_compiled = regex.compile(r"`([^`]+)`", default_regex_option | regex.DOTALL)
inline_code_block_node_matcher = RegexMatcher(
    _compiled, lambda p, m: InlineCodeBlockNode(m.group(1).strip("\r\n"))
)

# Capture language identifier and then any character until the earliest triple backtick
# Language identifier is one word immediately after opening backticks, followed immediately by newline
# Blank lines at the beginning and end of content are trimmed
_compiled = regex.compile(
    r"```(?:(\w*)\n)?(.+?)```", default_regex_option | regex.DOTALL
)
multi_line_code_block_node_matcher = RegexMatcher(
    _compiled, lambda p, m: MultiLineCodeBlockNode(m.group(1), m.group(2).strip("\r\n"))
)

# Mentions

# Capture @everyone
_text = "@everyone"
everyone_mention_node_matcher = StringMatcher(
    _text, lambda p: MentionNode("everyone", MentionType.META)
)

# Capture @here
_text = "@here"
here_mention_node_matcher = StringMatcher(
    _text, lambda p: MentionNode("here", MentionType.META)
)

# Capture <@123456> or <@!123456>
_compiled = regex.compile(r"<@!?(\d+)>", default_regex_option)
user_mention_node_matcher = RegexMatcher(
    _compiled, lambda p, m: MentionNode(m.group(1), MentionType.USER)
)

# Capture <#123456>
_compiled = regex.compile(r"<#(\d+)>", default_regex_option)
channel_mention_node_matcher = RegexMatcher(
    _compiled, lambda p, m: MentionNode(m.group(1), MentionType.CHANNEL)
)

# Capture <@&123456>
_compiled = regex.compile(r"<@&(\d+)>", default_regex_option)
role_mention_node_matcher = RegexMatcher(
    _compiled, lambda p, m: MentionNode(m.group(1), MentionType.ROLE)
)

# Emojis

# Capture all emojis supported by twemoji (saved - expensive operation)
# TODO: Update occasionally
# Generated with:
#
# import requests
# with requests.get('https://api.github.com/repos/twitter/twemoji/contents/assets') as r:
#     sha = next(d['sha'] for d in r.json() if d['name'] == "72x72")
# with requests.get(f'https://api.github.com/repos/twitter/twemoji/git/trees/{sha}') as r:
#     _twemoji_data = r.json()['tree']
# _twemoji_names = sorted((''.join('\\U{:0>8}'.format(u) for u in _emoji['path'][:-4].split('-')) for _emoji in _twemoji_data), key=len, reverse=True)
# _twemoji_regex = '(' + '|'.join(_twemoji_names) + ')'

with open(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "twemoji_list.pkl"), "rb"
) as f:
    _twemoji_regex = pickle.load(f)
_compiled = regex.compile(_twemoji_regex, default_regex_option)
standard_emoji_node_matcher = RegexMatcher(
    _compiled, lambda p, m: EmojiNode(m.group(1))
)

# Capture <:lul:123456> or <a:lul:123456>
_compiled = regex.compile(r"<(a)?:(.+?):(\d+?)>", default_regex_option)
custom_emoji_node_matcher = RegexMatcher(
    _compiled,
    lambda p, m: EmojiNode(
        m.group(3), m.group(2), not is_none_or_white_space(m.group(1))
    ),
)

#  Links

# Capture [title](link)
_compiled = regex.compile(r"\[(.+?)\]\((.+?)\)", default_regex_option)
titled_link_node_matcher = RegexMatcher(
    _compiled, lambda p, m: LinkNode(m.group(2), m.group(1))
)

# Capture any non-whitespace character after http:// or https:// until the last punctuation character or whitespace
_compiled = regex.compile(r"(https?://\S*[^.,:;\"'\s])", default_regex_option)
auto_link_node_matcher = RegexMatcher(_compiled, lambda p, m: LinkNode(m.group(1)))

# Same as auto link but also surrounded by angular brackets
_compiled = regex.compile(r"<(https?://\S*[^.,:;\"'\s])>", default_regex_option)
hidden_link_node_matcher = RegexMatcher(_compiled, lambda p, m: LinkNode(m.group(1)))

# Text

# Capture the shrug emoticon
# This escapes it from matching for formatting
_text = r"¯\_(ツ)_/¯"
shrug_text_node_matcher = StringMatcher(_text, lambda p: TextNode(str(p)))

# Capture some specific emojis that don't get rendered
# This escapes it from matching for emoji
_compiled = regex.compile(
    r"(\u26A7|\u2640|\u2642|\u2695|\u267E|\u00A9|\u00AE|\u2122)",
    default_regex_option,
)
ignored_emoji_text_node_matcher = RegexMatcher(
    _compiled, lambda p, m: TextNode(m.group(1))
)

# Capture any "symbol/other" character or surrogate pair preceded by a backslash
# This escapes it from matching for emoji
_compiled = regex.compile(r"\\(\p{So}|\p{Cs}{2})", default_regex_option)
escaped_symbol_text_node_matcher = RegexMatcher(
    _compiled, lambda p, m: TextNode(m.group(1))
)

# Capture any non-whitespace, non latin alphanumeric character preceded by a backslash
# This escapes it from matching for formatting or other tokens
_compiled = regex.compile(r"\\([^a-zA-Z0-9\s])", default_regex_option)
escaped_character_text_node_matcher = RegexMatcher(
    _compiled, lambda p, m: TextNode(m.group(1))
)

# Combine all matchers into one
# Matchers that have similar patterns are ordered from most specific to least specific
aggregate_node_matcher = AggregateMatcher(
    # Escaped text
    shrug_text_node_matcher,
    ignored_emoji_text_node_matcher,
    escaped_symbol_text_node_matcher,
    escaped_character_text_node_matcher,
    # Formatting
    italic_bold_formatted_node_matcher,
    italic_underline_formatted_node_matcher,
    bold_formatted_node_matcher,
    italic_formatted_node_matcher,
    underline_formatted_node_matcher,
    italic_alt_formatted_node_matcher,
    strikethrough_formatted_node_matcher,
    spoiler_formatted_node_matcher,
    multi_line_quote_formatted_node_matcher,
    single_line_quote_formatted_node_matcher,
    # Code blocks
    multi_line_code_block_node_matcher,
    inline_code_block_node_matcher,
    # Mentions
    everyone_mention_node_matcher,
    here_mention_node_matcher,
    user_mention_node_matcher,
    channel_mention_node_matcher,
    role_mention_node_matcher,
    #  Links
    titled_link_node_matcher,
    auto_link_node_matcher,
    hidden_link_node_matcher,
    # Emoji
    standard_emoji_node_matcher,
    custom_emoji_node_matcher,
)

# Minimal set of matchers for non-multimedia formats (e.g. plain text)
minimal_aggregate_node_matcher = AggregateMatcher(
    # Mentions
    everyone_mention_node_matcher,
    here_mention_node_matcher,
    user_mention_node_matcher,
    channel_mention_node_matcher,
    role_mention_node_matcher,
    # Emoji
    custom_emoji_node_matcher,
)


def _format_markdown_node(
    context: Optional[Dict[str, Dict[str, Dict[str, Any]]]], node: Node, is_jumbo: bool
) -> str:
    # Text node
    if isinstance(node, TextNode):
        return html_encode(node.text)

    # Formatted node
    if isinstance(node, FormattedNode):
        # Recursively get inner html
        inner_html = _format_markdown_nodes(context, node.children, False)

        # Bold
        if node.formatting == TextFormatting.BOLD:
            return f'<strong class="markdown">{inner_html}</strong>'

        # Italic
        if node.formatting == TextFormatting.ITALIC:
            return f'<em class="markdown">{inner_html}</em>'

        # Underline
        if node.formatting == TextFormatting.UNDERLINE:
            return f'<u class="markdown">{inner_html}</u>'

        # Strikethrough
        if node.formatting == TextFormatting.STRIKETHROUGH:
            return f'<s class="markdown">{inner_html}</s>'

        # Spoiler
        if node.formatting == TextFormatting.SPOILER:
            return f'<span class="spoiler markdown">{inner_html}</span>'

        # Quote
        if node.formatting == TextFormatting.QUOTE:
            return f'<div class="quote-container"><div contenteditable="false" class="quote-divider"></div><div class="quote markdown">{inner_html}</div></div>'

    # Inline code block node
    if isinstance(node, InlineCodeBlockNode):
        return f'<span class="pre pre--inline markdown">{html_encode(node.code)}</span>'

    # Multi-line code block node
    if isinstance(node, MultiLineCodeBlockNode):
        # Set CSS class for syntax highlighting
        highlight_css_class = (
            "nohighlight"
            if is_none_or_white_space(node.language)
            else f"language-{node.language}"
        )
        return f'<div class="pre pre--multiline {html_encode(highlight_css_class)} markdown">{html_encode(node.code)}</div>'

    # Mention node
    if isinstance(node, MentionNode):
        # Meta mention node
        if node.type == MentionType.META:
            return f'<span class="mention markdown">@{html_encode(node.id)}</span>'

        # TODO: implement hover for ID
        # User mention node
        if node.type == MentionType.USER:
            # TODO: Check
            if context is not None:
                member = context["user"].get(str(node.id))
                if member is not None:
                    full_name = member["name"] + "#" + member["discriminator"]
                    name = "@" + member["display_name"]
                else:
                    full_name = name = f"<@{node.id}>"
            else:  # Backwards compat, < v3.4.2
                full_name = name = f"<@{node.id}>"

            return f'<span class="mention markdown" title="{html_encode(full_name)}">{html_encode(name)}</span>'

        # Channel mention node
        if node.type == MentionType.CHANNEL:
            # TODO: Check
            if context is not None:
                channel = context["channel"].get(str(node.id))
                if channel is not None:
                    name = "#" + channel["name"]
                else:
                    name = f"<#{node.id}>"
            else:  # Backwards compat, < v3.4.2
                name = f"<#{node.id}>"

            return f'<span class="mention markdown">{html_encode(name)}</span>'

        # Role mention node
        if node.type == MentionType.ROLE:
            # TODO: Check, implement color
            if context is not None:
                role = context["role"].get(str(node.id))
                if role is not None:
                    name = "@" + role["name"]
                    color = role["color"]
                else:
                    name = f"<@&{node.id}>"
                    color = 0
            else:  # Backwards compat, < v3.4.2
                name = f"<@&{node.id}>"
                color = 0

            style = ''
            if color:
                # style="color: rgb(241, 196, 15); background-color: rgba(241, 196, 15, 0.1);" -> 0.3 (on hover)
                style = ''
            return f'<span class="mention markdown">{html_encode(name)}</span>'

    # Emoji node
    if isinstance(node, EmojiNode):
        # Get emoji image URL
        def get_twemoji_name(emoji: str) -> str:
            try:
                return "-".join("{:x}".format(ord(c)) for c in emoji)
            except (TypeError, IndexError):
                return "invalid"

        def get_image_url(id: Optional[str], name: str, is_animated: bool):
            # Custom emoji
            if not is_none_or_white_space(id):
                # Animated
                if is_animated:
                    return f"https://cdn.discordapp.com/emojis/{id}.gif"
                return f"https://cdn.discordapp.com/emojis/{id}.png"

            # Standard unicode emoji (via twemoji)
            twemoji_name = get_twemoji_name(name)
            return f"https://twemoji.maxcdn.com/2/72x72/{twemoji_name}.png"

        emoji_image_url = get_image_url(node.id, node.name, node.is_animated)

        # Make emoji large if it's jumbo
        jumboable_css_class = " emoji--large" if is_jumbo else ''

        return f'<img class="emoji{jumboable_css_class} markdown" draggable="false" alt="{node.name}" title="{node.name}" src="{emoji_image_url}" />'

    # Link node
    if isinstance(node, LinkNode):
        # Extract message ID if the link points to a Discord message
        linked_message_id = regex.match(
            "^https?://discordapp.com/channels/.*?/(\\d+)/?$", node.url
        )
        if is_none_or_white_space(linked_message_id):
            return f'<a class="link markdown" href="{html_encode(node.url)}">{html_encode(node.title)}</a>'
        else:
            # TODO: Remove or implement scrollToMessage
            return f'<a class="link markdown" href="{html_encode(node.url)}" onclick="scrollToMessage(event, \'{linked_message_id}\')">{html_encode(node.title)}</a>'

    raise ValueError(f"Unexpected node [{type(node)}].")


def _format_markdown_nodes(
    context: Optional[Dict[str, Dict[str, Dict[str, Any]]]],
    nodes: List[Node],
    is_top_level: bool,
):

    # Emojis are jumbo if all top-level nodes are emoji nodes or whitespace text nodes
    is_jumbo = is_top_level and all(
        isinstance(n, EmojiNode)
        or isinstance(n, TextNode)
        and is_none_or_white_space(n.text)
        for n in nodes
    )
    return "".join(_format_markdown_node(context, n, is_jumbo) for n in nodes)


def format_markdown(
    context: Optional[Dict[str, Dict[str, Dict[str, Any]]]], markdown: str
):
    return _format_markdown_nodes(context, parse(markdown), True)
