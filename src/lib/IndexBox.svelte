<script lang="ts">
	export let title: string;
</script>

<div class="bg-[#0f100f] border-white border rounded-sm mt-8 relative w-[420px]">
	<h3 class="font-bold p-4 bg-[#0f100f] z-5 absolute -top-5 left-5" style="user-select: none">
		{title}
	</h3>

	<ul class="flex flex-col gap-0 p-3 mt-6">
		<slot>
			<li>
				<a href="/">nothing to display</a>
			</li>
		</slot>
	</ul>
</div>
