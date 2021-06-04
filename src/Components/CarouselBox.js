import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';

export default class CarouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide1}
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest image 1</h3>
						<p>Text some text to you 1</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide2}
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest image 2</h3>
						<p>Text some text to you 2</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide3}
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest image 3</h3>
						<p>Text some text to you 3</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		)
	}
}
