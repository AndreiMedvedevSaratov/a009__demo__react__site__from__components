import React, { Component } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';
import logo from '../assets/img/logo192.png';

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
					<Container>
						<Navbar.Brand href="/" >
							<img
								src={logo}
								height="30"
								width="30"
								className="d-inline-block align-top"
								alt="Logo"
							/> React site
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav" className="navbar-wrapper">
							<Nav className="mr-auto">
								<Nav.Link href="/"> Home </Nav.Link>
								<Nav.Link href="/about"> About us </Nav.Link>
								<Nav.Link href="/contacts"> Contacts </Nav.Link>
								<Nav.Link href="/"> Blog </Nav.Link>
							</Nav>
							<Form inline className="search-form">
								<FormControl
									type="text"
									placeholder="Search"
									className="mr-sm-2"
								/>
								<Button variant="outline-info">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		)
	}
}
