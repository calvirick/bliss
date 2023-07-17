<script lang="ts">
	import { page } from '$app/stores';

	export let url: string = '/';
	export let color: string = 'bg-white';
</script>

<li>
	<a
		href={url}
		class={$page.url.pathname === url
			? `${color} font-bold text-black`
			: ` focus:${color} active:${color} hover:font-bold hover:text-black hover:${color}`}
	>
		<slot />
	</a>
</li>

<style lang="postcss">
	.tab-link {
	}
</style>
