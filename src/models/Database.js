import './Database.scss';

export const Simplex = {
	slug: 'simplex_studio',
	title: 'Simplex Studio',
	subtitle: 'Branding',
	coverTitle: 'Logo',
	coverMedia: process.env.PUBLIC_URL + '/assets/img/psim01.png',

	mediaCount: 14,

	item: [
		{
			title: 'Logo Explorations',
			titlePos: '3',
			position: '1-2',
			subtitle: 'Few of the explored variations',
			media: process.env.PUBLIC_URL + '/assets/img/psim02.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim02.png',
		},
		{
			position: '3',
			subtitle: 'Logo construction & lockup',
			media: process.env.PUBLIC_URL + '/assets/img/psim03.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim03.png',
			nogap: true,
		},
		{
			title: 'Color',
			titlePos: '1',
			position: '2-3',
			content:
				<div className='palette'>
					<div className="palette--item" style={{ backgroundColor: '#FD3B52' }}><span className='palette--color-code text--light'>#FD3B52</span></div>
					<div className="palette--item" style={{ backgroundColor: '#4B47FF' }}><span className='palette--color-code text--light'>#4B47FF</span></div>
					<div className="palette--item" style={{ backgroundColor: '#FF630C' }}><span className='palette--color-code text--light'>#FF630C</span></div>
					<div className="palette--item" style={{ backgroundColor: '#850CFF' }}><span className='palette--color-code text--light'>#850CFF</span></div>
					<div className="palette--item" style={{ backgroundColor: '#FFF1F2' }}><span className='palette--color-code text--dark'>#FFF1F2</span></div>
					<div className="palette--item" style={{ backgroundColor: '#1A1B20' }}><span className='palette--color-code text--light'>#1A1B20</span></div>
					<div className="palette--item" style={{ backgroundColor: '#FC3AAE' }}><span className='palette--color-code text--light'>#FC3AAE</span></div>
					<div className="palette--item" style={{ backgroundColor: '#4AF8C3' }}><span className='palette--color-code text--dark'>#4AF8C3</span></div>
					<div className="palette--item gradient" style={{ backgroundImage: `linear-gradient(to right, #FD3B52 , #FC3AAE)` }}>
						<span className='palette--color-code text--light'>#FD3B52</span>
						<span className='palette--color-code__right text--light'>#FC3AAE</span>
					</div>
				</div>
		},
		// {
		// 	title: 'Typography',
		// 	titlePos: '1',
		// 	position: '2-3',
		// 	content:
		// 		<div>

		// 		</div>
		// },
		{
			title: 'Collateral Design',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/psim04.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim04.png',
			seemore: true,

		},
		{
			title: 'Web Design',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/psim05.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim05.png',
			seemore: '/webdesign/2',
			nogap: true
		},
		{
			title: '3D Illustration',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/psim06.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim06.png',
			seemore: true
		},
		{
			title: '3D Icon Design',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/psim07.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim07.png',
		},
		{
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/psim08.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim08.png',
		},
	]
}

export const Modeling = {
	slug: 'modeling',
	title: '3D Modeling',
	subtitle: 'Visualization',

	item: [
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_1m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_1.png',
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_2.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_2.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_3m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_3.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_4m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_4.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_5m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_5.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1',
			media: process.env.PUBLIC_URL + '/assets/img/3d_6m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_6.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_7m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_7.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1',
			media: process.env.PUBLIC_URL + '/assets/img/3d_8m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_8.png',
			subtitle: ' ',
		},
		{
			position: '2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_9m.png',

			thumb: process.env.PUBLIC_URL + '/assets/img/3d_9.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_10m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_10.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_11m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_11.png',
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_12m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_12.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_13m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_13.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_14m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_14.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_15m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_15.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_16m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_16.png',
			subtitle: ' ',
		},
		{
			position: '1',
			media: process.env.PUBLIC_URL + '/assets/img/3d_17m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_17.png',
			subtitle: ' ',
		},
		{
			position: '2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_18m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_18.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_19m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_19.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_20m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_20.png',
			nogap: true,
			subtitle: ' ',
		},
		{
			position: '1-2',
			media: process.env.PUBLIC_URL + '/assets/img/3d_21m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_21.png',
			subtitle: ' ',
		},
		{
			position: '3',
			media: process.env.PUBLIC_URL + '/assets/img/3d_22m.png',
			thumb: process.env.PUBLIC_URL + '/assets/img/3d_22.png',
			nogap: true,
			subtitle: ' ',
		},

	]
}

export const Anime_3d = {
	slug: '3danimation',
	title: '3D Animation',
	subtitle: 'Motion Design',

	item: [
		{
			title: 'Eazy Card Explainer',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/vid/ez-card.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/eazy_thumb.png',
			nogap: true,
			isVideo: true,
		},
		{
			position: '2-3',
			subtitle: 'Shikha Academy - Promotional',
			media: process.env.PUBLIC_URL + '/assets/vid/shikha.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/shikha_thumb.png',
			isVideo: true,
		},
		{
			position: '2-3',
			subtitle: 'Admission Agent - BlockChain',
			media: process.env.PUBLIC_URL + '/assets/vid/s2j.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/s2j_thumb.png',
			isVideo: true,
		},
		{
			position: '2-3',
			subtitle: 'UIU Mun Club Intro',
			media: process.env.PUBLIC_URL + '/assets/vid/mun.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/mun_thumb.png',
			isVideo: true,
		},
		{
			position: '2-3',
			subtitle: 'Eid Mobarak - Social Post',
			media: process.env.PUBLIC_URL + '/assets/vid/eid.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/eid_thumb.png',
			isVideo: true,
		},
	]
}

export const Anime_2d = {
	slug: '2danimation',
	title: '2D Animation',
	subtitle: 'Motion Design',

	item: [
		{
			title: 'Sunayra Logo Reveal',
			titlePos: '1',
			position: '2-3',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun09.png',
			nogap: true,
			media: process.env.PUBLIC_URL + '/assets/vid/sunayra_animated.mp4',
			isVideo: true,
		},
		{
			position: '1-2',
			subtitle: 'Simple Run Cycle',
			thumb: process.env.PUBLIC_URL + '/assets/img/run_thumb.png',
			media: process.env.PUBLIC_URL + '/assets/vid/run.mp4',
			isVideo: true,
		},
		{
			position: '2',
			subtitle: 'Stick Fight - Animation Fundamentals',
			thumb: process.env.PUBLIC_URL + '/assets/img/stick_thumb.png',
			media: process.env.PUBLIC_URL + '/assets/vid/fight.mp4',
			isVideo: true,
		},
	]
}

export const Anime_ui = {
	slug: 'uianimation',
	title: 'UI Animation',
	subtitle: 'Motion Design',

	item: [
		{
			title: 'Animated Websites',
			titlePos: '1',
			position: '2-3',
			media: process.env.PUBLIC_URL + '/assets/vid/architecture.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/architecture.png',
			nogap: true,
			isVideo: true,
			seemore: '/webdesign/0',
		},
		{
			position: '3',
			isVideo: true,
			subtitle: 'UI Explainer for Ecommerce App - Retailer',
			thumb: process.env.PUBLIC_URL + '/assets/img/retailer_thumb.png',
			media: process.env.PUBLIC_URL + '/assets/vid/retailer.mp4',
		},
		{
			position: '2',
			isVideo: true,
			subtitle: 'UI Explainer for Ecommerce App - Wholeseller',
			media: process.env.PUBLIC_URL + '/assets/vid/sellerapp.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/seller_thumb.png',
			nogap: true,
		},
		{
			position: '1-2',
			isVideo: true,
			subtitle: '2d Animated Icon design in After Effect',
			media: process.env.PUBLIC_URL + '/assets/vid/graphic.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/blockchain_graphic_thumb.png',
		},
		{
			position: '2-3',
			isVideo: true,
			subtitle: '2d Animated Icon design in After Effect',
			media: process.env.PUBLIC_URL + '/assets/vid/icons_2d.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/ico_2d.png',
		},
		{
			position: '1-2',
			isVideo: true,
			subtitle: '3d Animated Icon design in Blender',
			media: process.env.PUBLIC_URL + '/assets/vid/icons.mp4',
			thumb: process.env.PUBLIC_URL + '/assets/img/psim08.png',
		},

	]
}

export const Empty = {
	title: 'Portfolio',
	subtitle: 'My',

	item: []
}

export const Sunayra = {
	slug: 'sunayra',
	title: 'Sunayra',
	subtitle: 'Branding',
	coverTitle: 'Logo',
	coverMedia: process.env.PUBLIC_URL + '/assets/img/psun01.png',
	mediaCount: 14,

	item: [
		{
			title: 'Logo Explorations',
			titlePos: '3',
			position: '1-2',
			subtitle: 'Hand drawn calligraphy sketches',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun02.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun02.png',
		},
		{
			position: '2-3',
			subtitle: 'Hand drawn floral Frame exploration',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun03.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun03.png',
		},
		{
			title: 'Color',
			titlePos: '1',
			position: '2-3',
			content:
				<div className='palette'>
					<div className="palette--item" style={{ backgroundColor: '#E2CAB2' }}><span className='palette--color-code text--dark'>#E2CAB2</span></div>
					<div className="palette--item" style={{ backgroundColor: '#39342B' }}><span className='palette--color-code text--light'>#39342B</span></div>
					<div className="palette--item" style={{ backgroundColor: '#E13053' }}><span className='palette--color-code text--light'>#E13053</span></div>
					<div className="palette--item" style={{ backgroundColor: '#4E2536' }}><span className='palette--color-code text--light'>#4E2536</span></div>
					<div className="palette--item" style={{ backgroundColor: '#FBEBDB' }}><span className='palette--color-code text--dark'>#FBEBDB</span></div>
					<div className="palette--item" style={{ backgroundColor: '#696969' }}><span className='palette--color-code text--light'>#696969</span></div>
					<div className="palette--item" style={{ backgroundColor: '#416073' }}><span className='palette--color-code text--light'>#416073</span></div>
					<div className="palette--item" style={{ backgroundColor: '#0D1E35' }}><span className='palette--color-code text--light'>#0D1E35</span></div>
				</div>
		},
		// {
		// 	title: 'Typography',
		// 	titlePos: '1',
		// 	position: '2-3',
		// 	content:
		// 		<div>

		// 		</div>
		// },
		{
			title: 'Collateral & Packaging',
			titlePos: '1',
			position: '2-3',
			subtitle: 'Box, letter, tags',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun14.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun14.png',
		},
		{
			position: '2-3',
			subtitle: 'Shopping Bag',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun15.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun15.png',
		},
		{
			position: '2-3',
			subtitle: 'Instagram & Business card',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun16.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun16.png',
		},
		{
			title: 'Web Design',
			titlePos: '1',
			position: '2-3',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun04.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun04.png',
			seemore: '/webdesign/1',
		},
		{
			title: 'Social Media & Content Design',
			titlePos: '1',
			position: '2-3',
			subtitle: 'Cover Image',
			thumb: process.env.PUBLIC_URL + '/assets/img/psun05.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun05.png',
		},
		{
			position: '1',
			subtitle: 'Eid Post',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun06.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun06.png',
			nogap: true
		},
		{
			position: '2',
			subtitle: 'Ramadan Post',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun07.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun07.png',
			nogap: true
		},
		{
			position: '3',
			subtitle: 'New Clothing - Animated Post',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun08.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun08.png',
			nogap: true
		},
		{
			position: '1-2',
			subtitle: 'Brand Intro - Animated Short',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun09.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun09.png',
			nogap: true
		},
		{
			position: '3',
			subtitle: 'Event Leaflet',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun10.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun10.png',
			nogap: true
		},
		{
			position: '1-2',
			subtitle: 'Thank you Card',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun11.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun11.png',
			nogap: true
		},
		{
			position: '3',
			subtitle: 'Tag',

			thumb: process.env.PUBLIC_URL + '/assets/img/psun12.png',

			media: process.env.PUBLIC_URL + '/assets/img/psun12.png',
			nogap: true
		}
	]
}

export const Picarry = {
	title: 'PiCarry - Ecommerce App',
	subtitle: 'UI/UX Development for ',
	video: process.env.PUBLIC_URL + '/assets/vid/picarry.mp4',
	cover: process.env.PUBLIC_URL + '/assets/img/picarry_cover.png',
	vidRetail: process.env.PUBLIC_URL + '/assets/vid/Retail.mp4',
	vidSeller: process.env.PUBLIC_URL + '/assets/vid/Seller.mp4',

	features: [
		{
			subtitle: 'Admin',
			title: 'Dashboard',
			pos: -1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_1.png',
		},
		{
			title: 'Table',
			pos: -1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_2.png',
		},
		{
			title: 'Toolbar',
			pos: -1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_3.png',
		},
		{
			title: 'Uploader',
			pos: -1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_4.png',
		},
		{
			title: 'Item Listing',
			pos: -1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_5.png',
		},
		{
			title: 'Page Mechanics',
			pos: 1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_6.png',
		},
		{
			title: 'Networking',
			pos: 1,
			img: process.env.PUBLIC_URL + '/assets/img/pi_7.png',
		},

	]
}

export const Curate = {
	video: process.env.PUBLIC_URL + '/assets/vid/Curate.mp4',
	massionary: process.env.PUBLIC_URL + '/assets/img/massionary.png',
	nav: process.env.PUBLIC_URL + '/assets/vid/board.mp4',
	add_board: process.env.PUBLIC_URL + '/assets/img/add_board.png',
	edit_board: process.env.PUBLIC_URL + '/assets/img/edit_board.png',
	pin_viewer: process.env.PUBLIC_URL + '/assets/img/pin_viewer.png',
	video_viewer: process.env.PUBLIC_URL + '/assets/img/video_viewer.png',
	bg: process.env.PUBLIC_URL + '/assets/img/bg.png',
	vid_cp: process.env.PUBLIC_URL + '/assets/vid/color-picker.mp4',
	vid_draw: process.env.PUBLIC_URL + '/assets/vid/canvas.mp4',
	vid_zoom: process.env.PUBLIC_URL + '/assets/vid/zoom.mp4',
	vid_ss: process.env.PUBLIC_URL + '/assets/vid/screenshot.mp4',
	vid_recorder: process.env.PUBLIC_URL + '/assets/vid/recorder.mp4',
}