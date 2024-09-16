import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<a href={INFO.main.resume} target="_blank" rel="noreferrer">Resume <FontAwesomeIcon icon={faExternalLinkSquare} /> </a>
						</li>
						{/* <li className="footer-nav-link-item">
							<a href={INFO.main.cv} target="_blank">CV <FontAwesomeIcon icon={faExternalLinkSquare} /> </a>
						</li> */}
						{/* <li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {new Date().getFullYear()} Dev Singh. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
