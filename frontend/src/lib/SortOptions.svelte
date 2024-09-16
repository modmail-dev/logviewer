<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();

	export let selectedSortOption = 'Creation Date'; // Default sorting option
	let dropdownOpen = false; // Dropdown open state
	let dropdownRef: HTMLElement;

	const sortOptions = ['Creation Date', 'Closure Date', 'Recipient Name', 'Open/Closed Status'];

	/**
	 * Selects a sorting option and dispatches a sortChange event.
	 * @param option - The selected sorting option.
	 */
	const selectOption = (option: string) => {
		selectedSortOption = option;
		dropdownOpen = false;
		dispatch('sortChange', { option });
	};

	/**
	 * Closes the dropdown.
	 */
	function closeDropdown() {
		dropdownOpen = false;
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
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="relative inline-block" bind:this={dropdownRef}>
	<!-- Sort by button -->
	<button
		class="flex items-center w-full rounded-md px-4 py-2 text-xs"
		on:click={() => (dropdownOpen = !dropdownOpen)}
	>
		Sort by
		<svg
			class="w-4 h-4 ml-1 dropdown-icon {dropdownOpen ? 'open' : ''}"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if dropdownOpen}
		<div
			class="origin-top-right absolute right-0 mt-2 w-56 bg-floating rounded-lg shadow-lg z-10 border border-1 border-subtle"
		>
			<div class="py-1">
				{#each sortOptions as option}
					<button
						class="flex justify-between w-full px-4 py-2 text-sm text-header-secondary hover:bg-floating-hover focus:bg-floating-focus"
						on:click={() => selectOption(option)}
					>
						{option}
						{#if selectedSortOption === option}
							<!-- Checkmark icon for selected option -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-brand"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Flip the dropdown icon when opened */
	.dropdown-icon {
		transition: transform 0.3s ease;
	}
	.dropdown-icon.open {
		transform: rotate(180deg);
	}
</style>
