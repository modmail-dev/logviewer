<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';

	export let title: string = 'Logviewer';
	export let companyName: string = 'Modmail';
</script>

<div class="flex flex-col min-h-screen bg-primary">
	<Header {title} />

	<slot />

	<Footer {companyName} />
</div>
