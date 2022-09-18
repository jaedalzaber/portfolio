import styles from './Paginator.module.scss';
import React, { useEffect, useImperativeHandle, useState } from 'react';

let ArrowRight = process.env.PUBLIC_URL +  '/assets/svg/arrow-r.svg';
let ArrowLeft  = process.env.PUBLIC_URL +  '/assets/svg/arrow-l.svg';

const Paginator = React.forwardRef((props, ref) => {
	let [index, setCurrent] = useState(props.index);


	useEffect(() => {
	}, [props.index]);

	const onNext = () => {
		if(props.slider)
			props.slider.current.slideToIndex(index+1);
		setCurrent(index + 1);
	};

	const onPrev = () => {
		if(props.slider)
			props.slider.current.slideToIndex(index-1);
		setCurrent(index - 1);
	};

	useImperativeHandle(ref, () => {
		return {
			onNext: onNext,
			onPrev: onPrev,
			index: index
		}
	}); 

	return (
		<div className={styles.paginator}>
			{props.arrow && <button className={styles['arrow-btn']} onClick={onPrev} disabled={index < 1}><img className={styles['arrow-icon']} src={ArrowLeft} alt='' /></button>}
			
			{[...Array(props.count)].map((x, i) =>
				<svg key={`pag_${i}`} height="20" width="20" className={`${styles.rect} ${index === i && styles.dot__active}`} >
					<rect className={`${styles.rect} ${index === i && styles.rect__active} `}
						x="8" y="2" rx="5" ry="5" width="10" height="10" />
				</svg>
			)}

			{props.arrow && <button className={styles['arrow-btn']} onClick={onNext} disabled={index >= props.count-1
			}><img className={styles['arrow-icon']} src={ArrowRight} alt='' /></button>}
		</div>
	);
})

export default Paginator;

