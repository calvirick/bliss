<script lang="ts">
	import TabLink from '$lib/components/Tabs/TabLink.svelte';

	const tabData = [
		{ id: 1, url: '/', color: 'bg-white', label: 'Home' },
		{ id: 2, url: '/thestory', color: 'bg-white', label: 'The Story So far!' },
		{ id: 3, url: '/keys', color: 'bg-amber-500', label: 'Keys' },
		{ id: 4, url: '/maps', color: 'bg-green-600', label: 'Maps' },
		{ id: 5, url: '/stats', color: 'bg-sky-500', label: 'Stats' },
		{ id: 6, url: '/achievements', color: 'bg-pink-500', label: 'Achievements' },
		{ id: 7, url: '/gold', color: 'bg-amber-400', label: 'Gold Count' },
		{ id: 8, url: '/cli', color: 'bg-slate-400', label: 'Command Line' },
		{ id: 9, url: '/mysteries', color: 'bg-fuchsia-600', label: 'Mysteries' }
	];

	// TODO: ONE DAY: enable using the keyboard to quick navigate interface.
	// TODO: complete sub-route pages for each of the anchor tags when navigated to.
</script>

<nav class="relative mt-8 rounded-sm border border-white">
	<h3 class="z-5 bg-terminal absolute -top-5 left-5 p-4 font-bold" style="user-select: none">
		Tabs
	</h3>
	<ul class="flex flex-row items-center justify-center p-3">
		<li>|</li>
		{#each tabData as tab}
			<TabLink url={tab.url} color={tab.color}>{tab.label}</TabLink>
			<li>|</li>
		{/each}
	</ul>
</nav>
