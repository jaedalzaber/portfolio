import styles from "./Portfolio.module.scss";



import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import 'locomotive-scroll/src/locomotive-scroll.scss'
import { Simplex, Sunayra, Anime_ui, Anime_2d, Anime_3d, Modeling, Empty } from "../../models/Database";
import SeeMoreBtn from "../../comps/buttons/seemore/SeeMoreBtn";
import React, { useState } from "react";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root');
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Portfolio = React.forwardRef((props, ref) => {
	const panelsContainer = useRef();
	const params = useParams();

	let [data, setData] = useState(Empty);
	let logo = process.env.PUBLIC_URL + '/assets/svg/logo.svg'
	let mail = process.env.PUBLIC_URL + '/assets/svg/mail.svg'
	let fb = process.env.PUBLIC_URL + '/assets/svg/fb.svg'
	let insta = process.env.PUBLIC_URL + '/assets/svg/insta.svg'
	let twitter = process.env.PUBLIC_URL + '/assets/svg/twitter.svg'
	let linkedin = process.env.PUBLIC_URL + '/assets/svg/linkedin.svg'
	let hamburger = process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'

	const [modalIsOpen, setIsOpen] = React.useState(false);
	const modalItem = useRef();

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(() => {
		switch (params.id) {
			case 'simplex_studo':
				setData(Simplex);
				break;
			case 'sunayra':
				setData(Sunayra);
				break;
			case 'uianimation':
				setData(Anime_ui);
				break;
			case '2danimation':
				setData(Anime_2d);
				break;
			case '3danimation':
				setData(Anime_3d);
				break;
			case 'modeling':
				setData(Modeling);
				break;
			default:
				setData(Empty);
				break;
		}

	}, [data, params.id]);



	return (
		<LocomotiveScrollProvider
			options={
				{
					smooth: true,
					multiplier: 1,
				}
			}
			watch={[]}
			containerRef={panelsContainer}
		>
			<div className="portfolio-wrapper">

				<div className="main-container">
					<div className="sidebar" >
						<Link className="logo" to='/'>
							<img src={logo} width="70px" alt="" />
						</Link>
						<span className="counter"></span>
						<div className="links">
							<div className="nav">
								<div className="nav--item menu-1"><Link to='/#welcome' style={{ textDecoration: 'none', color: '#555555' }} state={{ scrollTo: 'welcome' }}>Welcom</Link></div>
								<div className="nav--item menu-2"><Link to='/#ui' style={{ textDecoration: 'none', color: '#555555' }} state={{ scrollTo: 'ui' }}>UI/UX Design</Link></div>
								<div className="nav--item menu-3"><Link to='/#motion' style={{ textDecoration: 'none', color: '#555555' }} state={{ scrollTo: 'motion' }}>Motion Design</Link></div>
								<div className="nav--item menu-4"><Link to='/#branding' style={{ textDecoration: 'none', color: '#555555', 'font-weight': 600 }} state={{ scrollTo: 'branding' }}>Branding</Link></div>
								<div className="nav--item menu-5"><Link to='/#model' style={{ textDecoration: 'none', color: '#555555' }} state={{ scrollTo: 'model' }}>3D Modeling</Link></div>
							</div>
							<div className="social">
								<div className="social--item social--item-1"><img src={fb} alt="" /></div>
								<div className="social--item social--item-2"><img src={insta} alt="" /></div>
								<div className="social--item social--item-3"><img src={twitter} alt="" /></div>
								<div className="social--item social--item-4"><img src={linkedin} alt="" /></div>
								<div className="social--item social--item-5"><img src={mail} alt="" /></div>
							</div>
						</div>
					</div>

					<main id='container' className="main" ref={panelsContainer} data-scroll-container >
						<div className={styles["grid"]}>
							<div
								className={`${styles["grid--item"]} ${styles["grid--item-1"]}`}
							></div>
							<div
								className={`${styles["grid--item"]} ${styles["grid--item-2"]}`}
							></div>
							<div
								className={`${styles["grid--item"]} ${styles["grid--item-3"]}`}
							></div>
							<div
								className={`${styles["grid--item"]} ${styles["grid--item-4"]}`}
							></div>

							<div
								className={`${styles["grid--item"]} ${styles["grid--item-5"]}`}
							>
								<div className={styles.title}>
									<span className={styles.title__light}>{data.subtitle}</span>
									<br />
									<span className={styles.title__bold}>{data.title}</span>
								</div>
							</div>

							<div
								className={`${styles["grid--item"]} ${styles["grid--item-inner"]}`}
							>
								{
									data.coverTitle &&
									<>
										<div
											className={`
						${styles[`col-1`]} 
						${styles["portfolio--title"]} 
						${styles['mg-t-60']}
					`}
											style={{ gridRow: 1 }}
										>
											{data.coverTitle}
										</div>
										<div
											className={`
						${styles["portfolio--media"]} 
						${styles[`col-2-3`]}
						${styles['mg-t-60']}
					`}
											style={{ gridRow: 1 }}
										>
											<img className={styles["portfolio--image"]} src={data.coverMedia} alt="" />
										</div></>
								}

								{data.item.map((item, i) => {
									return (
										<>
											{item.title && (
												<div
													key={`${data.title}_${i}_t`}
													className={`
										${styles["portfolio--title"]} 
										${styles[`col-${item.titlePos}`]} 
										${styles[`${!item.nogap && "mg-t-100"}`]}
										${styles['mg-t-200']}
									`}
													style={{ gridRow: i + 2 }}
												>
													{item.title}
												</div>
											)}
											{item.content && (
												<div
													key={`${data.title}_${i}_c`}
													className={`
										${styles["portfolio--content"]} 
										${styles[`col-${item.position}`]} 
										${styles[`${!item.nogap && "mg-t-100"}`]}
										${styles[`${item.title && item.position !== '1-2-3' && "mg-t-200"}`]}
									`}
													style={{ gridRow: i + 2 }}
												>
													{item.content}
												</div>
											)}
											{item.media && (
												<div
													key={`${data.title}_${i}_m`}
													className={`
														${styles["portfolio--media"]} 
														${styles[`col-${item.position}`]}
														${styles[`${!item.nogap && item.position !== '1-2-3' && "mg-t-200"}`]}
														${styles[`${item.title && item.position !== '1-2-3' && "mg-t-200"}`]}
														${styles[`${item.position === '1-2-3' && "mg-t-30"}`]}
													`}
													style={{ gridRow: i + 2 }}
												>
													{
														<div className={styles["portfolio--image"]} onClick={() => { modalItem.current = item; openModal(); }}>
															<img src={item.thumb} alt="" />
															{item.isVideo && (<svg className={styles["portfolio--image__play"]} width="142" height="141" viewBox="0 0 142 141" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="71.2364" cy="70.588" r="70.2545" fill="black" fill-opacity="0.71" />
																<path d="M51.2499 63.6831C51.2499 51.3663 51.2499 45.2079 55.2499 42.8985C59.2499 40.5891 64.5833 43.6683 75.2499 49.8267L87.2102 56.732C97.8769 62.8904 103.21 65.9696 103.21 70.5884C103.21 75.2072 97.8769 78.2864 87.2103 84.4448L75.2499 91.3501C64.5833 97.5085 59.2499 100.588 55.2499 98.2783C51.2499 95.9689 51.2499 89.8105 51.2499 77.4937L51.2499 63.6831Z" fill="white" />
															</svg>)}
														</div>
													}

													{item.subtitle && !item.seemore &&
														<div className={`
												${styles['portfolio--info']} 
											`}>
															<div className={styles['count']} >{String(i + 1).padStart(2, '0')}</div>
															<div className={styles['subtitle']} >{item.subtitle}</div>
														</div>
													}

													{item.seemore &&
														<div className={`
												${styles['portfolio--info']} 
											`}>
															<Link className={styles['more-btn']} to={`${item.seemore}`} ><SeeMoreBtn /></Link>
														</div>
													}
												</div>
											)}
										</>
									);
								})}
							</div>
						</div>
					</main>

					<div className="hamburger">
						<img src={hamburger} className="hamburger-icon" width="30px" alt="" />
					</div>
				</div>

				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					closeTimeoutMS={250}
					style={{
						content: {
							top: '50%',
							left: '50%',
							right: 'auto',
							bottom: 'auto',
							marginRight: '-50%',
							transform: 'translate(-50%, -50%)',
							background: 'none',
							border: 'none'
						},
						overlay: {
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(10, 13, 26, 0.9)',
						}
					}}
				>
					{
						modalItem.current ? modalItem.current.isVideo ?
							<video className={styles["modal--image"]} loop autoPlay controls>
								<source src={modalItem.current.media} type="video/mp4" />
							</video>
							: <img className={styles["modal--image"]} src={modalItem.current.media} alt="" /> : <></>
					}
				</Modal>
			</div>
		</LocomotiveScrollProvider>

	);
});

export default Portfolio;
