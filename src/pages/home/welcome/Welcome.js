import styles from './Welcome.module.scss'
import React, { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

let jaed = process.env.PUBLIC_URL +  '/assets/img/hero.png'


const Welcome = React.forwardRef((props, ref) =>  {

	return ( 
		<div className={`${styles.grid} ${styles.welcome}`} data-scroll-section>
					<div className={`${styles['grid--item']} ${styles['welcome--item-1']}`}>
						<span className={`${styles['title-bold']} ${styles['mg-l-50']}`}>Welcome <br />to my</span>
						<span className={`${styles['title-thin']} ${styles['mg-l-50']}`}>PORTFOLIO</span>
					</div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-2']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-3']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-4']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-5']}`}>
						<span className={`${styles['text-welcome']}`}>Can’t wait to show you <br />my <span className={`${styles['text-welcome__bold']}`}>journey</span> of last <br />5 years (^_^)</span>
					</div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-6']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-7']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-8']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-9']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-10']}`}>
						<span className={`${styles['text-go']} ${styles['mg-l-50']}`}>LETS GO!</span>
					</div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-11']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-12']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-13']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-14']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-15']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-16']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-17']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-18']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-19']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-20']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-21']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-22']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-23']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-24']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-25']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-26']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-27']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-28']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-29']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-30']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-31']}`}></div>
					<div className={`${styles['grid--item']} ${styles['welcome--item-19_1']}`}>
						<img className={`${styles['hero-jaed']}`} src={jaed} alt="" />
					</div>
				</div>
	 );
})

export default Welcome;