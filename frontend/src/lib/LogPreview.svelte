<script lang="ts">
	import type { Log } from '$lib/utils/models';

	export let log: Log;

	// Function to format the date
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	}
</script>

<!-- TODO: BOILER PLATE FORMAT, WILL CHANGE -->
<a href={`/logs/view?key=${log.key}`} class="block rounded">
	<div class="flex flex-col space-y-2 p-2">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold">{log.title}</h3>
			{#if log.nsfw}
				<span class="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">NSFW</span>
			{/if}
		</div>

		<div class="text-sm">
			<p>Opened: {formatDate(log.created_at)}</p>
			{#if log.closed_at}
				<p>Closed: {formatDate(log.closed_at)}</p>
			{:else}
				<p class="text-green-600 font-semibold">Open</p>
			{/if}
		</div>

		<div class="flex items-center text-sm">
			<p class="mr-2">Channel ID: {log.channel_id}</p>
			<p class="mr-2">Guild ID: {log.guild_id}</p>
		</div>

		<div class="flex items-center text-sm">
			<p>Created by: {log.creator.name}</p>
			{#if log.closer}
				<p class="ml-4">Closed by: {log.closer.name}</p>
			{/if}
		</div>
	</div>
</a>
