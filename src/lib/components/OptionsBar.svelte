<div class="fixed top-10 z-20 flex w-full gap-10 bg-[#808081] px-10">
	<div class="dropdown px-3 hover:bg-slate-500">
		<button>File</button>
		<div class="dropdown-content left-0">
			<a href="/">Settings</a>
			<a href="/"><s>Quit Game</s></a>
		</div>
	</div>

	<div class="dropdown px-3 hover:bg-slate-500">
		<button>Help</button>
		<div class="dropdown-content left-0">
			<a href="/" class="">Manuel</a>
			<a href="/">Hints</a>
			<a href="/">Documentation</a>
		</div>
	</div>
	<div class="dropdown px-3 hover:bg-slate-500">
		<button>DM Tools</button>
		<div class="dropdown-content left-0 w-64">
			<a href="https://dm.tools/tracker" target="_blank">Initiative Tracker</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.dropdown {
		@apply relative inline-block;
	}

	.dropdown-content {
		@apply absolute right-0 z-10 hidden min-w-[160px] bg-[#f9f9f9];
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		@apply block bg-[#808081] px-2 py-1 text-white;
	}

	.dropdown-content a:hover {
		background-color: #5b5b5b;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
