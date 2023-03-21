import React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.css';
import ImgItem from './media/IMAGE.png';

export default function MainPage() {
	const categories = useSelector((state) => state.categories);

	return (
		<div>
			{categories.map((item) => (
				<p key={item}>{item}</p>
			))}
			<div className={s.wrapper}>
				<div className={s.container}>
					<div>
						<p className={s.title}>- Welcome to Pages!!!</p>
						<h1>Your Books From The Best Writer.</h1>
						<p className={s.text}>
							We believe that reading books are essential to a healthy culture.
						</p>
						<p className={s.text}>
							They’re where authors can connect with readers.
						</p>
					</div>
					<div className={s.btns}>
						<button className={s.btn}>Order Today</button>
						<button className={s.btn2}>Read Free Demo</button>
					</div>
					<div className={s.table}>
						<div>
							<div className={s.item}>
								<div className={s.circle}></div>
								<p> Pages:</p>
							</div>
							<p>250pages</p>
						</div>
						<div>
							<div className={s.item}>
								<div className={s.circle}></div>
								<p> Length</p>
							</div>
							<p>10Hours</p>
						</div>
						<div>
							<div className={s.item}>
								<div className={s.circle}></div>
								<p>Rating:</p>
							</div>
							<p>4.5/5(305 ratings)</p>
						</div>
					</div>
				</div>

				<div className={s.image}>
					<img src={ImgItem} alt='bild' />
				</div>
			</div>
		</div>
	);
}
