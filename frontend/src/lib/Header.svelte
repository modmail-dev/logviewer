<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';

	export let title: string; // Title of the application
	let searchQuery: string = '';

	/**
	 * Forces a reload when navigating to the same page.
	 * @param event - The click event.
	 */
	function navLinkForceReload(event: MouseEvent) {
		const target = event.currentTarget as HTMLAnchorElement;
		const href = target.href;

		// If the current and target URLs are the same, force a refresh
		if (window.location.pathname === new URL(href, window.location.origin).pathname) {
			// Prevent default action to control navigation manually
			event.preventDefault();
			// If the target URL is the same as the current URL, force a refresh
			window.location.href = href;
		}
	}
</script>

<!-- TODO: For small screens, hide the search bar into a collapsable search icon -->

<header class="bg-secondary text-nav p-4 shadow-md">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Left: Title and Logs Link -->
		<div class="flex items-center space-x-4">
			<a href="/" class="text-nav-interactive text-xl font-bold">{title}</a>
			<nav>
				<a
					href="/logs"
					on:click={navLinkForceReload}
					class="text-nav-interactive hover:text-nav-interactive-hover active:text-nav-interactive-active ml-3"
				>
					Logs
				</a>
			</nav>
		</div>

		<!-- Right: Search Bar -->
		<div class="flex items-center space-x-3">
			<ThemeToggle />

			<div class="flex items-center bg-search text-normal rounded">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search..."
					class="bg-search text-normal px-2 py-2 focus:outline-none"
				/>
				<button class="px-3 py-2">
					<!-- Search Icon (using SVG) -->
					<svg
						class="h-5 w-5"
						aria-label="Search"
						aria-hidden="false"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							fill-rule="evenodd"
							d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
							clip-rule="evenodd"
							class=""
						></path></svg
					>
				</button>
			</div>
		</div>
	</div>
</header>
