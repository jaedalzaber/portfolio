import styles from './Thanks.module.scss'
import React from 'react'

const Thanks = React.forwardRef((props, ref) => {
	return (
		<div className={styles['container']} data-scroll-section>
			<div className={styles['grid']}>
				<div className={`${styles['grid--item']} ${styles['grid--item-0']} `}></div>

				<div className={`${styles['grid--item']} ${styles['grid--item-1']} `}>
					<span className={styles['title-bold']} >Thank<br />You<span className={styles['title-blue']} >!</span></span>
				</div>

				<div className={`${styles['grid--item']} ${styles['grid--item-2']} `}>
					<div className={styles['icon']} >
						<div className={styles['icon-item']} >
							<a href='https://www.facebook.com/jaedalzaber'>
								<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M17.8418 4.43339C17.8418 4.15049 17.6168 3.9209 17.3418 3.9209H14.8418C12.0798 3.9209 9.8418 5.98624 9.8418 8.53333V11.3008H7.3418C7.0658 11.3008 6.8418 11.5304 6.8418 11.8133V14.4782C6.8418 14.7611 7.0658 14.9907 7.3418 14.9907H9.8418V21.8581C9.8418 22.141 10.0658 22.3706 10.3418 22.3706H13.3418C13.6168 22.3706 13.8418 22.141 13.8418 21.8581V14.9907H16.4608C16.6858 14.9907 16.8828 14.837 16.9438 14.6156L17.6648 11.9506C17.7538 11.6247 17.5138 11.3008 17.1838 11.3008H13.8418V8.53333C13.8418 8.02391 14.2888 7.61084 14.8418 7.61084H17.3418C17.6168 7.61084 17.8418 7.38124 17.8418 7.09835V4.43339Z" fill="#373737" />
									<mask id="mask0_1386_290" maskUnits="userSpaceOnUse" x="6" y="3" width="12" height="20">
										<path fillRule="evenodd" clipRule="evenodd" d="M17.8418 4.43339C17.8418 4.15049 17.6168 3.9209 17.3418 3.9209H14.8418C12.0798 3.9209 9.8418 5.98624 9.8418 8.53333V11.3008H7.3418C7.0658 11.3008 6.8418 11.5304 6.8418 11.8133V14.4782C6.8418 14.7611 7.0658 14.9907 7.3418 14.9907H9.8418V21.8581C9.8418 22.141 10.0658 22.3706 10.3418 22.3706H13.3418C13.6168 22.3706 13.8418 22.141 13.8418 21.8581V14.9907H16.4608C16.6858 14.9907 16.8828 14.837 16.9438 14.6156L17.6648 11.9506C17.7538 11.6247 17.5138 11.3008 17.1838 11.3008H13.8418V8.53333C13.8418 8.02391 14.2888 7.61084 14.8418 7.61084H17.3418C17.6168 7.61084 17.8418 7.38124 17.8418 7.09835V4.43339Z" fill="white" />
									</mask>
									<g mask="url(#mask0_1386_290)">
									</g>
								</svg>
							</a>
						</div>
						<div className={styles['icon-item']} >
							<a href='https://www.instagram.com/jaedalzaber'>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.07289 0.445312C2.47521 0.445312 0.361816 2.5587 0.361816 5.15639V12.6941C0.361816 15.2918 2.47521 17.4052 5.07289 17.4052H12.6106C15.2083 17.4052 17.3217 15.2918 17.3217 12.6941V5.15639C17.3217 2.5587 15.2083 0.445312 12.6106 0.445312H5.07289ZM5.07289 2.32974H12.6106C14.169 2.32974 15.4373 3.59796 15.4373 5.15639V12.6941C15.4373 14.2525 14.169 15.5208 12.6106 15.5208H5.07289C3.51447 15.5208 2.24625 14.2525 2.24625 12.6941V5.15639C2.24625 3.59796 3.51447 2.32974 5.07289 2.32974ZM13.5528 3.27196C13.3029 3.27196 13.0633 3.37123 12.8866 3.54793C12.7099 3.72463 12.6106 3.96428 12.6106 4.21417C12.6106 4.46406 12.7099 4.70372 12.8866 4.88042C13.0633 5.05712 13.3029 5.15639 13.5528 5.15639C13.8027 5.15639 14.0424 5.05712 14.2191 4.88042C14.3958 4.70372 14.495 4.46406 14.495 4.21417C14.495 3.96428 14.3958 3.72463 14.2191 3.54793C14.0424 3.37123 13.8027 3.27196 13.5528 3.27196ZM8.84175 4.21417C6.24407 4.21417 4.13068 6.32756 4.13068 8.92525C4.13068 11.5229 6.24407 13.6363 8.84175 13.6363C11.4394 13.6363 13.5528 11.5229 13.5528 8.92525C13.5528 6.32756 11.4394 4.21417 8.84175 4.21417ZM8.84175 6.0986C10.4002 6.0986 11.6684 7.36683 11.6684 8.92525C11.6684 10.4837 10.4002 11.7519 8.84175 11.7519C7.28333 11.7519 6.01511 10.4837 6.01511 8.92525C6.01511 7.36683 7.28333 6.0986 8.84175 6.0986Z" fill="#373737" />
								</svg>
							</a>
						</div>
						<div className={styles['icon-item']} >
							<a href='https://twitter.com/JaedZaber'>
								<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M8.91873 20.9049C16.1647 20.9049 20.3567 15.1383 20.3567 9.66596C20.3567 9.51529 21.3867 8.6092 21.8277 6.72015C21.9177 6.33681 21.5537 6.03444 21.2107 6.19536C20.3307 6.60946 19.4377 6.28146 19.0497 5.80997C17.5577 4.14232 15.0627 4.06237 13.4757 5.6306C12.4527 6.64226 12.0187 8.14898 12.3357 9.58703C8.98473 9.83201 6.68373 8.20433 4.79173 5.97294C4.54773 5.68287 4.09473 5.83559 4.04373 6.21894C3.76373 8.35295 3.67573 13.5414 8.69173 16.521C7.82073 17.8043 6.11573 18.5618 4.21773 18.8867C3.79773 18.9595 3.69773 19.556 4.08173 19.7487C5.58573 20.5072 7.23873 20.9039 8.91873 20.9018" fill="#373737" />
									<mask id="mask0_1386_291" maskUnits="userSpaceOnUse" x="3" y="4" width="19" height="17">
										<path fillRule="evenodd" clipRule="evenodd" d="M8.91873 20.9049C16.1647 20.9049 20.3567 15.1383 20.3567 9.66596C20.3567 9.51529 21.3867 8.6092 21.8277 6.72015C21.9177 6.33681 21.5537 6.03444 21.2107 6.19536C20.3307 6.60946 19.4377 6.28146 19.0497 5.80997C17.5577 4.14232 15.0627 4.06237 13.4757 5.6306C12.4527 6.64226 12.0187 8.14898 12.3357 9.58703C8.98473 9.83201 6.68373 8.20433 4.79173 5.97294C4.54773 5.68287 4.09473 5.83559 4.04373 6.21894C3.76373 8.35295 3.67573 13.5414 8.69173 16.521C7.82073 17.8043 6.11573 18.5618 4.21773 18.8867C3.79773 18.9595 3.69773 19.556 4.08173 19.7487C5.58573 20.5072 7.23873 20.9039 8.91873 20.9018" fill="white" />
									</mask>
									<g mask="url(#mask0_1386_291)">
									</g>
								</svg>
							</a>
						</div>
						<div className={styles['icon-item']} >
							<a href='https://github.com/jaedalzaber'>
								<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.71101 0.993164C1.48589 0.993164 0.750977 1.72962 0.750977 2.71029C0.750977 3.69095 1.48598 4.42461 2.58816 4.42461C3.81327 4.42461 4.54819 3.69095 4.54819 2.71029C4.54819 1.72962 3.81318 0.993164 2.71101 0.993164ZM0.848699 6.259V16.2658H4.45605V6.259H0.848699ZM7.43239 6.259V16.2658H11.0397V10.7961C11.0397 9.16787 12.2014 8.9338 12.5503 8.9338C12.8991 8.9338 13.8318 9.28366 13.8318 10.7961V16.2658H17.3219V10.7961C17.3219 7.65542 15.9263 6.259 14.1808 6.259C12.4354 6.259 11.5043 6.8402 11.0397 7.65504V6.259H7.43239Z" fill="#373737" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className={`${styles['grid--item']} ${styles['grid--item-3']} `}>
					<p><span className={styles['bold']} >Thank you</span> so much for coming this <span className={styles['bold']} >far</span> with me! This <br /><span className={styles['bold']} >means</span> a lot to me . I hope you <span className={styles['bold']} >enjoyed</span> my works as <br />much as I enjoyed <span className={styles['bold']} >making</span> them.</p>

					<p>Wanna grab a cup of <span className={styles['bold']} >coffee</span> with me? Say <span className={styles['bold']} >Hi</span> on my <br /><span className={styles['bold']} >facebook</span> or send me an <span className={styles['bold']} >email</span>. </p>

					<p>I’m always <span className={styles['bold']} >online!</span></p>
				</div>

				<div className={`${styles['grid--item']} ${styles['grid--item-4']} `}>
					<div className={styles['info']} >
						<p className={styles['bold']}>Jaed Al Zaber</p>
						<p>Dhaka, Bangladesh</p>
					</div>
					<div className={styles['info']} >
						<p>+880-1886626070</p>
						<p>jaedzaber@gmail.com</p>
					</div>
				</div>

			</div>
		</div>
	);
})

export default Thanks;

