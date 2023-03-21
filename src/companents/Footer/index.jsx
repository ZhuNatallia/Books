import React from 'react';
import s from './style.module.css';
import ImgLogo from './media/logo.png';
import ImgItem from './media/img.png';
import ImgItem2 from './media/img2.png';
import ImgItem3 from './media/img3.png';
import ImgItem4 from './media/img4.png';
import Punkt from './media/Vector.png';

export default function Footer() {
	return (
		<div className={s.footer}>
			<div className={s.wrapper_logo}>
				<div className={s.logo}>
					<div className={s.logoimg}>
						<img src={ImgLogo} alt='logo' />
					</div>
					<div className={s.logotext}>Pages</div>
				</div>
				<div className={s.socials}>
					<div>
						<img src={ImgItem} alt='logo' />
					</div>
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
			<div className={s.explore}>
				<h3>Explore</h3>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Home
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					About
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Articles
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Our Store
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Contact Us
				</p>
			</div>
			<div className={s.utility}>
				<h3>Utility Pages</h3>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Style Guide
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					404 Not Found
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Password Protected
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Licenses
				</p>
				<p>
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					<img src={Punkt} alt='logo' />
					Changelog
				</p>
			</div>
			<div className={s.contact}>
				<h3>Keep in Touch</h3>
				<p>Address : 24A Kingston St, Los Vegas</p>
				<p>NC 28202, USA.</p>
				<p>Mail : support@pages.com</p>
				<p>Phone : (+22) 123 - 4567 - 900</p>
			</div>
		</div>
	);
}
