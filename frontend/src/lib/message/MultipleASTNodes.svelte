<script lang="ts">
	import type { SingleASTNode as MDSingleASTNode } from 'simple-markdown';
	import type { MessageContext } from '$lib/utils/models';

	import SingleASTNode from './SingleASTNode.svelte';

	export let nodes: MDSingleASTNode[];
	export let context: MessageContext;
</script>

{#if Array.isArray(nodes)}
	{#each nodes as child, i (i)}
		<SingleASTNode node={child} {context} />
	{/each}
{:else}
	<SingleASTNode node={nodes} {context} />
{/if}
