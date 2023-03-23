import React from 'react';
import s from './style.module.css';
import Photo from './media/IMAGE.png';
import Rectangle from './media/Rectangle (1).png';

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
		</div>
	);
}
