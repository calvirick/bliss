<script lang="ts">
	import { page } from '$app/stores';

	export let url: string;
	export let color: string;
</script>

<li>
	<a
		href={url}
		id="tag-link"
		class={$page.url.pathname === url
			? `${color} px-8 font-bold text-black`
			: `bg-neutral-800 px-8 hover:underline`}
	>
		<slot />
	</a>
</li>
