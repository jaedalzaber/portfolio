import styles from './Slider.module.scss'

import SliderItem from './SliderItem'
import React, { useRef, useImperativeHandle } from 'react';
import { gsap, Power3 } from "gsap";

const Slider = React.forwardRef((props, ref) => {
	const slider = useRef();
	
	const slideToIndex = (index) => {
		gsap.to(
			slider.current,
			{
				duration: 1.5,
				x: `-${(slider.current.clientWidth * .36 + 50) * index }`,
				ease: Power3.easeInOut
			}
		);

	}

	useImperativeHandle(ref, () => {
		return {
			slideToIndex: slideToIndex
		}
	}); 

	return (
		<div className={styles.slider} ref={slider}>
			{
				props.slides.map((item, index) =>
					<SliderItem
						i={index}
						index={`0${index + 1}`}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						key={`slideritem_${index}`} />
				)
			}
		</div>
	);
});

export default Slider;