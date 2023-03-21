import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import ImgItem from './media/img.png'
import ImgItem2 from './media/img2.png';
import ImgItem3 from './media/img3.png';
import ImgItem4 from './media/img4.png';

export default function Nav() {
	const links = [
		{ id: 1, label: 'Home', to: '/' },
		{ id: 2, label: 'Author', to: '/about' },
		{ id: 3, label: 'Companies', to: '/companies' },
		{ id: 4, label: 'Articles', to: '/articles' },
	];

	const isActive = ({ isActive }) => (isActive ? s.active : '');

	return (
		<nav className={s.nav}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<div className={s.logoimg}>
						<img src={ImgItem} alt='logo' />
					</div>
					<div className={s.logotext}>Pages</div>
				</div>
				<div className={s.socials}>
					<div>
						<img src={ImgItem2} alt='logo' />
					</div>
					<div>
						<img src={ImgItem3} alt='logo' />
					</div>
					<div>
						<img src={ImgItem4} alt='logo' />
					</div>
				</div>
			</div>
			<div className={s.links}>
				{links.map(({ id, label, to }) => (
					<NavLink className={isActive} key={id} to={to}>
						{label}
					</NavLink>
				))}
			</div>

			<button className={s.btn}>Order Today</button>
		</nav>
	);
}
