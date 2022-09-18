import gsap, { Power3 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { useEffect, useRef, useState } from 'react';

import Branding from './branding/Branding';
import './Home.scss';
import Modeling from './modeling/Modeling';
import Motion from './motion/Motion';
import Thanks from './thanks/Thanks';
import WebUI from './webdesign/WebUI';
import WebUX from './webdesign/WebUX';
import Welcome from './welcome/Welcome';

import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import { Link, useLocation } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home(props) {
	const panelsContainer = useRef();
	const panels = useRef([]);
	const navs = useRef([]);
	const links = useRef();
	const locoRef = useRef();
	const pos = useRef(0);
	// const { scroll } = useLocomotiveScroll();
	const { pathname } = useLocation();

	let fb = process.env.PUBLIC_URL + '/assets/svg/fb.svg';
	let hamburger = process.env.PUBLIC_URL + '/assets/svg/hamburger.svg';
	let insta = process.env.PUBLIC_URL + '/assets/svg/insta.svg';
	let linkedin = process.env.PUBLIC_URL + '/assets/svg/linkedin.svg';
	let logo = process.env.PUBLIC_URL + '/assets/svg/logo.svg';
	let mail = process.env.PUBLIC_URL + '/assets/svg/mail.svg';
	let twitter = process.env.PUBLIC_URL + '/assets/svg/twitter.svg';

	const panelLength = [1, 1, 1, 2, 1.5, 1, 1];

	const createPanelsRefs = (panel, index) => {
		panels.current[index] = panel;
	};

	const createNavRefs = (nav, index) => {
		navs.current[index] = nav;
	};

	const getTime = (start, end) => {
		let sum = 0;
		if (Math.max(start, end) === end) {
			for (let i = start; i <= end; i++)
				sum += panelLength[i];
			sum -= panelLength[end];
		}
		else {
			for (let i = start; i >= end; i--)
				sum += panelLength[i];
			sum -= panelLength[start];
		}
		return sum;
	}

	const scrollToElm = (index) => {
		console.log(index, pos.current, getTime(pos.current, index));
		if (locoRef) {
			locoRef.current.scrollTo(panels.current[index].offsetTop, { duration: 650 * getTime(pos.current, index), easing: [0.42, 0.0, 0.58, 1.0], offset: index === 0 ? 0 : index === 5 ? 50 : 100 });
			// pos.current = index;
		}
	}


	useEffect(() => {



		// 	navs.current.forEach((nav, i) => {
		// 		ScrollTrigger.create({
		// 			trigger: panels.current[i],
		// 			start: 'top 70%',
		// 			end: 'bottom 70%',
		// 			onEnter: () => {
		// 				gsap.to(navs.current[i], {
		// 					color: '#456EFF',
		// 					fontWeight: 700,
		// 					overwrite: "auto",
		// 					duration: .250
		// 				});
		// 				if (i === 3) {
		// 					gsap.to(navs.current[1], {
		// 						color: '#555555',
		// 						fontWeight: 600,
		// 						overwrite: "auto",
		// 						duration: .250
		// 					});
		// 				}

		// 			},
		// 			onLeave: () =>
		// 				gsap.to(navs.current[i], {
		// 					color: i === 1 ? '#456EFF' : '#555555',
		// 					fontWeight: i === 1 ? 700 : 600,
		// 					overwrite: "auto",
		// 					duration: .250
		// 				}),
		// 			onEnterBack: () => {
		// 				gsap.to(navs.current[i], {
		// 					color: '#456EFF',
		// 					fontWeight: 700,
		// 					overwrite: "auto",
		// 					duration: .250
		// 				})
		// 			},
		// 			onLeaveBack: () => {
		// 				gsap.to(navs.current[i], {
		// 					color: '#555555',
		// 					fontWeight: 600,
		// 					overwrite: "auto",
		// 					duration: .250
		// 				})
		// 				if (i === 3) {
		// 					gsap.to(navs.current[1], {
		// 						color: '#456EFF',
		// 						fontWeight: 700,
		// 						overwrite: "auto",
		// 						duration: .250
		// 					});
		// 				}
		// 			},

		// 		}
		// 		);
		// 	});

		// 	// const state = location.state;
		// 	// if (state) {
		// 	// 	switch (state.scrollTo) {
		// 	// 		case 'welcome':
		// 	// 			locoScroll.current.scrollTo(panels.current[0], { disableLerp: true, duration: 0, offset: 0 });
		// 	// 			break;
		// 	// 		case 'ui':
		// 	// 			locoScroll.current.scrollTo(panels.current[1], { disableLerp: true, duration: 0, offset: 100 });
		// 	// 			break;
		// 	// 		case 'ux':
		// 	// 			locoScroll.current.scrollTo(panels.current[2], { disableLerp: true, duration: 0, offset: 100 });
		// 	// 			break;
		// 	// 		case 'motion':
		// 	// 			locoScroll.current.scrollTo(panels.current[3], { disableLerp: true, duration: 0, offset: 100 });
		// 	// 			break;
		// 	// 		case 'branding':
		// 	// 			locoScroll.current.scrollTo(panels.current[4], { disableLerp: true, duration: 0, offset: 100 });
		// 	// 			break;
		// 	// 		case 'model':
		// 	// 			locoScroll.current.scrollTo(panels.current[5], { disableLerp: true, duration: 0, offset: 50 });
		// 	// 			break;
		// 	// 		default:
		// 	// 			break;
		// 	// 	}
		// 	// 	window.history.replaceState({}, document.title)
		// 	// }

		// return ()=>{
		// 	if(scroll)
		// 		scroll.dedtroy();
		// }

	}, []);

	const loco = (scroll) => {
		if (scroll && !locoRef.current) {
			locoRef.current = scroll;
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

			navs.current.forEach((nav, i) => {
				ScrollTrigger.create({
					trigger: panels.current[i],
					scroller: panelsContainer.current,
					start: 'top 70%',
					end: 'bottom 70%',
					onEnter: () => {
						gsap.to(navs.current[i], {
							color: '#456EFF',
							fontWeight: 700,
							overwrite: "auto",
							duration: .250
						});
						if (i === 3) {
							gsap.to(navs.current[1], {
								color: '#555555',
								fontWeight: 600,
								overwrite: "auto",
								duration: .250
							});
						}
					},
					onLeave: () =>
						gsap.to(navs.current[i], {
							color: i === 1 ? '#456EFF' : '#555555',
							fontWeight: i === 1 ? 700 : 600,
							overwrite: "auto",
							duration: .250
						}),
					onEnterBack: () => {
						gsap.to(navs.current[i], {
							color: '#456EFF',
							fontWeight: 700,
							overwrite: "auto",
							duration: .250
						});
					},
					onLeaveBack: () => {
						gsap.to(navs.current[i], {
							color: '#555555',
							fontWeight: 600,
							overwrite: "auto",
							duration: .250
						})
						if (i === 3) {
							gsap.to(navs.current[1], {
								color: '#456EFF',
								fontWeight: 700,
								overwrite: "auto",
								duration: .250
							});
						}
					},

				}
				);
			});

			ScrollTrigger.create({
				trigger: panels.current[6],
				scroller: panelsContainer.current,
				start: 'top 70%',
				end: 'bottom 70%',
				onEnter: () => {
					gsap.to(links.current, {
						opacity: 0,
						overwrite: "auto",
						duration: 1
					});

				},
				onLeaveBack: () => {
					gsap.to(links.current, {
						opacity: 1,
						overwrite: "auto",
						duration: 1
					})
				},

			}
			);

			panels.current.forEach((nav, i) => {
				ScrollTrigger.create({
					trigger: panels.current[i],
					scroller: panelsContainer.current,
					start: 'top 70%',
					end: 'bottom 70%',
					onEnter: () => {
						pos.current = i;
						console.log(pos.current);
					},
					onEnterBack: () => {
						pos.current = i;
						console.log(pos.current);
					},
				}
				);
			});
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
			<div className="home" ref={panelsContainer} data-scroll-container >
				<div className="main-container">
					{/* <div className="sidebar-dummy"></div> */}
					<div className="sidebar" >
						<Link className="logo" to='/'>
							<img src={logo} width="70px" alt="" />
						</Link>
					</div>

					<main id='container' className="main"  >
						<div ref={(e) => createPanelsRefs(e, 0)} id="welcome"><Welcome /></div>
						<div ref={(e) => createPanelsRefs(e, 1)} id="ui" ><WebUI containerRef={panelsContainer} /></div>
						<div ref={(e) => createPanelsRefs(e, 2)} id="ux"><WebUX containerRef={panelsContainer} /></div>
						<div ref={(e) => createPanelsRefs(e, 3)} id="motion"><Motion /></div>
						<div ref={(e) => createPanelsRefs(e, 4)} id="branding"><Branding /></div>
						<div ref={(e) => createPanelsRefs(e, 5)} id="model"><Modeling /></div>
						<div ref={(e) => createPanelsRefs(e, 6)} id="thanks"><Thanks /></div>
					</main>

					<div className="hamburger">
						<img src={hamburger} className="hamburger-icon" width="30px" alt="" />
					</div>
					<div className="links" ref={links}>
						<div className="nav">
							<div className='nav--item menu' ref={(e) => createNavRefs(e, 0)} onClick={(e) => scrollToElm(0)}><span>Welcome</span></div>
							<div className="nav--item menu" ref={(e) => createNavRefs(e, 1)} onClick={(e) => scrollToElm(1)}>UI/UX Design</div>
							<div className="nav--item menu" ref={(e) => createNavRefs(e, 3)} onClick={(e) => scrollToElm(3)}>Motion Design</div>
							<div className="nav--item menu" ref={(e) => createNavRefs(e, 4)} onClick={(e) => scrollToElm(4)}>Branding</div>
							<div className="nav--item menu" ref={(e) => createNavRefs(e, 5)} onClick={(e) => scrollToElm(5)}>3D Modeling</div>
						</div>
						<div className="social">
							<div className="social--item social--item-1"><a href='https://www.facebook.com/jaedalzaber'><img src={fb} alt=""/></a></div>
							<div className="social--item social--item-2"><a href='https://www.instagram.com/jaedalzaber'><img src={insta} alt="" /></a></div>
							<div className="social--item social--item-3"><a href='https://twitter.com/JaedZaber'><img src={twitter} alt="" /></a></div>
							<div className="social--item social--item-4"><a href='https://github.com/jaedalzaber'><img src={linkedin} alt="" /></a></div>
							<div className="social--item social--item-5"><a href='mailto:jaedalzaber@gmail.com'><img src={mail} alt="" /></a></div>
						</div>
					</div>
				</div>
			</div>
		</LocomotiveScrollProvider>
	);
}

