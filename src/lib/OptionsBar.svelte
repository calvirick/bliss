<div class="bg-[#808081] px-10 gap-10 flex">
	<div class="dropdown hover:bg-slate-500 px-3">
		<button>File</button>
		<div class="dropdown-content left-0">
			<a href="#">Settings</a>
			<a href="#"><s>Quit Game</s></a>
		</div>
	</div>

	<div class="dropdown hover:bg-slate-500 px-3">
		<button>Help</button>
		<div class="dropdown-content left-0">
			<a href="#" class="">Manuel</a>
			<a href="#">Hints</a>
			<a href="#">Documentation</a>
		</div>
	</div>
	<div class="dropdown hover:bg-slate-500 px-3">
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
		@apply hidden absolute right-0 bg-[#f9f9f9] min-w-[160px] z-10;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		@apply px-2 py-1 bg-[#808081] text-white block;
	}

	.dropdown-content a:hover {
		background-color: #5b5b5b;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
