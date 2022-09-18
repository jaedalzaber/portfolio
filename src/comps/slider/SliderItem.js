import styles from './Slider.module.scss';

import SeeMoreBtn from '../../comps/buttons/seemore/SeeMoreBtn';
import { Link } from 'react-router-dom';

function SliderItem(props) {
	return (
		<div className={styles['slide-item']}>
			<p className={styles['slide-item--index']}>{props.index}</p>
			<p className={styles['slide-item--title']}>{props.title}</p>
			<p className={styles['slide-item--subtitle']}>{props.subtitle}</p>
			<Link to={`/webdesign/${props.i}`}  style={{ textDecoration: 'none' }}><img className={styles['slide-item--image']} src={props.image} alt='' /></Link>
			
			<Link to={`/webdesign/${props.i}`}  style={{ textDecoration: 'none' }}><SeeMoreBtn /></Link>
		</div>
	);
}

export default SliderItem;