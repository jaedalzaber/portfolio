import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'locomotive-scroll/src/locomotive-scroll.scss';
import React, { useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import GoBackBtn from '../../../comps/buttons/goback/GoBackBtn';
import { Curate as CurateData } from '../../../models/Database';
import styles from './Curate.module.scss';

import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Curate = React.forwardRef((props, ref) => {
	const panelsContainer = useRef();
	const bg = useRef();
	const logo = useRef();
	const menu = useRef();
	const panels = useRef([]);
	const copy = useRef();

	const data = CurateData;
	const { pathname } = useLocation();

	const createPanelsRefs = (panel, index) => {
		panels.current[index] = panel;
	};


	const loco = (scroll) => {
		console.log('update');
		if (scroll) {
			console.log(scroll);
			scroll.on('scroll', ScrollTrigger.update);
			ScrollTrigger.scrollerProxy(panelsContainer.current, {
				scrollTop(value) {
					return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
				},
				pinType: panelsContainer.current.style.transform ? "transform" : "fixed"
			});

			// ScrollTrigger.addEventListener('refresh', () => scroll.update());
			ScrollTrigger.refresh();

			ScrollTrigger.create({
				trigger: panels.current[0],
				scroller: panelsContainer.current,
				start: 'top 50%',
				end: 'bottom 50%',
				onEnter: () => {
					gsap.to(bg.current, {
						backgroundColor: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(copy.current, {
						color: '#303030',
						overwrite: "auto"
					});
					gsap.to(logo.current, {
						fill: '#373737',
						overwrite: "auto"
					});
					gsap.to(menu.current, {
						fill: '#373737',
						overwrite: "auto"
					});
				},
				onEnterBack: () => {
					gsap.to(bg.current, {
						backgroundColor: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(copy.current, {
						color: '#303030',
						overwrite: "auto"
					});
					gsap.to(logo.current, {
						fill: '#373737',
						overwrite: "auto"
					});
					gsap.to(menu.current, {
						fill: '#373737',
						overwrite: "auto"
					});
				},
				onLeave: () => {
					gsap.to(bg.current, {
						backgroundColor: '#252525',
						overwrite: "auto"
					});
					gsap.to(copy.current, {
						color: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(logo.current, {
						fill: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(menu.current, {
						fill: '#F4F6FF',
						overwrite: "auto"
					});
				},
			}
			);

			ScrollTrigger.create({
				trigger: panels.current[2],
				scroller: panelsContainer.current,
				start: 'top 50%',
				end: 'bottom bottom',
				onEnter: () => {
					gsap.to(bg.current, {
						backgroundColor: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(logo.current, {
						fill: '#252525',
						overwrite: "auto"
					});
					gsap.to(menu.current, {
						fill: '#252525',
						overwrite: "auto"
					});
				},
				onLeaveBack: () => {
					gsap.to(bg.current, {
						backgroundColor: '#303030',
						overwrite: "auto"
					});
					gsap.to(logo.current, {
						fill: '#F4F6FF',
						overwrite: "auto"
					});
					gsap.to(menu.current, {
						fill: '#F4F6FF',
						overwrite: "auto"
					});
				},
			}
			);

			ScrollTrigger.create({
				trigger: panels.current[1],
				scroller: panelsContainer.current,
				start: 'top 30%',
				onEnter: () =>
					gsap.to(panels.current[1], {
						opacity: 1,
						overwrite: "auto",
					}),
				onLeaveBack: () =>
					gsap.to(panels.current[1], {
						opacity: 0,
						overwrite: "auto",
					})
			}
			);
		}
	}


	return (
		<LocomotiveScrollProvider
			options={
				{
					smooth: true,
					multiplier: .7,
				}
			}
			watch={[

			]}
			containerRef={panelsContainer}
			location={pathname}
			onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
			onUpdate={loco}
		>
			<div className={styles['wrapper']} ref={bg}  data-scroll-container>

				<div className={styles['container']} >
					<div className={styles['grid']} ref={panelsContainer}  >
						<div className={styles['motion--header']}>
							<div className={styles.title}>
								<span className={styles.title__bold}>Curate - Moodboard App</span><br />
								<span className={styles.title__light}>UI/UX Development for </span>
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
						<div ref={(e) => createPanelsRefs(e, 0)}>
							<div className={`${styles['viewer']} `}>
								<div className={`${styles['video-container']} `}>
									<video width="1024" height="576" loop autoPlay muted>
										<source src={data.video} type="video/mp4" />
									</video>
									<div className={styles['video-border']} ></div>
								</div>
								<div className={styles['intro']} >
									<p ref={copy}>
										Curate is a Moodboard app. I created it to store, research and study all of my references and course materials. . <br /><br />
										I added a lot of features to this app as my needs, which are absent from other moodboard app available online. Here I can create unlimited nested Boards and diffrent type of pins like images, gifs, videos, pdfs etc. The frontend is developed using Angular 9 and the backend is developed in NodeJS, Strapi.</p>
								</div>
							</div>
						</div>

						<div className={`${styles['section']} `} ref={(e) => createPanelsRefs(e, 1)}>
							<div className={`${styles['section--left']} `}>
								<div className={styles['section--subtitle']} >Masonary</div>
								<div className={styles['section--title']} >Moodboard</div>
							</div>
							<div className={`${styles['section--right']} `}>
								<img src={data.massionary} alt="" width="760" />
							</div>
						</div>
						<div className={`${styles['section-nav']} `} >
						<video width="442" height="918" loop autoPlay muted>
										<source src={data.nav} type="video/mp4" />
									</video>
							<div className={`${styles['section-nav--right']} `}>
								<div className={`${styles['section--subtitle']} `} >Retractable</div>
								<div className={styles['section--title']} >Navigation</div>

								<div className={styles['nav-item']} >
									<p className={styles['label-thin']} >1. Edit existing board</p>
									<img src={data.edit_board} alt="" />
								</div>

								<div className={styles['nav-item']} >
									<p className={styles['label-thin']} >2. Add new board</p>
									<img src={data.add_board} alt="" />
								</div>
							</div>
						</div>

						<div className={`${styles['section-pin']} `}>
							<img className={styles['bg']} src={data.bg} alt=""  />
							<div>
								<div className={styles['section--subtitle']} >Pin</div>
								<div className={styles['section--title']} >Image Viewer</div>
							</div>
							<div className={`${styles['section--right']} `}>
								<img src={data.pin_viewer} alt="" width="1024" />
							</div>
						</div>

						<div className={styles['icon-wrap']} >
							<div className={styles['col']} >
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.306641" y="0.380371" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path d="M38.6719 22.5132H32.0828V25.8077H38.6719C41.3899 25.8077 43.6137 28.0315 43.6137 30.7495C43.6137 33.4675 41.3899 35.6913 38.6719 35.6913H32.0828V38.9859H38.6719C43.2184 38.9859 46.9082 35.296 46.9082 30.7495C46.9082 26.2031 43.2184 22.5132 38.6719 22.5132ZM28.7883 35.6913H22.1992C19.4812 35.6913 17.2574 33.4675 17.2574 30.7495C17.2574 28.0315 19.4812 25.8077 22.1992 25.8077H28.7883V22.5132H22.1992C17.6528 22.5132 13.9629 26.2031 13.9629 30.7495C13.9629 35.296 17.6528 38.9859 22.1992 38.9859H28.7883V35.6913ZM23.8465 29.1023H37.0246V32.3968H23.8465V29.1023Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Open Source</div>
								</div>
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.306641" y="0.146484" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path d="M39.7622 20.2463L41.2777 21.7618L36.8466 26.1929L35.3311 24.6774L39.7622 20.2463ZM39.7787 16.2764C39.3504 16.2764 38.9386 16.4411 38.6091 16.7541L33.4697 21.8935L30.2904 18.7473L27.9678 21.0699L30.3069 23.409L15.6133 38.1027V45.9272H23.4378L38.1314 31.2336L40.4705 33.5727L42.7932 31.25L39.6304 28.0873L44.7699 22.9478C45.4288 22.2889 45.4288 21.2511 44.7864 20.6087L40.9318 16.7541C40.6023 16.4411 40.1905 16.2764 39.7787 16.2764ZM22.0706 42.6326L18.9078 39.4699L32.1848 26.1929L35.3475 29.3557L22.0706 42.6326Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Color Picker</div>
								</div>
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.306641" y="0.913574" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path d="M34.5789 46.3622C34.2495 46.3622 33.9612 46.2387 33.7141 45.9916C33.467 45.7445 33.3435 45.4562 33.3435 45.1268C33.3435 44.7699 33.467 44.4747 33.7141 44.2414C33.9612 44.008 34.2495 43.8913 34.5789 43.8913C36.1987 43.8913 37.5646 43.5619 38.6765 42.903C39.7884 42.2441 40.3444 41.4753 40.3444 40.5968C40.3444 39.9653 39.9394 39.3476 39.1295 38.7436C38.3196 38.1396 37.2283 37.6729 35.8556 37.3434L37.7911 35.4079C39.5207 35.9295 40.7905 36.6502 41.6004 37.5699C42.4103 38.4897 42.8153 39.4986 42.8153 40.5968C42.8153 42.4362 41.9779 43.857 40.3032 44.8591C38.6285 45.8612 36.7204 46.3622 34.5789 46.3622ZM21.4008 34.2548C19.6437 33.8705 18.3808 33.2665 17.6121 32.4428C16.8433 31.6192 16.459 30.7681 16.459 29.8896C16.459 28.9287 16.8159 28.0638 17.5297 27.2951C18.2435 26.5264 19.8908 25.6753 22.4715 24.7419C24.2835 24.0829 25.4503 23.5476 25.972 23.1358C26.4936 22.724 26.7544 22.2435 26.7544 21.6944C26.7544 21.008 26.4524 20.4178 25.8484 19.9236C25.2444 19.4294 24.311 19.1823 23.0481 19.1823C22.3068 19.1823 21.6753 19.2784 21.1537 19.4706C20.6321 19.6628 20.1653 19.9648 19.7535 20.3766C19.5339 20.5962 19.2525 20.7266 18.9093 20.7678C18.5661 20.809 18.2573 20.7198 17.9827 20.5001C17.6807 20.2805 17.5228 20.006 17.5091 19.6765C17.4954 19.3471 17.5983 19.0588 17.818 18.8117C18.2847 18.2077 18.9848 17.7066 19.9182 17.3086C20.8517 16.9105 21.895 16.7114 23.0481 16.7114C24.915 16.7114 26.4112 17.1576 27.5369 18.0498C28.6625 18.9421 29.2253 20.157 29.2253 21.6944C29.2253 22.82 28.8341 23.7741 28.0516 24.5565C27.2692 25.339 25.7386 26.1558 23.4599 27.0068C21.6204 27.6932 20.4056 28.2354 19.8153 28.6335C19.225 29.0316 18.9299 29.4503 18.9299 29.8896C18.9299 30.3288 19.3005 30.7475 20.0418 31.1456C20.7831 31.5437 21.895 31.9212 23.3775 32.2781L21.4008 34.2548ZM41.8269 27.9128L36.5556 22.6416L38.4088 20.7884C38.903 20.2942 39.4521 20.0471 40.0561 20.0471C40.6601 20.0471 41.2092 20.2942 41.7034 20.7884L43.6801 22.7651C44.1743 23.2593 44.4213 23.8084 44.4213 24.4124C44.4213 25.0164 44.1743 25.5655 43.6801 26.0597L41.8269 27.9128ZM18.1063 46.3622V41.091L34.7848 24.4124L40.0561 29.6837L23.3775 46.3622H18.1063Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Draw Mode</div>
								</div>
							</div>
							<div className={styles['col']} >
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.695312" y="0.380859" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7036 36.4695H37.0049L45.2248 44.7059L42.7703 47.1603L34.534 38.9404V37.6391L34.0892 37.1779C32.2114 38.7922 29.7734 39.7641 27.1213 39.7641C21.2076 39.7641 16.4141 34.9705 16.4141 29.0568C16.4141 23.1432 21.2076 18.3496 27.1213 18.3496C33.035 18.3496 37.8285 23.1432 37.8285 29.0568C37.8285 31.7089 36.8566 34.1469 35.2423 36.0248L35.7036 36.4695ZM19.7086 29.0568C19.7086 33.1585 23.0196 36.4695 27.1213 36.4695C31.223 36.4695 34.534 33.1585 34.534 29.0568C34.534 24.9552 31.223 21.6441 27.1213 21.6441C23.0196 21.6441 19.7086 24.9552 19.7086 29.0568ZM27.9452 29.8809H31.2397V28.2337H27.9452V24.9391H26.2979V28.2337H23.0034V29.8809H26.2979V33.1755H27.9452V29.8809Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Zoom Image</div>
								</div>
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.695312" y="0.147461" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path d="M38.2414 11.9385H18.4742C16.6622 11.9385 15.1797 13.421 15.1797 15.233V38.2948H18.4742V15.233H38.2414V11.9385ZM43.1832 18.5275H25.0633C23.2513 18.5275 21.7688 20.0101 21.7688 21.8221V44.8838C21.7688 46.6958 23.2513 48.1784 25.0633 48.1784H43.1832C44.9952 48.1784 46.4778 46.6958 46.4778 44.8838V21.8221C46.4778 20.0101 44.9952 18.5275 43.1832 18.5275ZM43.1832 44.8838H25.0633V21.8221H43.1832V44.8838Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Duplicate Pin</div>
								</div>
								<div className={styles['icon']} >
									<div className={styles['icon-img']} >
										<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.695312" y="0.913086" width="60.2582" height="60.2582" rx="3" fill="#004970" />
											<path d="M42.5812 33.8212C42.6471 33.327 42.68 32.8163 42.68 32.2727C42.68 31.7456 42.6471 31.2185 42.5647 30.7243L45.9087 28.1216C46.2052 27.891 46.2875 27.4463 46.1063 27.1168L42.9436 21.6479C42.7459 21.2855 42.3341 21.1702 41.9717 21.2855L38.0347 22.8669C37.2111 22.2409 36.338 21.7138 35.3661 21.3184L34.7731 17.1344C34.7072 16.739 34.3778 16.459 33.9824 16.459H27.6569C27.2616 16.459 26.9486 16.739 26.8827 17.1344L26.2897 21.3184C25.3178 21.7138 24.4283 22.2574 23.6211 22.8669L19.6842 21.2855C19.3218 21.1537 18.9099 21.2855 18.7123 21.6479L15.566 27.1168C15.3683 27.4627 15.4342 27.891 15.7637 28.1216L19.1076 30.7243C19.0252 31.2185 18.9594 31.7621 18.9594 32.2727C18.9594 32.7834 18.9923 33.327 19.0747 33.8212L15.7307 36.4239C15.4342 36.6545 15.3518 37.0992 15.533 37.4287L18.6958 42.8976C18.8935 43.26 19.3053 43.3753 19.6677 43.26L23.6047 41.6786C24.4283 42.3046 25.3013 42.8317 26.2732 43.2271L26.8662 47.4111C26.9486 47.8065 27.2616 48.0865 27.6569 48.0865H33.9824C34.3778 48.0865 34.7072 47.8065 34.7567 47.4111L35.3497 43.2271C36.3216 42.8317 37.2111 42.3046 38.0182 41.6786L41.9552 43.26C42.3176 43.3918 42.7294 43.26 42.9271 42.8976L46.0899 37.4287C46.2875 37.0663 46.2052 36.6545 45.8922 36.4239L42.5812 33.8212ZM30.8197 38.2029C27.5581 38.2029 24.8895 35.5343 24.8895 32.2727C24.8895 29.0112 27.5581 26.3426 30.8197 26.3426C34.0813 26.3426 36.7498 29.0112 36.7498 32.2727C36.7498 35.5343 34.0813 38.2029 30.8197 38.2029Z" fill="white" />
										</svg>
									</div>
									<div className={`${styles['icon-name']} `}>Edit Pin Settings</div>
								</div>
							</div>
						</div>

						<div className={`${styles['feature']} ${styles['gap-200']} `} >
							<div className={styles['icon']} >
								<div className={styles['icon-img']} >
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.306641" y="0.380371" width="60.2582" height="60.2582" rx="8" fill="#058FD9" />
										<path d="M39.7622 20.2463L41.2777 21.7618L36.8466 26.1929L35.3311 24.6774L39.7622 20.2463ZM39.7787 16.2764C39.3504 16.2764 38.9386 16.4411 38.6091 16.7541L33.4697 21.8935L30.2904 18.7473L27.9678 21.0699L30.3069 23.409L15.6133 38.1027V45.9272H23.4378L38.1314 31.2336L40.4705 33.5727L42.7932 31.25L39.6304 28.0873L44.7699 22.9478C45.4288 22.2889 45.4288 21.2511 44.7864 20.6087L40.9318 16.7541C40.6023 16.4411 40.1905 16.2764 39.7787 16.2764ZM22.0706 42.6326L18.9078 39.4699L32.1848 26.1929L35.3475 29.3557L22.0706 42.6326Z" fill="white" />
									</svg>
								</div>
								<div className={`${styles['icon-name']} `}>Create Color Palettes </div>
							</div>
							<video className={styles['feature--video']} width="1024" height="460" loop autoPlay muted>
								<source src={data.vid_cp} type="video/mp4" />
							</video>
						</div>

						<div className={styles['feature']} >
							<div className={styles['icon']} >
								<div className={styles['icon-img']} >
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.306641" y="0.380371" width="60.2582" height="60.2582" rx="8" fill="#058FD9" />
										<path d="M34.5789 46.3622C34.2495 46.3622 33.9612 46.2387 33.7141 45.9916C33.467 45.7445 33.3435 45.4562 33.3435 45.1268C33.3435 44.7699 33.467 44.4747 33.7141 44.2414C33.9612 44.008 34.2495 43.8913 34.5789 43.8913C36.1987 43.8913 37.5646 43.5619 38.6765 42.903C39.7884 42.2441 40.3444 41.4753 40.3444 40.5968C40.3444 39.9653 39.9394 39.3476 39.1295 38.7436C38.3196 38.1396 37.2283 37.6729 35.8556 37.3434L37.7911 35.4079C39.5207 35.9295 40.7905 36.6502 41.6004 37.5699C42.4103 38.4897 42.8153 39.4986 42.8153 40.5968C42.8153 42.4362 41.9779 43.857 40.3032 44.8591C38.6285 45.8612 36.7204 46.3622 34.5789 46.3622ZM21.4008 34.2548C19.6437 33.8705 18.3808 33.2665 17.6121 32.4428C16.8433 31.6192 16.459 30.7681 16.459 29.8896C16.459 28.9287 16.8159 28.0638 17.5297 27.2951C18.2435 26.5264 19.8908 25.6753 22.4715 24.7419C24.2835 24.0829 25.4503 23.5476 25.972 23.1358C26.4936 22.724 26.7544 22.2435 26.7544 21.6944C26.7544 21.008 26.4524 20.4178 25.8484 19.9236C25.2444 19.4294 24.311 19.1823 23.0481 19.1823C22.3068 19.1823 21.6753 19.2784 21.1537 19.4706C20.6321 19.6628 20.1653 19.9648 19.7535 20.3766C19.5339 20.5962 19.2525 20.7266 18.9093 20.7678C18.5661 20.809 18.2573 20.7198 17.9827 20.5001C17.6807 20.2805 17.5228 20.006 17.5091 19.6765C17.4954 19.3471 17.5983 19.0588 17.818 18.8117C18.2847 18.2077 18.9848 17.7066 19.9182 17.3086C20.8517 16.9105 21.895 16.7114 23.0481 16.7114C24.915 16.7114 26.4112 17.1576 27.5369 18.0498C28.6625 18.9421 29.2253 20.157 29.2253 21.6944C29.2253 22.82 28.8341 23.7741 28.0516 24.5565C27.2692 25.339 25.7386 26.1558 23.4599 27.0068C21.6204 27.6932 20.4056 28.2354 19.8153 28.6335C19.225 29.0316 18.9299 29.4503 18.9299 29.8896C18.9299 30.3288 19.3005 30.7475 20.0418 31.1456C20.7831 31.5437 21.895 31.9212 23.3775 32.2781L21.4008 34.2548ZM41.8269 27.9128L36.5556 22.6416L38.4088 20.7884C38.903 20.2942 39.4521 20.0471 40.0561 20.0471C40.6601 20.0471 41.2092 20.2942 41.7034 20.7884L43.6801 22.7651C44.1743 23.2593 44.4213 23.8084 44.4213 24.4124C44.4213 25.0164 44.1743 25.5655 43.6801 26.0597L41.8269 27.9128ZM18.1063 46.3622V41.091L34.7848 24.4124L40.0561 29.6837L23.3775 46.3622H18.1063Z" fill="white" />
									</svg>
								</div>
								<div className={`${styles['icon-name']} `}>Draw on the image </div>
							</div>
							<video className={styles['feature--video']} width="1024" height="460" loop autoPlay muted>
								<source src={data.vid_draw} type="video/mp4" />
							</video>
						</div>

						<div className={styles['feature']} >
							<div className={styles['icon']} >
								<div className={styles['icon-img']} >
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.306641" y="0.380371" width="60.2582" height="60.2582" rx="8" fill="#058FD9" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7036 36.4695H37.0049L45.2248 44.7059L42.7703 47.1603L34.534 38.9404V37.6391L34.0892 37.1779C32.2114 38.7922 29.7734 39.7641 27.1213 39.7641C21.2076 39.7641 16.4141 34.9705 16.4141 29.0568C16.4141 23.1432 21.2076 18.3496 27.1213 18.3496C33.035 18.3496 37.8285 23.1432 37.8285 29.0568C37.8285 31.7089 36.8566 34.1469 35.2423 36.0248L35.7036 36.4695ZM19.7086 29.0568C19.7086 33.1585 23.0196 36.4695 27.1213 36.4695C31.223 36.4695 34.534 33.1585 34.534 29.0568C34.534 24.9552 31.223 21.6441 27.1213 21.6441C23.0196 21.6441 19.7086 24.9552 19.7086 29.0568ZM27.9452 29.8809H31.2397V28.2337H27.9452V24.9391H26.2979V28.2337H23.0034V29.8809H26.2979V33.1755H27.9452V29.8809Z" fill="white" />
									</svg>
								</div>
								<div className={`${styles['icon-name']} `}>Zoom Image</div>
							</div>
							<video className={styles['feature--video']} width="1024" height="460" loop autoPlay muted>
								<source src={data.vid_zoom} type="video/mp4" />
							</video>
						</div>

						<div className={`${styles['section-pin']} `}>
							<img className={styles['bg']} src={data.bg} alt="" width="100%" />
							<div>
								<div className={styles['section--subtitle']} >Pin</div>
								<div className={styles['section--title']} >Image Viewer</div>
							</div>
							<div className={`${styles['section--right']} `}>
								<img src={data.video_viewer} alt="" width="1024" />
							</div>
						</div>

						<div className={`${styles['feature']} ${styles['gap-200']} `} >
							<div className={styles['icon']} >
								<div className={styles['icon-img']} >
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect y="0.310547" width="60.2491" height="60.2491" rx="8" fill="#058FD9" />
										<path d="M29.6899 37.4141C32.635 37.4141 35.0225 35.0266 35.0225 32.0816C35.0225 29.1365 32.635 26.749 29.6899 26.749C26.7449 26.749 24.3574 29.1365 24.3574 32.0816C24.3574 35.0266 26.7449 37.4141 29.6899 37.4141Z" fill="white" />
										<path d="M24.6903 15.418L21.6408 18.7508H16.3582C14.5252 18.7508 13.0254 20.2506 13.0254 22.0836V42.0806C13.0254 43.9137 14.5252 45.4134 16.3582 45.4134H43.0209C44.8539 45.4134 46.3537 43.9137 46.3537 42.0806V22.0836C46.3537 20.2506 44.8539 18.7508 43.0209 18.7508H37.7383L34.6888 15.418H24.6903ZM29.6895 40.4142C25.0902 40.4142 21.3575 36.6814 21.3575 32.0821C21.3575 27.4828 25.0902 23.75 29.6895 23.75C34.2888 23.75 38.0216 27.4828 38.0216 32.0821C38.0216 36.6814 34.2888 40.4142 29.6895 40.4142Z" fill="white" />
									</svg>

								</div>
								<div className={`${styles['icon-name']} `}>Take a ScreenShot</div>
							</div>
							<video className={styles['feature--video']} width="1024" height="460" loop autoPlay muted>
								<source src={data.vid_ss} type="video/mp4" />
							</video>
						</div>

						<div className={styles['feature']} >
							<div className={styles['icon']} >
								<div className={styles['icon-img']} >
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.0703125" y="0.525391" width="60.2491" height="60.2491" rx="8" fill="#058FD9" />
										<path d="M30.1876 13.9873C20.989 13.9873 13.5234 21.4528 13.5234 30.6515C13.5234 39.8501 20.989 47.3156 30.1876 47.3156C39.3862 47.3156 46.8517 39.8501 46.8517 30.6515C46.8517 21.4528 39.3862 13.9873 30.1876 13.9873ZM30.1876 43.9828C22.822 43.9828 16.8563 38.017 16.8563 30.6515C16.8563 23.2859 22.822 17.3201 30.1876 17.3201C37.5531 17.3201 43.5189 23.2859 43.5189 30.6515C43.5189 38.017 37.5531 43.9828 30.1876 43.9828Z" fill="white" />
										<path d="M30.1875 38.9835C34.7892 38.9835 38.5196 35.2531 38.5196 30.6514C38.5196 26.0497 34.7892 22.3193 30.1875 22.3193C25.5859 22.3193 21.8555 26.0497 21.8555 30.6514C21.8555 35.2531 25.5859 38.9835 30.1875 38.9835Z" fill="white" />
									</svg>

								</div>
								<div className={`${styles['icon-name']} `}>Record a Clip from video</div>
							</div>
							<video className={styles['feature--video']}  loop autoPlay muted>
								<source src={data.vid_recorder} type="video/mp4" />
							</video>
						</div>

						{/* <div className={styles['section-page']} ref={(e) => createPanelsRefs(e, 2)}>
							<div className={styles['page-title']} >
								<span className={styles['page-title--bold']} >StyleScape </span>
								<span className={styles['page-title--light']} >Moodboard</span>
							</div>
							<div className={`${styles['video-container']} `}>
								<video width="1024" height="576" loop autoPlay muted>
									<source src={data.video} type="video/mp4" />
								</video>
								<div className={styles['video-border']} ></div>
							</div>
						</div>

						<div className={styles['section-page']}>
							<div className={styles['page-title']} >
								<span className={styles['page-title--bold']} >Pin Uploading </span>
								<span className={styles['page-title--light']} >Page</span>
							</div>
							<div className={`${styles['video-container']} `}>
								<video width="1024" height="576" loop autoPlay muted>
									<source src={data.video} type="video/mp4" />
								</video>
								<div className={styles['video-border']} ></div>
							</div>
						</div> */}

					</div>
				</div>
			</div>
			<div className={styles['nav']} >
				<div className={styles['nav-wrap']} >
					<Link to='/' className={styles['logo']} >
						<svg width="70" viewBox="0 0 59 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path ref={logo} fill-rule="evenodd" clip-rule="evenodd" d="M45.5528 8.08698C45.0621 9.08365 44.8168 10.2413 44.8168 11.56C44.8168 12.8786 45.0621 14.044 45.5528 15.056C46.0588 16.0526 46.7411 16.827 47.5998 17.379C48.4584 17.9156 49.4168 18.184 50.4748 18.184C51.3794 18.184 52.1691 18 52.8438 17.632C53.5338 17.264 54.0628 16.7733 54.4308 16.16V18H58.3638V0.97998H54.4308V6.93698C54.0321 6.33898 53.4801 5.86365 52.7748 5.51098C52.0848 5.15831 51.3181 4.98198 50.4748 4.98198C49.4168 4.98198 48.4584 5.25031 47.5998 5.78698C46.7411 6.32365 46.0588 7.09031 45.5528 8.08698ZM53.6028 9.25998C54.1548 9.82731 54.4308 10.6016 54.4308 11.583C54.4308 12.5643 54.1548 13.3386 53.6028 13.906C53.0661 14.4733 52.4068 14.757 51.6248 14.757C50.8428 14.757 50.1758 14.4733 49.6238 13.906C49.0871 13.3233 48.8188 12.5413 48.8188 11.56C48.8188 10.5786 49.0871 9.81198 49.6238 9.25998C50.1758 8.69265 50.8428 8.40898 51.6248 8.40898C52.4068 8.40898 53.0661 8.69265 53.6028 9.25998ZM16.6436 11.56C16.6436 10.2413 16.8889 9.08365 17.3796 8.08698C17.8856 7.09031 18.5679 6.32365 19.4266 5.78698C20.2852 5.25031 21.2436 4.98198 22.3016 4.98198C23.2062 4.98198 23.9959 5.16598 24.6706 5.53398C25.3606 5.90198 25.8896 6.38498 26.2576 6.98298V5.16598H30.1906V18H26.2576V16.183C25.8742 16.781 25.3376 17.264 24.6476 17.632C23.9729 18 23.1832 18.184 22.2786 18.184C21.2359 18.184 20.2852 17.9156 19.4266 17.379C18.5679 16.827 17.8856 16.0526 17.3796 15.056C16.8889 14.044 16.6436 12.8786 16.6436 11.56ZM26.2576 11.583C26.2576 10.6016 25.9816 9.82731 25.4296 9.25998C24.8929 8.69265 24.2336 8.40898 23.4516 8.40898C22.6696 8.40898 22.0026 8.69265 21.4506 9.25998C20.9139 9.81198 20.6456 10.5786 20.6456 11.56C20.6456 12.5413 20.9139 13.3233 21.4506 13.906C22.0026 14.4733 22.6696 14.757 23.4516 14.757C24.2336 14.757 24.8929 14.4733 25.4296 13.906C25.9816 13.3386 26.2576 12.5643 26.2576 11.583ZM44.3289 11.376C44.3289 11.744 44.3059 12.1273 44.2599 12.526H35.3589C35.4202 13.3233 35.6732 13.9366 36.1179 14.366C36.5779 14.78 37.1376 14.987 37.7969 14.987C38.7782 14.987 39.4606 14.573 39.8439 13.745H44.0299C43.8152 14.5883 43.4242 15.3473 42.8569 16.022C42.3049 16.6966 41.6072 17.2256 40.7639 17.609C39.9206 17.9923 38.9776 18.184 37.9349 18.184C36.6776 18.184 35.5582 17.9156 34.5769 17.379C33.5956 16.8423 32.8289 16.0756 32.2769 15.079C31.7249 14.0823 31.4489 12.917 31.4489 11.583C31.4489 10.249 31.7172 9.08365 32.2539 8.08698C32.8059 7.09031 33.5726 6.32365 34.5539 5.78698C35.5352 5.25031 36.6622 4.98198 37.9349 4.98198C39.1769 4.98198 40.2809 5.24265 41.2469 5.76398C42.2129 6.28531 42.9642 7.02898 43.5009 7.99498C44.0529 8.96098 44.3289 10.088 44.3289 11.376ZM40.3039 10.341C40.3039 9.66631 40.0739 9.12965 39.6139 8.73098C39.1539 8.33231 38.5789 8.13298 37.8889 8.13298C37.2296 8.13298 36.6699 8.32465 36.2099 8.70798C35.7652 9.09131 35.4892 9.63565 35.3819 10.341H40.3039ZM15.344 23.016V4.97998H11.204V23.016C11.204 24.096 10.928 24.972 10.376 25.644C9.82398 26.292 9.01999 26.616 7.96398 26.616C6.90798 26.616 6.10398 26.292 5.55198 25.644C5.02398 24.996 4.74798 24.12 4.72398 23.016H0.583984C0.583984 25.248 1.25598 27.012 2.59998 28.308C3.96798 29.604 5.75598 30.252 7.96398 30.252C10.172 30.252 11.948 29.604 13.292 28.308C14.66 27.012 15.344 25.248 15.344 23.016Z" fill="#373737" />
							<path d="M16 35C12.8084 35 4.67019 35 1 35" stroke="#456EFF" stroke-width="2" />
						</svg>

					</Link>
					<div className={styles['hamburger']} >
						<svg width="30" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path ref={menu} fill-rule="evenodd" clip-rule="evenodd" d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H32C32.8284 0.5 33.5 1.17157 33.5 2C33.5 2.82843 32.8284 3.5 32 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM0.5 12C0.5 11.1716 1.17157 10.5 2 10.5H32C32.8284 10.5 33.5 11.1716 33.5 12C33.5 12.8284 32.8284 13.5 32 13.5H2C1.17157 13.5 0.5 12.8284 0.5 12ZM2 20.5C1.17157 20.5 0.5 21.1716 0.5 22C0.5 22.8284 1.17157 23.5 2 23.5H32C32.8284 23.5 33.5 22.8284 33.5 22C33.5 21.1716 32.8284 20.5 32 20.5H2Z" fill="#373737" />
						</svg>

					</div>
					<div className={styles['arrow-left']} >
						<Link to='/' style={{ textDecoration: 'none' }} state={{ scrollTo: 'ui' }}><GoBackBtn /></Link>
					</div>
				</div>
			</div>
		</LocomotiveScrollProvider>
	);
});

export default Curate;