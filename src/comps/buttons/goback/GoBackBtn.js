import styles from './GoBackBtn.module.scss'

function GoBackBtn() {
	return (
		<button className={styles['go-back--btn']}>
			<svg className={styles['arrow-left-svg']}  width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M35.6836 10.1307L2.15429 10.1307M2.15429 10.1307L11.0356 19.012M2.15429 10.1307L11.0356 1.24936" stroke="#CDD0DF" strokeWidth="2" />
			</svg>

			<span className={styles['go-back--text']}>go back</span>
		</button>
	);
}

export default GoBackBtn;