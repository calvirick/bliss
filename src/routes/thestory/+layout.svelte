<script lang="ts">
	import IndexBox from '$lib/components/IndexBox.svelte';
	import Content from '$lib/components/Content.svelte';

	interface IChapterData {
		chapter: number;
		title: string;
	}

	const chapterData: IChapterData[] = [
		{ chapter: 1, title: 'Tutorial Meadow' },
		{ chapter: 2, title: 'Entering the Goblin Camp' },
		{ chapter: 3, title: 'The Mansion Pt1' },
		{ chapter: 4, title: 'The Mansion Pt2' }
	];
</script>

<section class="flex flex-row gap-2">
	<IndexBox title="Chapters">
		{#each chapterData as chapter}
			<a href="/thestory/{chapter.chapter}">{chapter.chapter}: {chapter.title}</a>
		{/each}
	</IndexBox>

	<Content title="Synopsis & Details">
		<div class="mt-6">
			<slot />
		</div>
	</Content>
</section>

<style lang="postcss">
	a {
		@apply w-full hover:bg-[#C8B400] hover:font-bold hover:text-black;
	}
</style>
