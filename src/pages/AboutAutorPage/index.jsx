import React from 'react';
import s from './style.module.css';
import Book from './media/book.png';
import Book2 from './media/book2.png';
import Circle from './media/circle.png';
import Author from './media/IMAGE.png';
import Box from './media/Rectangle 1.png';
import Lien from './media/Rectangle 2.png';
import Key from './media/IMAGE 1.png';

export default function AboutAutorPage() {
	return (
		<div className={s.about}>
			<h2>The Author’s Book</h2>
			<div className={s.books}>
				<div className={s.book}>
					<img src={Book} alt='photo book' />
				</div>
				<div className={s.description}>
					<h4>Atomic One’s</h4>
					<p className={s.number}>$ 13.84 USD</p>
					<p className={s.text}>
						As the book contains theoretical content as well as solved
						questions.
					</p>
					<div className={s.circle_text}>
						<img src={Circle} alt='logo' />
						Printed Book
					</div>
				</div>
				<div className={s.book}>
					<img src={Book2} alt='photo book' />
				</div>
				<div className={s.description}>
					<h4>The Dark Light</h4>
					<p className={s.number}>$ 86.11 USD</p>
					<p className={s.text}>
						As the book contains theoretical content as well as solved
						questions.
					</p>
					<div className={s.circle_text}>
						<img src={Circle} alt='logo' />
						Printed Book
					</div>
				</div>
			</div>
			<div className={s.author}>
				<div className={s.author_fhoto}>
					<img className={s.avatar} src={Author} alt='author' />
					<img src={Box} alt='author' />
				</div>
				<div className={s.author_statistic}>
					<h4>About the Author</h4>
					<img src={Lien} alt='grafica' />

					<p className={s.text}>
						We believe that bookstores are essential to a healthy culture.
						They’re where authors can connect with readers, where we discover
						new writers, where children get hooked on the thrill of reading that
						can last a lifetime.
					</p>
					<div className={s.statistic}>
						<p className={s.num}>02</p>
						<p className={s.num}>4.5</p>
						<p className={s.num}>0.4</p>
						<p className={s.text}>Books Published</p>
						<p className={s.text}>User Reviews</p>
						<p className={s.text}>Best Seller Awards</p>
					</div>
					<div className={s.blue_box}>
						<img src={Key} alt='key' />
						<div className={s.contact}>
							<h6>John Abraham , Ph.d</h6>
							<p className={s.text}>Mail: johnabraham@gmail.com</p>
							<p className={s.text}>Phone: (+2) 123 545 9000</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
