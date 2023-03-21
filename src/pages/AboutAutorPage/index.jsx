import React from 'react'
import s from './style.module.css'
import Book from './media/book.png'
import Book2 from './media/book2.png'
import Circle from './media/circle.png';

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

      </div>
		</div>
	);
}
