<script lang="ts">
	import IndexBox from '$lib/components/IndexBox.svelte';
	import Content from '$lib/components/Content.svelte';
	import { page } from '$app/stores';

	interface IChapterData {
		id: number;
		title: string;
	}

	const chapterData: IChapterData[] = [
		{ id: 1, title: 'Tutorial Meadow' },
		{ id: 2, title: 'Entering the Goblin Camp' },
		{ id: 3, title: 'The Mansion Pt1' },
		{ id: 4, title: 'The Mansion Pt2' }
	];

	console.log($page.url.pathname + '/1');
</script>

<section class="flex flex-row gap-2">
	<IndexBox title="Chapters">
		{#each chapterData as chapter}
			<a
				href="/thestory/{chapter.id}"
				class={$page.url.pathname.includes(chapter.id.toString())
					? `bg-[#C8B400] font-bold text-black`
					: `chapter-link w-full hover:bg-[#908204] hover:font-bold`}
				>{chapter.id}: {chapter.title}</a
			>
		{/each}
	</IndexBox>

	<Content title="Synopsis & Details">
		<div class="mt-6">
			<slot />
		</div>
	</Content>
</section>

<style lang="postcss">
	.chapter-link:hover {
		color: black;
	}
</style>
