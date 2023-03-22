import React from 'react';
import s from './style.module.css';
import Logo from './media/IMAGE.png';
import Logo2 from './media/IMAGE (1).png';
import Logo3 from './media/IMAGE (2).png';
import Logo4 from './media/IMAGE (3).png';
import Linia from './media/Rectangle (1).png';
import Photo from './media/IMAGE (4).png';

export default function CompaniesPage() {
	return (
		<div>
			<h2>Trusted By The Best</h2>
			<div className={s.about}>
				<div className={s.about_teil}>
					<img src={Logo} alt='Logo' />
					<p className={s.about_title}>Amazen Corp.</p>
					<p className={s.text}>
						They has been helping readers, music lovers, and videophiles find
						quality material.
					</p>
				</div>
				<div className={s.about_teil}>
					<img src={Logo2} alt='Logo2' />
					<p className={s.about_title}>Megan Books</p>
					<p className={s.text}>
						We help physical bookstores manage their overstock to the book
						inventory.
					</p>
				</div>
				<div className={s.about_teil}>
					<img src={Logo3} alt='Logo3' />
					<p className={s.about_title}>Megank</p>
					<p className={s.text}>
						Bookstore serving up the full spectrum of Black literature and wine
						black books.
					</p>
				</div>
				<div className={s.about_teil}>
					<img src={Logo4} alt='Logo4' />
					<p className={s.about_title}>Urban Store</p>
					<p className={s.text}>
						We also carry the latest records, issues of all of your favorite
						comic books.
					</p>
				</div>
			</div>
			<div className={s.about_blue}>
				<div>
					<h2>Get Book Copy Today!</h2>
					<img src={Linia} alt='linia' />
					<p className={s.text}>
						We believe that bookstores are essential to a healthy culture.
						They’re where authors can connect with readers.
					</p>
				</div>
				<div>
					<img src={Photo} alt='photo' />
				</div>
			</div>
		</div>
	);
}
