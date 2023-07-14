<script lang="ts">
	export let title: string;
</script>

<div class=" relative mt-8 w-[420px] rounded-sm border border-white">
	<h3 class="z-5 bg-terminal absolute -top-5 left-5 p-4 font-bold" style="user-select: none">
		{title}
	</h3>

	<ul class="mt-6 flex flex-col gap-0 p-3">
		<slot>
			<li>
				<a href="/">nothing to display</a>
			</li>
		</slot>
	</ul>
</div>
