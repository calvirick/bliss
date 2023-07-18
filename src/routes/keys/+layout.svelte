<script lang="ts">
	import IndexBox from '$lib/components/IndexBox.svelte';
	import Content from '$lib/components/Content.svelte';
</script>

<section class="flex flex-row gap-2">
	<IndexBox title="List of Keys to Collect">
		<a href={`/keys/pause`} class="text-orange-400">Pause Key</a>
		<a href="/keys/notfound" class="text-bold text-green-400">????????</a>
		<a href="/keys/notfound" class="text-sky-600">????????</a>
		<a href="/keys/notfound" class="text-purple-400">????????</a>
		<a href="/keys/notfound" class="text-slate-600">????????</a>
		<a href="/keys/notfound" class="text-slate-800">????????</a>
	</IndexBox>

	<Content title="Details">
		<div class="mt-6">
			<slot />
		</div>
	</Content>
</section>

<style lang="postcss">
	a:hover {
		@apply bg-amber-400 font-bold;
		color: black;
	}
</style>
