<!-- Hero Section -->
<main class="flex-grow flex flex-col justify-center items-center py-12">
	<div class="text-center max-w-xl px-4">
		<h1 class="text-4xl md:text-5xl font-bold mb-4 text-header-primary">Welcome to Logviewer</h1>
		<p class="text-lg md:text-xl mb-6 text-header-secondary">
			Easily browse and search through all your Modmail logs in one place. Whether you're looking
			for specific conversations or just exploring, we've got you covered.
		</p>
		<!-- Search Bar -->
		<div class="flex items-center justify-center bg-search text-normal mb-6 rounded shadow-md">
			<input
				type="text"
				placeholder="Search Modmail logs..."
				class="w-full max-w-md bg-search text-normal px-4 py-3 focus:outline-none"
			/>
			<button class="pl-4 pr-2 py-3">
				<!-- Search Icon -->
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
		<div class="flex justify-center space-x-4">
			<a
				href="/logs"
				class="bg-button hover:bg-button-hover active:bg-button-active text-button px-4 py-2 rounded-md shadow-md"
				>Browse All Logs</a
			>
			<!-- TODO: Implement latest log -->
			<a
				href="/logs/view"
				class="bg-button hover:bg-button-hover active:bg-button-active text-button px-4 py-2 rounded-md shadow-md"
				>Most Recent</a
			>
		</div>
	</div>
</main>
