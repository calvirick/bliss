<script>
	import WindowBar from '$lib/WindowBar.svelte';
	import OptionsBar from '$lib/OptionsBar.svelte';
	import '../app.css';
	import Tabs from '$lib/Tabs.svelte';
</script>

<WindowBar />
<OptionsBar />
<main class="px-[58px]">
	<Tabs />
	<slot />
</main>
