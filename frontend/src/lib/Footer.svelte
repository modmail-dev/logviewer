<script lang="ts">
	export let companyName: string;

	const year: number = new Date().getFullYear();
	const links: { name: string; href: string }[] = [
		{ name: 'Donate', href: 'https://patreon.com/kyber' },
		{ name: 'Discord', href: 'https://discord.gg/cnUpwrnpYb' },
		{ name: 'Privacy Policy', href: '#' }
	];
</script>

<footer class="bg-secondary text-nav py-6 mt-auto">
	<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
		<!-- Left: Copyright Notice -->
		<div class="text-center md:text-left mb-4 md:mb-0">
			<p class="text-sm">&copy; {year} {companyName}. All rights reserved.</p>
		</div>

		<!-- Right: Links -->
		<div class="flex space-x-4">
			{#each links as link}
				<a
					href={link.href}
					class="text-nav-interactive hover:text-nav-interactive-hover active:text-nav-interactive-active"
				>
					{link.name}
				</a>
			{/each}
		</div>
	</div>
</footer>
