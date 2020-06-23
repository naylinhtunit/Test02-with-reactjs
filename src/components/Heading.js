import React from 'react';
import { Link } from 'react-router-dom';
import {
	Navbar,
	Nav,
	NavItem,
	NavbarBrand,
	Container
} from 'reactstrap';

export const Heading = () => {
	return (
		<Navbar color="dark">
			<Container>
				<NavbarBrand href="/" className="text-white">My Team</NavbarBrand>
				<Nav>
					<NavItem>
						<Link to="/add" className="btn btn-info">Add user</Link>
					</NavItem>
				</Nav>
			</Container>
		</Navbar>
		)
}