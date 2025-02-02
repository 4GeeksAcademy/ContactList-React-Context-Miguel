import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between me-3">
			
			<Link to="/">
				<span className="navbar-brand m-3 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/AddContact">
					<button className="btn btn-primary">Add new Contact</button>
				</Link>
			</div>
	
		</nav>
	);
};
