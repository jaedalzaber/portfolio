import styles from './WebUX.module.scss'
import SeeMoreBtn from '../../../comps/buttons/seemore/SeeMoreBtn';

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap, { Power3 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let iPicarry = process.env.PUBLIC_URL +  '/assets/img/app_picarry_thumb.png';
let iCurate  = process.env.PUBLIC_URL + '/assets/img/app_curate_thumb.png';

const WebUX = React.forwardRef((props, ref) => {
	let panel = useRef();

	return (
		<div className={styles['grid']} data-scroll-section ref={panel}>
			<div className={`${styles['grid--item']} ${styles['grid--item-1']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-2']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-3']}`} ></div>

			<div className={`${styles['grid--item']} ${styles['grid--item-5']}`} >
				<div className={styles.title}>
					<span className={styles.title__light}>UI/UX design</span><br />
					<span className={styles.title__bold}>Applications</span>
				</div>
			</div>
			<Link to={`/appdesign/curate`} style={{ textDecoration: 'none' }} className={`${styles['grid--item']} ${styles['grid--item-6']} ${styles['app']}`} >
				<img className={styles['app--image']} src={iCurate} alt=''></img>
				<p className={styles['app--title']}>Curate</p>
				<p className={styles['app--thintitle']}>MoodBoard App</p>
				<SeeMoreBtn />
			</Link>
			<Link to={`/appdesign/picarry`} style={{ textDecoration: 'none' }} className={`${styles['grid--item']} ${styles['grid--item-7']} ${styles['app']} `} >
				<img className={styles['app--image']} src={iPicarry} alt=''></img>
				<p className={styles['app--title']}>piCarry</p>
				<p className={styles['app--thintitle']}>Wholesale Ecommerce Platform</p>
				<SeeMoreBtn />
			</Link>
			
		</div>

	);
})

export default WebUX;