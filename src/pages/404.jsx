import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Page Not Found
							</div>
							<div className="not-found-message">
								We can't seem to find the page you're looking
								for.
							</div>
							<a href="/" className="not-found-link">
								Go Home
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
