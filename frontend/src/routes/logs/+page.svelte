<script lang="ts">
	import { onMount } from 'svelte';
	import FilterOptions from '$lib/FilterOptions.svelte';
	import LogPreview from '$lib/LogPreview.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SortOptions from '$lib/SortOptions.svelte';
	import type { Log } from '$lib/utils/models';
	import { goto, onNavigate } from '$app/navigation';

	let logs: Log[] = [];

	// For pagination:
	let page = 1;
	let limit = 20;
	let totalLogs = 0;
	let totalPages = 0;

	// For loading state:
	let loading = true;
	let error: string | null = null; // TODO: better error handling

	// TODO: Use the correct API URL (from hostname)
	const apiUrl = '/api/logs';

	/**
	 * Fetches a list of logs from the API.
	 */
	async function fetchLogs() {
		loading = true;
		error = null;

		// Use the same query parameters from the URL, which include filters and pagination
		const params = new URLSearchParams(window.location.search);

		try {
			// Fetch the logs from the API
			const response = await fetch(`${apiUrl}?${params}`);
			if (response.ok) {
				const raw_logs = await response.json();
				console.log('Fetched log:', raw_logs);

				if (raw_logs && raw_logs.success === true) {
					logs = raw_logs.results;
					// Get the total number of logs and calculate the total pages
					totalLogs = raw_logs.total_results;
					// TODO: Use the result's limit, update local limit if different
					totalPages = Math.ceil(totalLogs / limit);

					if (totalPages > 0 && page > totalPages) {
						console.log('Page is greater than total pages, going to last page.');
						// If the current page is greater than the total pages, go to the last page
						page = totalPages;
						params.set('page', page.toString());
						await goto(`${window.location.pathname}?${params.toString()}`);
						await fetchLogs();
						return;
					}

					if (totalPages > 0 && (page !== raw_logs.page || limit !== raw_logs.limit)) {
						console.log(
							'Page or limit changed. Current:',
							page,
							limit,
							'New:',
							raw_logs.page,
							raw_logs.limit
						);
						// Update the current page and limit from the response
						page = raw_logs.page;
						limit = raw_logs.limit;

						params.set('page', page.toString());
						params.set('limit', limit.toString());
						await goto(`${window.location.pathname}?${params.toString()}`);
					}
				} else {
					error = 'An error occurred while fetching the logs.';
				}
			} else {
				error = 'An error occurred while fetching the logs.';
			}
		} catch (err) {
			// TODO: This gets errored when rapidly refreshing the page
			error = 'An error occurred while fetching the logs.';
		}

		if (error) {
			logs = []; // Clear the logs list if an error occurred
		}
		loading = false;
	}

	/**
	 * Applies the filters to the logs list.
	 * This function is dispatched when the filters are applied.
	 * @param {CustomEvent} event - The event containing the filters.
	 */
	function applyFilters(event: CustomEvent) {
		// When the filters are applied, fetch the logs with the new filters
		const filters = event.detail;
		const currentParams = new URLSearchParams(window.location.search);

		// Add or update the filter parameters
		if (filters.recipient) currentParams.set('recipient', filters.recipient);
		else currentParams.delete('recipient');
		if (filters.creator) currentParams.set('creator', filters.creator);
		else currentParams.delete('creator');
		if (filters.closer) currentParams.set('closer', filters.closer);
		else currentParams.delete('closer');
		if (filters.status !== 'any') currentParams.set('status', filters.status);
		else currentParams.delete('status');
		if (filters.channelId !== null) currentParams.set('channelId', filters.channelId.toString());
		else currentParams.delete('channelId');
		if (filters.guildId !== null) currentParams.set('guildId', filters.guildId.toString());
		else currentParams.delete('guildId');
		if (filters.minMessages !== null)
			currentParams.set('minMessages', filters.minMessages.toString());
		else currentParams.delete('minMessages');
		if (filters.maxMessages !== null)
			currentParams.set('maxMessages', filters.maxMessages.toString());
		else currentParams.delete('maxMessages');
		if (filters.hasAttachments !== 'any')
			currentParams.set('hasAttachments', filters.hasAttachments);
		else currentParams.delete('hasAttachments');

		// Reset to the first page when filters are applied
		page = 1;
		currentParams.set('page', page.toString());

		// Construct the new URL and update the URL in the browser
		goto(`${window.location.pathname}?${currentParams.toString()}`);
		fetchLogs();
	}

	/**
	 * Changes the current page number and fetches the logs for the new page.
	 * @param {number} newPage - The new page number.
	 */
	async function changePage(newPage: number) {
		// Update the current page
		page = newPage;

		// Update the URL with the new page number
		const currentParams = new URLSearchParams(window.location.search);

		if (currentParams.get('page') === page.toString()) {
			// If the page number is the same, don't reload the logs
			return;
		}

		currentParams.set('page', page.toString());
		await goto(`${window.location.pathname}?${currentParams.toString()}`);
		await fetchLogs();
	}

	/**
	 * Changes the logs-per-page limit and fetches the logs for the new limit.
	 * @param {number} newLimit - The new limit of logs per page.
	 */
	async function changeLimit(newLimit: number) {
		// Update the logs-per-page limit and reset to the first page
		limit = newLimit;
		page = 1;

		// Update the URL with the new page number and limit
		const currentParams = new URLSearchParams(window.location.search);
		currentParams.set('page', page.toString());
		currentParams.set('limit', limit.toString());
		await goto(`${window.location.pathname}?${currentParams.toString()}`);
		await fetchLogs();
	}

	/**
	 * Navigates to the specified page number when the user updates the input box.
	 * @param {Event} event - The input change event.
	 */
	function goToPage(event: Event) {
		// When the page input changes, go to the new page if it's valid.
		const input = event.target as HTMLInputElement;
		let newPage = parseInt(input.value, 10);
		if (newPage < 1 || isNaN(newPage)) {
			// If the new page is less than 1, set it to 1
			input.value = '1';
			newPage = 1;
		} else if (newPage > totalPages) {
			// If the new page is greater than the total pages, set it to the last page
			input.value = totalPages.toString();
			newPage = totalPages;
		}
		changePage(newPage);
	}

	/**
	 * Handles the sort change event and fetches the logs with the new sort option.
	 * @param {CustomEvent} event - The event containing the sort option.
	 */
	async function handleSortChange(event: CustomEvent) {
		const { option } = event.detail;

		const currentParams = new URLSearchParams(window.location.search);
		currentParams.set('sort', option);

		// Reset to the first page when filters are applied
		page = 1;
		currentParams.set('page', page.toString());

		await goto(`${window.location.pathname}?${currentParams.toString()}`);
		await fetchLogs();
	}

	onMount(() => {
		// Get the page and limit from the URL query parameters, or use default values
		const currentParams = new URLSearchParams(window.location.search);
		page = parseInt(currentParams.get('page') || page.toString(), 10);
		limit = parseInt(currentParams.get('limit') || limit.toString(), 10);
		fetchLogs();
	});

	onNavigate(() => {
		// Get the page and limit from the URL query parameters, in case they changed
		const currentParams = new URLSearchParams(window.location.search);
		let newPage = parseInt(currentParams.get('page') || page.toString(), 10);
		let newLimit = parseInt(currentParams.get('limit') || limit.toString(), 10);
		if (newPage !== page || newLimit !== limit) {
			console.log('Navigated to a new page or limit, re-fetching logs...');
			page = newPage;
			limit = newLimit;
			fetchLogs();
		}
	});
</script>

<svelte:head>
	<title>Logs - Logviewer</title>
</svelte:head>

<div class="container mx-auto p-4 text-normal text-sm mb-4">
	{#if error}
		<!-- Error Message -->
		<!-- TODO: Move to the top of the page, don't override the page content -->
		<div class="bg-red-100 text-red-700 border border-red-300 rounded-lg p-4 mb-4">
			<p>{error}</p>
		</div>
	{:else}
		{#if logs.length !== 0}
			<div class="flex justify-between items-center text-header-secondary">
				<!-- Left: Logs List Heading and Filter Options -->
				<div class="flex items-center space-x-2 p-3">
					<h2 class="text-xl font-semibold text-header-primary">Logs List</h2>
					<FilterOptions on:applyFilters={applyFilters} />
				</div>

				<!-- Right: Sort Options and Pagination Navigator -->
				<div class="flex items-center space-x-2 p-3">
					<SortOptions on:sortChange={handleSortChange} />

					<span>
						Page <input
							type="number"
							class="rounded w-12 px-2 py-1 bg-input font-medium focus:outline-none"
							bind:value={page}
							min="1"
							max={totalPages}
							style="appearance: none; -moz-appearance: textfield;"
							on:change={goToPage}
						/>
						of {totalPages}
					</span>
				</div>
			</div>
		{/if}

		{#if loading}
			<!-- Loading State -->
			<div class="text-center py-8">Loading...</div>
		{:else}
			<!-- Logs List -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each logs as log}
					<div class="bg-card rounded shadow-md p-4">
						<LogPreview {log} />
					</div>
				{/each}
			</div>
		{/if}
		{#if logs.length === 0}
			{#if !loading}
				<!-- No Logs Found -->
				<div class="text-center py-8">No logs found.</div>
			{/if}
		{:else}
			<div class="mt-4 text-header-secondary">
				<Pagination
					{page}
					{totalPages}
					{limit}
					{totalLogs}
					onPageChange={changePage}
					onLimitChange={changeLimit}
				/>
			</div>
		{/if}
	{/if}
</div>
