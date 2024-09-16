<script lang="ts">
	import type { SingleASTNode as MDSingleASTNode } from 'simple-markdown';
	import parse from 'discord-markdown-parser';

	import type { MessageContext } from '$lib/utils/models';
	import { RenderType } from '$lib/utils/models';

	import MultipleASTNodes from './MultipleASTNodes.svelte';

	export let content: string;
	export let context: MessageContext;

	let parsed: MDSingleASTNode[] = [];
	let isOnlyEmojis = false; // Whether the content is only emojis

	if (context.type === RenderType.REPLY && content.length > 180) {
		content = content.slice(0, 180) + '...'; // Truncate the content if it's a reply
	}

	parsed = parse(
		content,
		context.type === RenderType.EMBED || context.type === RenderType.WEBHOOK ? 'extended' : 'normal'
	);

	// TODO: Not sure if this works
	isOnlyEmojis = parsed.every(
		(node) =>
			['emoji', 'twemoji'].includes(node.type) ||
			(node.type === 'text' && node.content.trim().length === 0)
	);

	// If the content is only emojis and there are less than 25 emojis, set the largeEmojis flag
	if (isOnlyEmojis) {
		const emojis = parsed.filter((node) => ['emoji', 'twemoji'].includes(node.type));
		if (emojis.length <= 25) {
			context.largeEmojis = true;
		}
	}
</script>

<MultipleASTNodes nodes={parsed} {context} />
