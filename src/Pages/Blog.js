import React, { Component } from 'react';
import { Media, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

export default class Blog extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col md="9">
						<Media className="m-5" style={{ display: "flex" }}>
							<img
								width={150}
								height={150}
								className="mr-3"
								alt="avatar"
								src="https://yt3.ggpht.com/a/AATXAJyB4RI624-RLhArJeQxthC89kmMiGrIg6kSew=s900-c-k-c0xffffffff-no-rj-mo"
								style={{ marginRight: "10px" }}
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Уроки React js верстка сайта с нуля, теперь мы делаем верстку блог постов.
									Верстка сайта происходит посредством компонентов Bootstrap для
									React js и в этом видео я пошагово показываю как строить компоненты
									под версткой.
								</p>
							</Media.Body>
						</Media>
						<Media className="m-5" style={{ display: "flex" }}>
							<img
								width={150}
								height={150}
								className="mr-3"
								alt="avatar"
								src="https://yt3.ggpht.com/a/AATXAJyB4RI624-RLhArJeQxthC89kmMiGrIg6kSew=s900-c-k-c0xffffffff-no-rj-mo"
								style={{ marginRight: "10px" }}
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Уроки React js верстка сайта с нуля, теперь мы делаем верстку блог постов.
									Верстка сайта происходит посредством компонентов Bootstrap для
									React js и в этом видео я пошагово показываю как строить компоненты
									под версткой.
								</p>
							</Media.Body>
						</Media>
						<Media className="m-5" style={{ display: "flex" }}>
							<img
								width={150}
								height={150}
								className="mr-3"
								alt="avatar"
								src="https://yt3.ggpht.com/a/AATXAJyB4RI624-RLhArJeQxthC89kmMiGrIg6kSew=s900-c-k-c0xffffffff-no-rj-mo"
								style={{ marginRight: "10px" }}
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Уроки React js верстка сайта с нуля, теперь мы делаем верстку блог постов.
									Верстка сайта происходит посредством компонентов Bootstrap для
									React js и в этом видео я пошагово показываю как строить компоненты
									под версткой.
								</p>
							</Media.Body>
						</Media>
						<Media className="m-5" style={{ display: "flex" }}>
							<img
								width={150}
								height={150}
								className="mr-3"
								alt="avatar"
								src="https://yt3.ggpht.com/a/AATXAJyB4RI624-RLhArJeQxthC89kmMiGrIg6kSew=s900-c-k-c0xffffffff-no-rj-mo"
								style={{ marginRight: "10px" }}
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Уроки React js верстка сайта с нуля, теперь мы делаем верстку блог постов.
									Верстка сайта происходит посредством компонентов Bootstrap для
									React js и в этом видео я пошагово показываю как строить компоненты
									под версткой.
								</p>
							</Media.Body>
						</Media>
						<Media className="m-5" style={{ display: "flex" }}>
							<img
								width={150}
								height={150}
								className="mr-3"
								alt="avatar"
								src="https://yt3.ggpht.com/a/AATXAJyB4RI624-RLhArJeQxthC89kmMiGrIg6kSew=s900-c-k-c0xffffffff-no-rj-mo"
								style={{ marginRight: "10px" }}
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Уроки React js верстка сайта с нуля, теперь мы делаем верстку блог постов.
									Верстка сайта происходит посредством компонентов Bootstrap для
									React js и в этом видео я пошагово показываю как строить компоненты
									под версткой.
								</p>
							</Media.Body>
						</Media>
					</Col>
					<Col md="3">
						<h5 className="text-center mt-5">Categories</h5>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>HTML</ListGroup.Item>
								<ListGroup.Item>CSS</ListGroup.Item>
								<ListGroup.Item>SCSS</ListGroup.Item>
								<ListGroup.Item>JS</ListGroup.Item>
								<ListGroup.Item>React</ListGroup.Item>
							</ListGroup>
						</Card>
						<Card className="mt-3" bg="light">
							<Card.Body>
								<Card.Title>Side widget</Card.Title>
								<Card.Text>
									Here is some text of side widget ))
									Here is some text of side widget ))
									Here is some text of side widget ))
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}
