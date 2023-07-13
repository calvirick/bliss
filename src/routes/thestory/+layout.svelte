<script>
	import IndexBox from '$lib/IndexBox.svelte';
	import ContentBox from '$lib/ContentBox.svelte';
</script>

<section class="flex flex-row gap-2">
	<IndexBox title="Chapters">
		<a href="/">01: Tutorial Meadow</a>
		<a href="/">02: Entering the Goblin Camp</a>
		<a href="/">03: The Mansion Pt1</a>
		<a href="/">04: The Mansion Pt2</a>
	</IndexBox>

	<ContentBox title="Chapter Details" />
</section>
<slot />

<style lang="postcss">
	a {
		@apply hover:text-black hover:bg-[#C8B400] hover:font-bold w-full;
	}
</style>
