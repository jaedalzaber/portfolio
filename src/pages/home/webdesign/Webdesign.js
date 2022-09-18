import styles from './Webdesign.module.scss';
import React, { useEffect, useRef, useState } from 'react';


import GoBackBtn from '../../../comps/buttons/goback/GoBackBtn';
import Paginator from '../../../comps/paginator/Paginator';
import { HashLink as Link } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
// import locomotiveScroll from 'locomotive-scroll';
let logo = process.env.PUBLIC_URL +  '/assets/svg/logo.svg';
let hamburger = process.env.PUBLIC_URL +  '/assets/svg/hamburger.svg';

const slides = [
	{
		title: 'Architecture',
		subtitle: 'Website',
		image: process.env.PUBLIC_URL + '/assets/img/site_arch_thumb.png',
		video: process.env.PUBLIC_URL + '../../../assets/vid/architecture.mp4'
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

const Webdesign = React.forwardRef((props, ref) => {
	const params = useParams();
	let idx = Math.round(params.index);
	if ((idx < 0 || idx >= slides.count)) {
		idx = 0;
	}
	const [index, setIndex] = useState(idx);
	const videoRef = useRef();
	const paginator = useRef();


	const onLeft = () => {
		if (index > 0) {
			setIndex(index - 1);
			paginator.current.onPrev();
		}
	};

	const onRight = () => {
		if (index < slides.length - 1) {
			setIndex(index + 1);
			paginator.current.onNext();
		}
	};

	useEffect(() => {
		// const locoScroll = new locomotiveScroll({
		// 	el: document.querySelector('[data-scroll-container]'),
		// 	smooth: true,
		// 	multiplier: .75,
		// });

		videoRef.current?.load();
	}, [index]);

	return (
		<div className={styles['wrapper']} >
			<div className={styles['container']} >
				<Link to='/' className={styles['logo']} >
					<img src={logo} width="70px" alt="" />
				</Link>
				<div className={styles['hamburger']} >
					<img src={hamburger} className="hamburger-icon" width="30px" alt="" />
				</div>
				<div className={styles['arrow-left']} onClick={onLeft}>
					<svg width="28" height="59" viewBox="0 0 28 59" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.1011 55.2061L3.89831 29.4872L24.1011 3.76827" stroke="#0C1841" strokeOpacity="0.17" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
					</svg>

				</div>
				<div className={styles['arrow-right']} onClick={onRight}>
					<svg width="27" height="59" viewBox="0 0 27 59" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.4873 3.76831L23.6901 29.4871L3.4873 55.2061" stroke="#0C1841" strokeOpacity="0.17" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
					</svg>

				</div>
				<div className={styles['grid']} >
					<div className={styles['motion--header']}>
						<div className={styles.title}>
							<span className={styles.title__bold}>{slides[index].title}</span><br />
							<span className={styles.title__light}>{slides[index].subtitle}</span>
						</div>
						<div className={styles['header-icon']}>
							<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_1354_315)">
									<path d="M9.2485 26.5216C7.15441 26.5216 5.45683 24.8241 5.45683 22.73C5.45683 20.6359 7.15441 18.9383 9.2485 18.9383H13.0402V22.73C13.0402 24.8241 11.3426 26.5216 9.2485 26.5216ZM17.8751 9.18831H14.0834V1.60498H17.8751C19.9692 1.60498 21.6667 3.30256 21.6667 5.39665C21.6667 7.49073 19.9692 9.18831 17.8751 9.18831ZM9.20841 9.18831H13.0001V1.60498H9.20841C7.11433 1.60498 5.41675 3.30256 5.41675 5.39665C5.41675 7.49073 7.11433 9.18831 9.20841 9.18831ZM9.20841 17.855H13.0001V10.2716H9.20841C7.11433 10.2716 5.41675 11.9692 5.41675 14.0633C5.41675 16.1574 7.11433 17.855 9.20841 17.855ZM17.3334 10.2716C16.4715 10.2716 15.6448 10.6141 15.0353 11.2235C14.4258 11.833 14.0834 12.6597 14.0834 13.5216C14.0834 14.3836 14.4258 15.2103 15.0353 15.8197C15.6448 16.4292 16.4715 16.7716 17.3334 16.7716C18.1954 16.7716 19.022 16.4292 19.6315 15.8197C20.241 15.2103 20.5834 14.3836 20.5834 13.5216C20.5834 12.6597 20.241 11.833 19.6315 11.2235C19.022 10.6141 18.1954 10.2716 17.3334 10.2716Z" fill="#CDD0DF" />
								</g>
								<defs>
									<clipPath id="clip0_1354_315">
										<rect width="26" height="26" fill="white" transform="translate(0 0.521484)" />
									</clipPath>
								</defs>
							</svg>
							<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M2.59141 2.54649H26.1218V26.0769H2.59141V2.54649ZM0.708984 27.9593V0.664062H28.0042V27.9593H0.708984ZM7.07851 19.4884L7.77124 17.4855H11.9578L12.6505 19.4884H14.8793L11.0994 8.96185H8.64469L4.86477 19.4884H7.07851ZM9.8645 11.4015L11.3855 15.7988H8.3435L9.8645 11.4015ZM23.3852 15.9494C23.4253 15.7085 23.4454 15.4374 23.4454 15.1362C23.4454 14.323 23.2697 13.6052 22.9183 12.9827C22.577 12.3502 22.0901 11.8633 21.4576 11.522C20.8351 11.1806 20.1273 11.0099 19.3342 11.0099C18.5109 11.0099 17.7831 11.1856 17.1506 11.537C16.5181 11.8884 16.0261 12.3904 15.6747 13.043C15.3233 13.6955 15.1477 14.4535 15.1477 15.3169C15.1477 16.1703 15.3233 16.9233 15.6747 17.5758C16.0362 18.2284 16.5331 18.7354 17.1656 19.0968C17.8082 19.4482 18.531 19.6239 19.3342 19.6239C20.3281 19.6239 21.1664 19.3679 21.8491 18.8559C22.5318 18.3338 22.9936 17.6712 23.2346 16.8681H20.9606C20.6293 17.5407 20.0721 17.877 19.289 17.877C18.7469 17.877 18.2901 17.7064 17.9186 17.365C17.5471 17.0237 17.3363 16.5518 17.2861 15.9494H23.3852ZM20.6745 13.2387C21.056 13.56 21.2517 13.9917 21.2618 14.5338H17.3012C17.3815 13.9716 17.5973 13.5349 17.9487 13.2237C18.3101 12.9024 18.7519 12.7418 19.2739 12.7418C19.8261 12.7418 20.293 12.9074 20.6745 13.2387Z" fill="#CDD0DF" />
							</svg>
							<svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.136 16.7584C18.2 15.5736 18.7588 14.5297 19.6018 13.7897C20.4286 13.0629 21.5413 12.6187 22.7555 12.6187C23.9684 12.6187 25.0812 13.0629 25.9086 13.7897C26.751 14.5297 27.3098 15.5736 27.3744 16.7572C27.4383 17.9746 26.967 19.1056 26.1403 19.944C25.2973 20.7968 24.0982 21.3318 22.7555 21.3318C21.4128 21.3318 20.2113 20.7968 19.3689 19.944C18.5415 19.1056 18.0714 17.9746 18.136 16.7584Z" fill="#B7BAC8" />
								<path d="M10.78 19.2841C10.7878 19.7477 10.9302 20.6488 11.1438 21.3524C11.5928 22.8418 12.3544 24.2196 13.414 25.4339C14.5014 26.6821 15.8405 27.6846 17.3871 28.3964C19.0128 29.1439 20.7743 29.5248 22.604 29.5217C24.4306 29.5192 26.1921 29.1307 27.8178 28.3776C29.3645 27.6589 30.7023 26.652 31.7879 25.4032C32.847 24.1839 33.6073 22.8036 34.0575 21.3142C34.2838 20.5617 34.4268 19.7979 34.4841 19.0316C34.5403 18.2765 34.5167 17.5202 34.4135 16.7646C34.212 15.2921 33.7214 13.9105 32.9658 12.6511C32.2749 11.4938 31.3842 10.4807 30.3252 9.62789L30.3276 9.62602L19.6398 1.10518C19.6302 1.09766 19.6223 1.08953 19.6121 1.08263C18.9109 0.523728 17.7317 0.525611 16.9605 1.08577C16.1808 1.6522 16.0915 2.58892 16.7855 3.17978L16.7825 3.18291L21.2402 6.94677L7.65347 6.9618H7.63537C6.51235 6.96306 5.43277 7.7281 5.21915 8.69491C4.99949 9.67989 5.76225 10.4969 6.92993 10.5013L6.92813 10.5057L13.8147 10.4919L1.52602 20.286C1.51033 20.2979 1.49343 20.3104 1.47895 20.3223C0.31972 21.244 -0.0550148 22.7766 0.675162 23.7465C1.4162 24.7328 2.99181 24.7347 4.16311 23.7522L10.8699 18.0528C10.8699 18.0528 10.7721 18.8223 10.78 19.2841ZM28.0139 21.8605C26.632 23.3223 24.6974 24.1513 22.604 24.1557C20.5076 24.1595 18.5729 23.338 17.191 21.8787C16.5158 21.1676 16.0197 20.3493 15.7138 19.4777C15.4139 18.6212 15.2974 17.712 15.3746 16.7947C15.4477 15.898 15.7047 15.0428 16.1151 14.2689C16.5182 13.5083 17.0734 12.8209 17.7589 12.2395C19.1022 11.1029 20.8123 10.4875 22.601 10.485C24.3914 10.4825 26.1004 11.0922 27.4449 12.225C28.1292 12.804 28.6838 13.4889 29.0869 14.2483C29.499 15.0215 29.7543 15.8736 29.8303 16.7727C29.9064 17.6888 29.7899 18.5967 29.49 19.4539C29.1834 20.328 28.6892 21.1462 28.0139 21.8605Z" fill="#CDD0DF" />
							</svg>
						</div>
					</div>
					<div className={`${styles['viewer']} `}>
						<div className={`${styles['video-container']} `}>
							<video width="1024" height="576" ref={videoRef} loop autoPlay muted>
								<source src={slides[index].video} type="video/mp4" />
							</video>
							<div className={styles['video-border']} ></div>
						</div>
					</div>
				</div>

				<div className={`${styles['navigator']} `}>
					<div className={styles['go-back']} ><Link to='/'  style={{ textDecoration: 'none' }}   state={{scrollTo: 'ui'}}>  <GoBackBtn /></Link></div>
					<Paginator index={index} count={slides.length} arrow={false} ref={paginator} />
				</div>
			</div>
		</div>
	);
});

export default Webdesign;