import React, { Component } from 'react';
import { Nav, Container, Row, Col, Tab } from 'react-bootstrap';

export default class About extends Component {
	render() {
		return (
			<Container>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column mt-2">
								<Nav.Item>
									<Nav.Link eventKey="first">Design</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Team</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Programming</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="fourth">Frameworks</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="fifth">Libraries</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content className="mt-2">
								<Tab.Pane eventKey="first">
									<img src="https://miro.medium.com/max/4000/1*YcMuf7D_PLLKj7am2kFHJg.png" alt="" width="1000px" />
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>	
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img src="https://ucarecdn.com/96c762be-d03e-4137-9216-8c9c793612e7/" alt="" width="1000px" />
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img src="https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/21982/image-1560347767424-90ee527b38a31dc75593c148de4d90f6.jpg" alt="" width="1000px" />
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth">
									<img src="https://cdn-images-1.medium.com/max/800/1*-nnefJfFZL8Oz5AclEidAQ.png" alt="" width="1000px" />
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="fifth">
									<img src="https://cdn.dribbble.com/users/407256/screenshots/13942295/vendor_4x.png" alt="" width="1000px" />
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
									<p>
										Верстка сайта с нуля на react js библиотеке JavaScript
										для начинающих. В этом видео мы верстаем дальше и я
										покажу как сделать сайт на react js с применением
										компонентов bootstrap. React Bootstrap позволяет
										создавать интерфейс сайта быстро и без лишних проблем.
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		)
	}
}
