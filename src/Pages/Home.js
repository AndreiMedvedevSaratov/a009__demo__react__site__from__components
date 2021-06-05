import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<>
				<CarouselBox />
				<Container>
					<h2 className="text-center m-4">
						Our team
					</h2>
					<CardGroup className="m-3">
						<Card bg="success" className="m-2">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/>
							<Card.Body>
								<Card.Title>
									Developers
								</Card.Title>
								<Card.Text>
									Our team is professional and effective
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
						<Card className="m-2">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/>
							<Card.Body>
								<Card.Title>
									Developers
								</Card.Title>
								<Card.Text>
									Our team is professional and effective
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
						<Card className="m-2">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/>
							<Card.Body>
								<Card.Title>
									Developers
								</Card.Title>
								<Card.Text>
									Our team is professional and effective
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
					</CardGroup>
				</Container>
			</>
		)
	}
}
