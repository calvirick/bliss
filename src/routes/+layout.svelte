<script>
	import WindowBar from '$lib/components/WindowBar.svelte';
	import OptionsBar from '$lib/components/OptionsBar.svelte';
	import '../app.css';
	import Tabs from '$lib/components/Tabs.svelte';
</script>

<WindowBar />
<OptionsBar />
<main class="relative top-14 px-[58px]">
	<Tabs />
	<slot />
</main>
