<script lang="ts">
	export let title: string = 'Details';
</script>

<div class="bg-[#0f100f] border-white border rounded-sm mt-8 relative max-w-[1477px] p-7">
	<h3 class="font-bold p-4 bg-[#0f100f] z-5 absolute -top-5 left-5" style="user-select: none">
		{title}
	</h3>

	<slot>
		<h4 id="content-header" class="my-6 font-extrabold text-red-500">Default Paragraph Content</h4>
		<p id="content-body">
			I'm baby gentrify humblebrag intelligentsia chartreuse VHS fixie everyday carry typewriter
			craft beer banjo microdosing. Gentrify green juice chicharrones actually shaman williamsburg
			occupy dreamcatcher. Knausgaard semiotics helvetica post-ironic art party chillwave venmo
			lumbersexual fixie big mood vexillologist. Cardigan master cleanse single-origin coffee iPhone
			meh. Flannel kogi praxis lumbersexual letterpress. Fam marfa letterpress keytar. Unicorn bruh
			chia craft beer freegan mumblecore. Tonx brunch tumeric, thundercats forage drinking vinegar
			tilde. Poutine put a bird on it literally pour-over iceland ugh normcore fashion axe fit.
			Brooklyn tacos before they sold out kombucha mustache literally, lyft waistcoat marfa
			sustainable vice coloring book. Bodega boys subway tile ethical yuccie mustache tousled, jawn
			tonx mukbang selfies semiotics hoodie. Offal raclette authentic big mood man bun hell of green
			juice mukbang. Swag bicycle rights shoreditch, sriracha pop-up typewriter single-origin coffee
			yr sartorial adaptogen flannel vinyl. Readymade tousled affogato vaporware photo booth direct
			trade edison bulb unicorn swag shaman ascot wolf hoodie fam. Raclette iceland poke marfa.
			Godard whatever selfies lo-fi pitchfork sus paleo gorpcore messenger bag etsy viral ennui. Pug
			taxidermy woke heirloom mumblecore, green juice aesthetic locavore man braid lyft VHS put a
			bird on it. Cornhole hexagon polaroid helvetica drinking vinegar
		</p>
	</slot>
</div>
