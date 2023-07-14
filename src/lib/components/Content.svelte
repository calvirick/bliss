<script lang="ts">
	export let title: string = 'default';
</script>

<div class="relative mt-8 w-full rounded-sm border border-white p-7">
	<h3
		id="containter-label"
		class="z-5 absolute -top-3 left-5 bg-white p-1 px-2 font-bold text-black"
		style="user-select: none"
	>
		{title}
	</h3>

	<slot />
</div>
