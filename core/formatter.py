import html
import re
import base64


def format_content_html(content: str, allow_links: bool = False) -> str:
    # HTML-encode content

    def encode_codeblock(m):
        encoded = base64.b64encode(m.group(1).encode()).decode()
        return "\x1AM" + encoded + "\x1AM"

    # Encode multiline codeblocks (```text```)
    content = re.sub(r"```+((?:[^`]*?\n)?(?:[^`]+))\n?```+", encode_codeblock, content)

    content = html.escape(content)

    def encode_inline_codeblock(m):
        encoded = base64.b64encode(m.group(1).encode()).decode()
        return "\x1AI" + encoded + "\x1AI"

    # Encode inline codeblocks (`text`)
    content = re.sub(r"`([^`]+)`", encode_inline_codeblock, content)

    # Encode links
    if allow_links:

        def encode_link(m):
            encoded_1 = base64.b64encode(m.group(1).encode()).decode()
            encoded_2 = base64.b64encode(m.group(2).encode()).decode()
            return "\x1AL" + encoded_1 + "|" + encoded_2 + "\x1AL"

        content = re.sub(r"\[(.*?)\]\((.*?)\)", encode_link, content)

    def encode_url(m):
        encoded = base64.b64encode(m.group(1).encode()).decode()
        return "\x1AU" + encoded + "\x1AU"

    # Encode URLs
    content = re.sub(
        r"(\b(?:(?:https?|ftp|file)://|www\.|ftp\.)(?:\([-a-zA-Z0"
        r"-9+&@#/%?=~_|!:,\.\[\];]*\)|[-a-zA-Z0-9+&@#/%?=~_|!:,\."
        r"\[\];])*(?:\([-a-zA-Z0-9+&@#/%?=~_|!:,\.\[\];]*\)|[-a-z"
        r"A-Z0-9+&@#/%=~_|$]))",
        encode_url,
        content,
    )

    # Process bold (**text**)
    content = re.sub(r"(\*\*)(?=\S)(.+?[*_]*)(?<=\S)\1", r"<b>\2</b>", content)

    # Process underline (__text__)
    content = re.sub(r"(__)(?=\S)(.+?)(?<=\S)\1", r"<u>\2</u>", content)

    # Process italic (*text* or _text_)
    content = re.sub(r"(\*|_)(?=\S)(.+?)(?<=\S)\1", r"<i>\2</i>", content)

    # Process strike through (~~text~~)
    content = re.sub(r"(~~)(?=\S)(.+?)(?<=\S)\1", r"<s>\2</s>", content)

    def decode_inline_codeblock(m):
        decoded = base64.b64decode(m.group(1).encode()).decode()
        return '<span class="pre pre--inline">' + decoded + "</span>"

    # Decode and process inline codeblocks
    content = re.sub("\x1AI(.*?)\x1AI", decode_inline_codeblock, content)

    # Decode and process links
    if allow_links:

        def decode_link(m):
            encoded_1 = base64.b64decode(m.group(1).encode()).decode()
            encoded_2 = base64.b64decode(m.group(2).encode()).decode()
            return '<a href="' + encoded_2 + '">' + encoded_1 + "</a>"

        # Potential bug, may need to change to: '\x1AL(.*?)\|(.*?)\x1AL'
        content = re.sub("\x1AL(.*?)\\|(.*?)\x1AL", decode_link, content)

    def decode_url(m):
        decoded = base64.b64decode(m.group(1).encode()).decode()
        return '<a href="' + decoded + '">' + decoded + "</a>"

    # Decode and process URLs
    content = re.sub("\x1AU(.*?)\x1AU", decode_url, content)

    # Process new lines
    content = content.replace("\n", "<br>")

    def decode_codeblock(m):
        decoded = base64.b64decode(m.group(1).encode()).decode()
        match = re.match("^([^`]*?\n)?([^`]+)$", decoded)
        lang = match.group(1) or ""
        if not lang.strip(" \n\r"):
            lang = "plaintext"
        else:
            lang = lang.strip(" \n\r")

        result = html.escape(match.group(2))
        return f'<div class="pre pre--multiline {lang}">{result}' "</div>"

    # Decode and process multiline codeblocks
    content = re.sub("\x1AM(.*?)\x1AM", decode_codeblock, content)

    # Meta mentions (@everyone)
    content = content.replace("@everyone", '<span class="mention">@everyone</span>')

    # Meta mentions (@here)
    content = content.replace("@here", '<span class="mention">@here</span>')

    # User mentions (<@id> and <@!id>)
    content = re.sub(
        r"(&lt;@!?(\d+)&gt;)", r'<span class="mention" title="\2">\1</span>', content
    )

    # Channel mentions (<#id>)
    content = re.sub(r"(&lt;#\d+&gt;)", r'<span class="mention">\1</span>', content)

    # Role mentions (<@&id>)
    content = re.sub(
        r"(&lt;@&amp;(\d+)&gt;)", r'<span class="mention">\1</span>', content
    )

    # Custom emojis (<:name:id>)
    is_jumboable = not re.sub(r"&lt;(:.*?:)(\d*)&gt;", "", content)
    emoji_class = "emoji emoji--large" if is_jumboable else "emoji"
    content = re.sub(
        r"&lt;(:.*?:)(\d*)&gt;",
        r'<img class="'
        + emoji_class
        + r'" title="\1" src="https://cdn.discordapp.com/'
        + r'emojis/\2.png" alt="\1">',
        content,
    )

    # Custom animated emojis (<a:name:id>)
    is_jumboable_animated = not re.sub(r"&lt;(a:.*?:)(\d*)&gt;", "", content)
    emoji_class_animated = "emoji emoji--large" if is_jumboable_animated else "emoji"
    content = re.sub(
        r"&lt;(a:.*?:)(\d*)&gt;",
        r'<img class="'
        + emoji_class_animated
        + r'" title="\1" src="https://cdn.discordapp.com/'
        + r'emojis/\2.gif" alt="\1">',
        content,
    )

    return content
