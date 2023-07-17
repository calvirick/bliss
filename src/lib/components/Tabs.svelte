<script lang="ts">
	import TabLink from './TabLink.svelte';

	// TODO: ONE DAY: enable using the keyboard to quick navigate interface.
	// TODO: complete sub-route pages for each of the anchor tags when navigated to.
</script>

<nav class="relative mt-8 rounded-sm border border-white">
	<h3 class="z-5 bg-terminal absolute -top-5 left-5 p-4 font-bold" style="user-select: none">
		Tabs
	</h3>
	<ul class="flex flex-row items-center justify-center gap-8 p-3">
		<TabLink>Home</TabLink>
		<li>|</li>
		<TabLink url="/thestory">The Story So Far!</TabLink>
		<li>|</li>
		<TabLink url="/keys" color="bg-amber-500">Keys</TabLink>
		<li>|</li>
		<TabLink url="/maps" color="bg-green-600">Maps</TabLink>
		<li>|</li>
		<TabLink url="/stats" color="bg-sky-500">Stats</TabLink>
		<li>|</li>
		<TabLink url="/achievements" color="bg-pink-500">Achievements</TabLink>

		<li>|</li>
		<TabLink url="/gold" color="bg-amber-400">Gold Count</TabLink>
		<li>|</li>
		<TabLink url="/cli" color="bg-slate-400">Comand Line</TabLink>
		<li>|</li>
		<TabLink url="/mysteries" color="bg-fuchsia-600">Mysteries</TabLink>
	</ul>
</nav>
