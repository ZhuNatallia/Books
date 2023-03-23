import React from 'react';
import s from './style.module.css';
import Photo from './media/IMAGE.png';
import Rectangle from './media/Rectangle (1).png';
import Photo1 from './media/IMAGE (1).png';
import Photo2 from './media/IMAGE (2).png';
import Photo3 from './media/IMAGE (3).png';

export default function ArticlesPage() {
	return (
		<div>
			<h2>What Will You Learn?</h2>
			<div className={s.articles}>
				<div className={s.box_container}>
					<div className={s.box}>
						<div className={s.gelb_circle}>01</div>
						<p className={s.text}>
							Use HDFS & Map Reduce for storing & analyzing data at scale.
						</p>
					</div>
					<div className={s.box}>
						<div className={s.gelb_circle}>02</div>
						<p className={s.text}>
							Consume streaming data using Spark Streaming, Flink, and Storm.
						</p>
					</div>
					<div className={s.box}>
						<div className={s.gelb_circle}>03</div>
						<p className={s.text}>
							Choose an appropriate data storage technology for your application
						</p>
					</div>
					<div className={s.box}>
						<div className={s.gelb_circle}>04</div>
						<p className={s.text}>
							Analyze non-relational data using HBase, Cassandra, and MongoDB.
						</p>
					</div>
				</div>
				<div className={s.photo_box}>
					<img className={s.photo} src={Photo} alt='Photo' />
					<img className={s.rectangle} src={Rectangle} alt='Rectangle' />
				</div>
			</div>
			<div className={s.articles_gray}>
				<h2>Articles & Resources</h2>
				<div className={s.wrapper_card}>
					<div className={s.card}>
						<img src={Photo1} alt='avatar' />
						<h5>Significant reading has more info number</h5>
						<p className={s.text}>
							Override the digital divide with additional clickthroughs from
							DevOps for real-time schemas.
						</p>
					</div>
					<div className={s.card}>
						<img src={Photo2} alt='avatar' />
						<h5>Many variations of pass majority have suffered</h5>
						<p className={s.text}>
							Capitalize on low-hanging fruit to identify a ballpark value-added
							activity to beta test.
						</p>
					</div>
					<div className={s.card}>
						<img src={Photo3} alt='avatar' />
						<h5>Words which don’t look even slightly believable</h5>
						<p className={s.text}>
							Podcasting operational change management inside of workflows to
							establish a framework.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
