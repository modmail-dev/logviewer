<script lang="ts">
	export let page: number;
	export let totalPages: number;
	export let totalLogs: number;
	export let limit: number;

	$: rangeStart = (page - 1) * limit + 1;
	$: rangeEnd = Math.min(page * limit, totalLogs);

	export let onPageChange: (newPage: number) => void; // Function to call when the page changes
	export let onLimitChange: (newLimit: number) => void; // Function to call when the limit changes

	// Convert the limit to a string for binding, bind:value does not accept numbers
	$: limitString = limit.toString();

	/**
	 * Handles changing the page number.
	 * @param newPage - The new page number.
	 */
	function handlePageChange(newPage: number) {
		// Ensure the new page is within the valid range, then call the onPageChange function
		if (newPage <= 0) {
			newPage = 1;
		} else if (newPage > totalPages) {
			newPage = totalPages;
		}
		onPageChange(newPage);
	}

	/**
	 * Handles changing the limit.
	 * @param event - The change event.
	 */
	function handleLimitChange(event: Event) {
		// When the limit changes, update the limit and call the onLimitChange function
		const target = event.target as HTMLSelectElement;
		limit = parseInt(target.value, 10);
		onLimitChange(limit);
	}
</script>

<div class="flex items-center justify-between p-4 bg-secondary rounded shadow-md">
	<!-- Logs per page selector -->
	<div class="flex items-center space-x-2">
		<span>Logs per page:</span>
		<select class="p-2 rounded bg-input" bind:value={limitString} on:change={handleLimitChange}>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="50">50</option>
			<option value="100">100</option>
		</select>
	</div>

	<!-- Range and Page Navigation -->
	<div class="flex items-center space-x-4">
		<span>
			{rangeStart}–{rangeEnd} of {totalLogs}
		</span>

		<button class="p-2" on:click={() => handlePageChange(page - 1)} disabled={page === 1}>
			<!-- Left Arrow Icon -->
			<svg
				class="h-5 w-5 {page === 1 ? 'opacity-40' : ''}"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
					fill="currentColor"
				/>
			</svg>
		</button>

		<button class="p-2" on:click={() => handlePageChange(page + 1)} disabled={page === totalPages}>
			<!-- Right Arrow Icon -->
			<svg
				class="h-5 w-5 {page === totalPages ? 'opacity-40' : ''}"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	</div>
</div>
