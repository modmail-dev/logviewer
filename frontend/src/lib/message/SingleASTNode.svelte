<script lang="ts">
	import type { SingleASTNode as MDSingleASTNode } from 'simple-markdown';
	import '@skyra/discord-components-core';

	import type { MessageContext, Channel, Role, User } from '$lib/utils/models';
	import { RenderType, ChannelType } from '$lib/utils/models';

	import MultipleASTNodes from './MultipleASTNodes.svelte';

	export let node: MDSingleASTNode;
	export let context: MessageContext;

	$: nodeType = node.type;

	// The resolved channel, role, and user if the node is a mention
	let channel: Channel | null = null;
	let role: Role | null = null;
	let user: User | null = null;

	/**
	 * Resolves the channel based on the node ID.
	 * @param id - The ID of the channel.
	 * @returns The resolved channel or null if not found.
	 */
	async function resolveChannel(id: string): Promise<Channel | null> {
		return null; // TODO: Implement this function
	}

	/**
	 * Resolves the role based on the node ID.
	 * @param id - The ID of the role.
	 * @returns The resolved role or null if not found.
	 */
	async function resolveRole(id: string): Promise<Role | null> {
		return null; // TODO: Implement this function
	}

	/**
	 * Resolves the user based on the node ID.
	 * @param id - The ID of the user.
	 * @returns The resolved user or null if not found.
	 */
	async function resolveUser(id: string): Promise<User | null> {
		return null; // TODO: Implement this function
	}

	/**
	 * Resolve channel, role, and user based on the node type.
	 */
	async function resolveAll() {
		if (nodeType === 'channel') {
			channel = await resolveChannel(node.id as string);
		} else if (nodeType === 'role') {
			role = await resolveRole(node.id as string);
		} else if (nodeType === 'user') {
			user = await resolveUser(node.id as string);
		}
	}

	resolveAll();
</script>

{#if nodeType === 'text'}
	{node.content}
{:else if nodeType === 'link'}
	<a href={node.target}>
		<MultipleASTNodes nodes={node.content} {context} />
	</a>
{:else if nodeType === 'url' || nodeType === 'autolink'}
	<a href={node.target} target="_blank" rel="noreferrer">
		<MultipleASTNodes nodes={node.content} {context} />
	</a>
{:else if nodeType === 'blockQuote'}
	{#if context.type === RenderType.REPLY}
		<MultipleASTNodes nodes={node.content} {context} />
	{:else}
		<discord-quote>
			<MultipleASTNodes nodes={node.content} {context} />
		</discord-quote>
	{/if}
{:else if nodeType === 'br' || nodeType === 'newline'}
	{#if context.type === RenderType.REPLY}
		{' '}
	{:else}
		<br />
	{/if}
{:else if nodeType === 'channel'}
	{#if channel === null}
		<discord-mention type="channel">
			{'<#${node.id}>'}
		</discord-mention>
	{:else if channel.dm}
		<discord-mention type="channel"> DM Channel </discord-mention>
	{:else}
		<discord-mention type={ChannelType[channel.type].toLowerCase()}>
			{channel.name}
		</discord-mention>
	{/if}
{:else if nodeType === 'role'}
	<discord-mention
		type="role"
		color={context.type === RenderType.REPLY ? undefined : role?.hexColor}
	>
		{role ? role.name : `<@&${node.id}>`}
	</discord-mention>
{:else if nodeType === 'user'}
	<discord-mention type="user">
		{user ? user.name : `<@${node.id}>`}
	</discord-mention>
{:else if nodeType === 'here' || nodeType === 'everyone'}
	<discord-mention type="role" highlight>
		@{nodeType}
	</discord-mention>
{:else if nodeType === 'codeBlock'}
	{#if context.type !== RenderType.REPLY}
		<discord-code multiline> node.content </discord-code>
	{:else}
		<discord-code>
			{node.content}
		</discord-code>
	{/if}
{:else if nodeType === 'inlineCode'}
	<discord-code>
		{node.content}
	</discord-code>
{:else if nodeType === 'em'}
	<discord-italic>
		<MultipleASTNodes nodes={node.content} {context} />
	</discord-italic>
{:else if nodeType === 'strong'}
	<discord-bold>
		<MultipleASTNodes nodes={node.content} {context} />
	</discord-bold>
{:else if nodeType === 'underline'}
	<discord-underlined>
		<MultipleASTNodes nodes={node.content} {context} />
	</discord-underlined>
{:else if nodeType === 'strikethrough'}
	<s>
		<MultipleASTNodes nodes={node.content} {context} />
	</s>
{:else if nodeType === 'emoticon'}
	{#if typeof node.content === 'string'}
		{node.content}
	{:else}
		<MultipleASTNodes nodes={node.content} {context} />
	{/if}
{:else if nodeType === 'spoiler'}
	<discord-spoiler>
		<MultipleASTNodes nodes={node.content} {context} />
	</discord-spoiler>
{:else if nodeType === 'emoji' || nodeType === 'twemoji'}
	<!-- TODO: Implement this -->
	<!--  <discord-custom-emoji name={node.name} url={parseDiscordEmoji(node)} {context.type === 'EMBED' ? 'embed-emoji' : ''} />-->
{:else if nodeType === 'timestamp'}
	<!-- TODO: Implement this -->
	<!--  <discord-time timestamp={parseInt(node.timestamp) * 1000} format={node.format} />-->
{:else if typeof node.content === 'string'}
	{node.content}
{:else}
	<MultipleASTNodes nodes={node.content} {context} />
{/if}
