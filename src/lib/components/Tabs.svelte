<script lang="ts">
	// TODO: Active state when clicked on this url path.
	// TODO: enable using the keyboard to quick navigate interface.
	// TODO: complete the route pages for each of the anchor tags.

	import { page } from '$app/stores';
</script>

<nav class="relative mt-8 rounded-sm border border-white">
	<h3 class="z-5 bg-terminal absolute -top-5 left-5 p-4 font-bold" style="user-select: none">
		Tabs
	</h3>
	<ul class="flex flex-row items-center justify-center gap-8 p-3">
		<li>
			<a href="/" class="tab-link">Home</a>
		</li>
		<li>|</li>
		<li>
			<a href="/thestory" class="tab-link" class:active={$page.url.pathname == '/thestory'}
				>The Story So Far!</a
			>
		</li>
		<li>|</li>
		<li><a href="/keys" class="hover:bg-amber-500 hover:font-bold hover:text-black">Keys</a></li>
		<li>|</li>
		<li><a href="/maps" class="hover:bg-green-600 hover:font-bold hover:text-black">Maps</a></li>
		<li>|</li>
		<li><a href="/stats" class="hover:bg-sky-500 hover:font-bold hover:text-black">Stats</a></li>
		<li>|</li>
		<li>
			<a href="/achievements" class="hover:bg-pink-500 hover:font-bold hover:text-black"
				>Achievements</a
			>
		</li>
		<li>|</li>
		<li>
			<a href="/gold" class="hover:bg-amber-400 hover:font-bold hover:text-black">Gold Count</a>
		</li>
		<li>|</li>
		<li>
			<a href="/cli" class="hover:bg-slate-400 hover:font-bold hover:text-black">Command Line</a>
		</li>
		<li>|</li>
		<li>
			<a href="/mysteries" class="hover:bg-fuchsia-600 hover:font-bold hover:text-black"
				>Mysteries</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	.tab-link {
		@apply hover:bg-white hover:font-bold hover:text-black focus:bg-white focus:text-black;
	}
	.tab-link:active {
		@apply active:bg-white active:font-bold active:text-black;
	}
</style>
