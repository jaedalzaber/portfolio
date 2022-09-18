import styles from './SeeMoreBtn.module.scss'

function SeeMoreBtn() {
	return (
		<button className={styles['see-more--btn']}>
			<span className={styles['see-more--text']}>see more</span>
			<svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.686646 9.675H34.2159M34.2159 9.675L25.3346 0.793701M34.2159 9.675L25.3346 18.5563" stroke="#456EFF" strokeWidth="2" />
			</svg>
		</button>
	);
}

export default SeeMoreBtn;