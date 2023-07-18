<script lang="ts">
	import { page } from '$app/stores';
	import { capitalizeFirstLetter } from '$lib/index';
	const keyId = $page.params.key;
</script>

<h3 class="font-bold text-red-500">{capitalizeFirstLetter(keyId)} Key</h3>
<p class="mt-6">Stuff about the key that's very important!</p>
