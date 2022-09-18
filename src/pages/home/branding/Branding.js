import styles from './Branding.module.scss'
import SeeMoreBtn from '../../../comps/buttons/seemore/SeeMoreBtn';

import React from 'react';
import { Link } from 'react-router-dom';

let ib_1 = process.env.PUBLIC_URL +  '/assets/img/brand_1_thumb.png';
let ib_2 = process.env.PUBLIC_URL +  '/assets/img/brand_2_thumb.png';

const Branding = React.forwardRef((props, ref) => {
	return (
		<div className={styles['grid']} data-scroll-section>
			<div className={`${styles['grid--item']} ${styles['grid--item-1']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-2']}`} ></div>
			<div className={`${styles['grid--item']} ${styles['grid--item-3']}`} ></div>

			<div className={`${styles['grid--item']} ${styles['grid--item-5']}`} >
				<div className={styles.title}>
					<span className={styles.title__light}>Branding &</span><br />
					<span className={styles.title__bold}>Identity Design</span>
				</div>
			</div>


			<div className={`${styles['grid--item']} ${styles['grid--item-6']} ${styles['mg-lt-50']} `} >
				<img className={styles['app--image']} src={ib_1} alt=''></img>
			</div>
			<div className={`${styles['grid--item']} ${styles['grid--item-6-2']} ${styles['mg-l-150']} `} >
				<p className={styles['app--title']}>Sunayra</p>
				<p className={styles['app--thintitle']}>Brand Identity &<br />
					Social Media Design</p>
				<Link to={`/portfolio/sunayra`} style={{ textDecoration: 'none' }}><SeeMoreBtn /></Link>
			</div>

			<div className={`${styles['grid--item']} ${styles['grid--item-7']} ${styles['mg-l-150']}`} >
				<p className={styles['app--title']}>Simplex Studio</p>
				<p className={styles['app--thintitle']}>Brand Identity &<br />
					Web Design</p>
				<Link to={`/portfolio/simplex_studo`} style={{ textDecoration: 'none' }}><SeeMoreBtn /></Link>
			</div>
			<div className={`${styles['grid--item']} ${styles['grid--item-7-2']} ${styles['mg-rt-50']}`} >
				<img className={styles['app--image']} src={ib_2} alt=''></img>
			</div>

			<div className={`${styles['grid--item']} ${styles['grid--item-8']}`} >
			</div>
		</div>

	);
})

export default Branding;