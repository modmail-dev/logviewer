<script lang="ts">
	// By default, dark mode is enabled in app.html
	let darkMode: boolean | undefined = undefined;

	/**
	 * Updates the theme based on the dark mode preference.
	 * Saves the theme preference in local storage.
	 */
	function updateTheme() {
		if (darkMode) {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	}

	/**
	 * Toggles the theme between light and dark mode.
	 */
	function toggleTheme() {
		darkMode = !darkMode;
		updateTheme();
	}

	// Check if the user has a theme preference saved in local storage
	if (typeof window !== 'undefined') {
		const theme: string | null = localStorage.getItem('theme');
		darkMode = theme === 'dark' || !theme; // Default to dark mode if no preference is set
		updateTheme();
	}
</script>

{#if darkMode !== undefined}
	<button
		on:click={toggleTheme}
		class="p-2 flex items-center justify-center text-nav-interactive hover:text-nav-interactive-hover active:text-nav-interactive-active"
	>
		{#if !darkMode}
			<!-- Moon Icon for Dark Mode -->
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z"
					fill="currentColor"
					fill-opacity=".36"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		{:else}
			<!-- Sun Icon for Light Mode -->
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g stroke="currentColor" opacity=".8" stroke-width="1.5" stroke-miterlimit="10"
					><path
						d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
						stroke-linecap="round"
					/><path
						d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
						fill="currentColor"
						fill-opacity=".16"
					/><path d="M12 19v4M12 1v4" stroke-linecap="round" /></g
				><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs>
			</svg>
		{/if}
	</button>
{/if}
