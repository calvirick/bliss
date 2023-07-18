<script lang="ts">
	import { page } from '$app/stores';

	export let url: string;
	export let color: string;
</script>

<li>
	<a
		href={url}
		id="tag-link"
		class={$page.url.pathname === url ? `${color} font-bold text-black` : `link hover:underline`}
	>
		<slot />
	</a>
</li>
