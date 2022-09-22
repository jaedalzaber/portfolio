import styles from './Modeling.module.scss'
import React from 'react';
import SeeMoreBtnXL from '../../../comps/buttons/seemore_xl/SeeMoreBtnXL';
import { Link } from 'react-router-dom';

const Modeling = React.forwardRef((props, ref) => {
	return (
		<div className={`${styles['grid']} `} data-scroll-section>
			<div className={`${styles['grid--item']} ${styles['grid--item-1']} `}>
				<div className={styles['motion--header']}>
					<div className={styles.model_title}>
						<span className={styles.model_title__light}>3D Modeling &</span><br />
						<span className={styles.model_title__bold}>Product Visualisation</span>
					</div>
					<div className={styles['header-icon']}>
						<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.04015 11.7623C3.04809 3.19614 11.3842 -1.55208 20.3842 1.44792C23.0775 3.64835 19.2405 4.5917 15.2362 5.44977C11.6103 6.22676 7.10374 7.62534 4.41019 12.0175C1.71663 16.4097 2.90801 20.9377 6.69149 24.2011C10.475 27.4644 15.348 27.3091 18.396 25.2371C22.8458 22.2121 24.4496 17.5658 24.8151 13.6978C25.1806 9.82979 27.3966 6.41022 28.6914 9.51772C31.1914 15.5177 28.5715 24.3091 21.5715 27.3091C14.5715 30.3091 8.69147 27.5177 6.69149 26.0177C3.96375 23.9719 -0.620145 18.8454 1.04015 11.7623Z" fill="#A2B7FF" />
							<path d="M13.4973 6.55368C17.5505 5.71409 22.2519 5.73784 21.844 2.47449C23.5698 3.30079 26.0173 4.67098 27.2411 7.55779C24.1032 8.15398 24.2287 12.547 23.6012 15.7162C23.0991 18.2515 21.2473 21.2911 20.3842 22.4939C18.8207 22.9332 14.4561 23.4191 10.6419 20.3288C6.69149 17.1282 6.31168 12.3273 7.1589 9.75428C7.92065 8.9882 10.1284 7.25153 13.4973 6.55368Z" fill="#A2B7FF" />
						</svg>

						<svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.7329 16.8371C18.7969 15.6522 19.3557 14.6083 20.1987 13.8683C21.0255 13.1415 22.1383 12.6973 23.3524 12.6973C24.5654 12.6973 25.6781 13.1415 26.5055 13.8683C27.3479 14.6083 27.9067 15.6522 27.9713 16.8358C28.0352 18.0533 27.564 19.1842 26.7372 20.0226C25.8942 20.8754 24.6951 21.4105 23.3524 21.4105C22.0097 21.4105 20.8082 20.8754 19.9658 20.0226C19.1385 19.1842 18.6684 18.0533 18.7329 16.8371V16.8371Z" fill="#A2B7FF" />
							<path d="M11.3769 19.3627C11.3847 19.8263 11.5271 20.7274 11.7408 21.431C12.1897 22.9204 12.9513 24.2982 14.0109 25.5125C15.0984 26.7607 16.4374 27.7632 17.9841 28.475C19.6098 29.2225 21.3712 29.6035 23.2009 29.6003C25.0276 29.5978 26.789 29.2093 28.4147 28.4562C29.9614 27.7375 31.2992 26.7306 32.3848 25.4818C33.4439 24.2625 34.2042 22.8822 34.6544 21.3928C34.8807 20.6403 35.0237 19.8765 35.0811 19.1102C35.1372 18.3551 35.1136 17.5989 35.0105 16.8432C34.8089 15.3708 34.3183 13.9891 33.5628 12.7297C32.8718 11.5724 31.9811 10.5593 30.9221 9.7065L30.9245 9.70463L20.2367 1.18379C20.2271 1.17627 20.2193 1.16814 20.209 1.16125C19.5078 0.602341 18.3286 0.604224 17.5574 1.16438C16.7778 1.73081 16.6885 2.66753 17.3824 3.25839L17.3794 3.26153L21.8371 7.02539L8.2504 7.04042H8.23229C7.10927 7.04167 6.0297 7.80671 5.81607 8.77352C5.59642 9.7585 6.35918 10.5756 7.52685 10.5799L7.52505 10.5843L14.4116 10.5706L2.12295 20.3646C2.10726 20.3765 2.09036 20.389 2.07587 20.4009C0.916644 21.3226 0.541909 22.8552 1.27209 23.8252C2.01312 24.8114 3.58874 24.8133 4.76003 23.8308L11.4668 18.1314C11.4668 18.1314 11.369 18.9009 11.3769 19.3627V19.3627ZM28.6108 21.9392C27.2289 23.401 25.2943 24.2299 23.2009 24.2343C21.1045 24.2381 19.1698 23.4166 17.7879 21.9573C17.1127 21.2462 16.6166 20.4279 16.3107 19.5563C16.0108 18.6998 15.8943 17.7906 15.9716 16.8733C16.0446 15.9767 16.3016 15.1214 16.712 14.3475C17.1151 13.5869 17.6703 12.8995 18.3558 12.3181C19.6991 11.1815 21.4093 10.5662 23.1979 10.5637C24.9883 10.5611 26.6973 11.1708 28.0418 12.3037C28.7261 12.8826 29.2807 13.5675 29.6838 14.3269C30.0959 15.1001 30.3512 15.9522 30.4272 16.8514C30.5033 17.7674 30.3868 18.6753 30.0869 19.5325C29.7803 20.4066 29.2861 21.2249 28.6108 21.9392V21.9392Z" fill="#A2B7FF" />
						</svg>

					</div>
				</div>
			</div>
			<div className={`${styles['grid--item']} ${styles['grid--item-2']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-3']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-4']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-5']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-6']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-7']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-8']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-9']} `}/>
			<div className={`${styles['grid--item']} ${styles['grid--item-10']} `}>
				<Link to="/portfolio/modeling"  style={{ textDecoration: 'none' }}><SeeMoreBtnXL/></Link>
			</div>
		</div>
	);
})

export default Modeling;