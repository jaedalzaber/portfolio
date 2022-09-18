import styles from './WebUI.module.scss';
import React, { useRef, useEffect } from 'react';

import Slider from  '../../../comps/slider/Slider';
import Paginator from  '../../../comps/paginator/Paginator';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import gsap, { Power3 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slides = [
	{
		title: 'Architecture',
		subtitle: 'Website',
		image: process.env.PUBLIC_URL + '/assets/img/site_arch_thumb.png',
		video: process.env.PUBLIC_URL + '/assets/vid/architecture.mp4'
	},
	{
		title: 'Sunayra - Fashion',
		subtitle: 'Website',
		image: process.env.PUBLIC_URL + '/assets/img/site_sunayra_thumb.png',
		video: process.env.PUBLIC_URL + '/assets/vid/sunayra.mp4'
	},
	{
		title: 'Simplex Studio',
		subtitle: 'Website',
		image: process.env.PUBLIC_URL + '/assets/img/site_simplex_thumb.png',
		video: process.env.PUBLIC_URL + '/assets/vid/simplex.mp4'
	},
	{
		title: 'Qubit',
		subtitle: 'Website',
		image: process.env.PUBLIC_URL + '/assets/img/qubit_thumb.png',
		video: process.env.PUBLIC_URL + '/assets/vid/qubit.mp4'
	},
];

const WebUI = React.forwardRef((props, ref) =>  {
	let sliderRef = useRef();
	let panel = useRef();

	return (
		<div className={styles['grid']} data-scroll-section ref={panel}>
			<div className={`${styles['grid--item']} ${styles['grid--item-1']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-2']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-3']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-4']}`} ></div>

			<div className={`${styles['grid--item']} ${styles['grid--item-5']}`} >
				<div className={styles.title}>
					<span className={styles.title__light}>UI/UX design</span><br />
					<span className={styles.title__bold}>Websites</span>
				</div>
			</div>
			<div className={`${styles['grid--item']} ${styles['grid--item-6']}`} >
				<Slider ref={sliderRef} slides={slides} />
			</div>
			<div className={`${styles['grid--item']} ${styles['grid--item-7']}`} >
				<Paginator count={slides.length} index={0} slider={sliderRef} arrow={true}/>
			</div>
		</div>
	);
})

export default WebUI;