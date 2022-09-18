import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'

const useLocoScroll = (start) => {
	
	useEffect(() => {
		new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			multiplier: 1,
		});
	}, [start]);
}

export default useLocoScroll;