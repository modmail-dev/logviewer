<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	let dropdownOpen = false;
	let dropdownRef: HTMLElement;

	// Filter state
	let recipient = '';
	let creator = '';
	let closer = '';
	let status: 'any' | 'open' | 'closed' = 'any';
	let channelId: number | null = null;
	let guildId: number | null = null;
	let minMessages: number | null = null;
	let maxMessages: number | null = null;
	let hasAttachments: 'any' | 'true' | 'false' = 'any'; // Attachment filter

	/**
	 * Closes the dropdown.
	 */
	function closeDropdown() {
		dropdownOpen = false;
	}

	/**
	 * Applies the current filter settings.
	 */
	function applyFilters() {
		dispatch('applyFilters', {
			recipient,
			creator,
			closer,
			status,
			channelId,
			guildId,
			minMessages,
			maxMessages,
			hasAttachments
		});
		closeDropdown();
	}

	/**
	 * Handles clicks outside the dropdown to close it.
	 * @param event - The click event.
	 */
	function handleClickOutside(event: MouseEvent) {
		// Close the dropdown if the user clicks outside of it
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			closeDropdown();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		// Populate the filter fields with the current URL query parameters
		const currentParams = new URLSearchParams(window.location.search);

		const recipientParam = currentParams.get('recipient');
		if (recipientParam != null) recipient = recipientParam;

		const creatorParam = currentParams.get('creator');
		if (creatorParam != null) creator = creatorParam;

		const closerParam = currentParams.get('closer');
		if (closerParam != null) closer = closerParam;

		const statusParam = currentParams.get('status');
		if (statusParam != null) status = statusParam as 'open' | 'closed';

		const channelIdParam = currentParams.get('channelId');
		if (channelIdParam != null) channelId = parseInt(channelIdParam, 10);

		const guildIdParam = currentParams.get('guildId');
		if (guildIdParam != null) guildId = parseInt(guildIdParam, 10);

		const minMessagesParam = currentParams.get('minMessages');
		if (minMessagesParam != null) minMessages = parseInt(minMessagesParam, 10);

		const maxMessagesParam = currentParams.get('maxMessages');
		if (maxMessagesParam != null) maxMessages = parseInt(maxMessagesParam, 10);

		const hasAttachmentsParam = currentParams.get('hasAttachments');
		if (hasAttachmentsParam != null) hasAttachments = hasAttachmentsParam as 'true' | 'false';
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="relative" bind:this={dropdownRef}>
	<!-- Button to toggle dropdown -->
	<button
		on:click={() => (dropdownOpen = !dropdownOpen)}
		class="hover:bg-input hover:text-input hover:opacity-90 flex items-center space-x-1 p-2 {dropdownOpen
			? 'bg-input text-input'
			: ''} rounded-lg"
	>
		<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	{#if dropdownOpen}
		<div
			class="absolute mt-2 w-72 bg-floating rounded-lg shadow-lg z-10 border border-1 border-subtle"
		>
			<div class="p-4 space-y-4">
				<h2 class="text-lg font-medium text-header-primary">Filters</h2>

				<!-- Recipient Filter -->
				<div>
					<label for="recipient" class="block text-sm font-medium text-header-secondary"
						>Recipient Name / ID</label
					>
					<input
						id="recipient"
						type="text"
						bind:value={recipient}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
					/>
				</div>

				<!-- Creator Filter -->
				<div>
					<label for="creator" class="block text-sm font-medium text-header-secondary"
						>Creator Name / ID</label
					>
					<input
						id="creator"
						type="text"
						bind:value={creator}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
					/>
				</div>

				<!-- Closer Filter -->
				<div>
					<label for="closer" class="block text-sm font-medium text-header-secondary"
						>Closer Name / ID</label
					>
					<input
						id="closer"
						type="text"
						bind:value={closer}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
					/>
				</div>

				<!-- Open/Closed Status Select -->
				<div>
					<label for="status" class="block text-sm font-medium text-header-secondary">Status</label>
					<select
						id="status"
						bind:value={status}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
					>
						<option value="any"></option>
						<option value="open">Open</option>
						<option value="closed">Closed</option>
					</select>
				</div>

				<!-- Channel ID Filter -->
				<div>
					<label for="channelId" class="block text-sm font-medium text-header-secondary"
						>Channel ID</label
					>
					<input
						id="channelId"
						type="number"
						bind:value={channelId}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
						style="appearance: none; -moz-appearance: textfield;"
					/>
				</div>

				<!-- Guild ID Filter -->
				<div>
					<label for="guildId" class="block text-sm font-medium text-header-secondary"
						>Guild ID</label
					>
					<input
						id="guildId"
						type="number"
						bind:value={guildId}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
						style="appearance: none; -moz-appearance: textfield;"
					/>
				</div>

				<!-- Min/Max Messages Inputs -->
				<div>
					<label class="block text-sm font-medium text-header-secondary" for="messageRange"
						>Message Count</label
					>
					<div id="messageRange" class="flex justify-between items-center space-x-2 mt-1">
						<input
							type="number"
							bind:value={minMessages}
							placeholder="Min"
							min="0"
							class="p-2 w-1/2 rounded bg-input focus:outline-none"
							style="appearance: none; -moz-appearance: textfield;"
						/>
						<input
							type="number"
							bind:value={maxMessages}
							placeholder="Max"
							min="0"
							class="p-2 w-1/2 rounded bg-input focus:outline-none"
							style="appearance: none; -moz-appearance: textfield;"
						/>
					</div>
				</div>

				<!-- Has Attachments Select -->
				<div>
					<label for="hasAttachments" class="block text-sm font-medium text-header-secondary"
						>Has Attachment(s)</label
					>
					<select
						id="hasAttachments"
						bind:value={hasAttachments}
						class="mt-1 p-2 w-full rounded bg-input focus:outline-none"
					>
						<option value="any"></option>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
			</div>

			<div class="p-4 flex justify-end space-x-4">
				<button
					on:click={closeDropdown}
					class="px-4 py-2 text-button bg-button-secondary rounded hover:bg-button-secondary-hover active:bg-button-secondary-active text-sm"
					>Cancel</button
				>
				<button
					on:click={applyFilters}
					class="px-4 py-2 text-button bg-button rounded hover:bg-button-hover active:bg-button-active text-sm"
					>Apply Filters</button
				>
			</div>
		</div>
	{/if}
</div>
