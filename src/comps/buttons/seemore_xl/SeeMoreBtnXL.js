import styles from './SeeMoreBtnXL.module.scss'

function SeeMoreBtn() {
	return (
		<button className={styles['see-more--btn']}>
			<span className={styles['see-more--text']}>see more</span>
			<svg width="58" height="32" viewBox="0 0 58 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.629395 16.1699H55.2896M55.2896 16.1699L40.8111 1.69141M55.2896 16.1699L40.8111 30.6484" stroke="white" strokeWidth="3" />
			</svg>

		</button>
	);
}

export default SeeMoreBtn;