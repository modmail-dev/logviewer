<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import '@skyra/discord-components-core';

	import Content from '$lib/message/Content.svelte';
	import { type Log, RenderType } from '$lib/utils/models';

	import { applyStylesToAllShadowRoots } from './processStyle';

	// TODO: Use the correct API URL (from hostname)
	const apiUrl = '/api/logs';

	let log: Log | null = null;
	let error: string | null = null;
	let key: string;
	let ws: WebSocket | null; // TODO: Implement WebSocket

	/**
	 * Fetches the log from the API.
	 */
	async function fetchLog() {
		log = null;
		error = null;

		if (!key) {
			error = 'No log key provided.';
			return;
		}

		try {
			const response = await fetch(`${apiUrl}/${key}`);

			if (response.ok) {
				const raw_log = await response.json();
				if (raw_log && raw_log.success === true) {
					log = raw_log.result;
				}
			}
			if (!log) {
				error = 'Log not found.';
			}
		} catch (err) {
			error = 'An error occurred while fetching the log.';
		}
	}

	// Observe for dynamic changes
	let observer: MutationObserver | null;

	onMount(() => {
		// Get the log key from the URL query parameters
		key = new URLSearchParams(window.location.search).get('key') || '';

		fetchLog().then(() => {
			if (log) {
				// Apply custom styles to Discord components
				const component = document.querySelector('discord-messages');

				if (component) {
					// Apply styles initially
					applyStylesToAllShadowRoots(component);

					// Observe for dynamic changes, and apply styles when something changes
					observer = new MutationObserver((mutations) => {
						mutations.forEach((mutation) => {
							mutation.addedNodes.forEach((node) => {
								if (node instanceof Element) {
									// Apply to both the shadow root and the element itself
									if (node.shadowRoot) {
										applyStylesToAllShadowRoots(node.shadowRoot);
									}
									applyStylesToAllShadowRoots(node);
								}
							});
						});
					});
					observer.observe(component, { childList: true, subtree: true });
				}
			}
		});

		//
		// const updateLog = (update: LogUpdate) => {
		//   if (log && log.key === update.key) {
		//     if (update.open !== undefined) log.open = update.open;
		//     if (update.closed_at !== undefined) log.closed_at = update.closed_at;
		//     if (update.close_message !== undefined) log.close_message = update.close_message;
		//     if (update.messages) log.messages = log.messages.concat(update.messages);
		//   }
		// };

		// ws = new WebSocket('ws://your-websocket-url');
		// ws.onmessage = (event) => {
		//   const update: LogUpdate = JSON.parse(event.data);
		//   updateLog(update);
		// };
	});

	onDestroy(() => {
		// Close the WebSocket connection
		if (ws) {
			ws.close();
			ws = null;
		}
		// Disconnect the observer
		if (observer) {
			observer.disconnect();
			observer = null;
		}
	});
</script>

<div class="p-4">
	{#if error}
		<div class="bg-red-100 text-red-700 border border-red-300 rounded-lg p-4 mb-4">
			<p>{error}</p>
		</div>
	{:else if log}
		<div class="rounded-lg p-4">
			<!--      <h1 class="text-2xl font-bold mb-2">{log.title}</h1>-->
			<!--      <div class="text-gray-600 mb-4">-->
			<!--        <p>Created by {log.creator.name} on {new Date(log.created_at).toLocaleString()}</p>-->
			<!--        {#if log.closed_at}-->
			<!--          <p>Closed by {log.closer?.name} on {new Date(log.closed_at).toLocaleString()}</p>-->
			<!--        {:else}-->
			<!--          <p>Status: Open</p>-->
			<!--        {/if}-->
			<!--      </div>-->

			{#if log.messages.length > 0}
				<discord-messages style="background-color: var(--background-primary); border: none;">
					{#each log.messages as message}
						<discord-message
							timestamp={message.timestamp}
							author={message.author.name}
							avatar={message.author.avatar_url}
						>
							<Content
								content={message.content}
								context={{ type: RenderType.EMBED, largeEmojis: false }}
							/>
						</discord-message>
					{/each}
				</discord-messages>
			{:else}
				<p>No messages found.</p>
			{/if}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
