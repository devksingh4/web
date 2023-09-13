import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMapMarker, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/homesocials.css";

const HomeSocials = () => {
	return (
		<div className="socials">
			<div style={{ marginTop: '-4em' }}></div>
			<h3>Dev Singh</h3>
			<div style={{ marginTop: '-1em' }}></div>
			<h5>CS '25 @ UIUC | Interested in Applied Machine Learning</h5>
			<div className="nodec">
				<a href="https://cs.illinois.edu" target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGraduationCap}
							className="social-icon"
						/>
					</div>
					<div className="social-text">University of Illinois Urbana-Champaign</div>
				</a>
			</div>

			<div className="nodec">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faMapMarker}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Urbana, IL</div>
				</a>
			</div>

			<div className="nodec">
				<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.main.email}</div>
				</a>
			</div>

			<div className="nodec">
				<a href={`mailto:${INFO.main.email2}`} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.main.email2}</div>
				</a>
			</div>
			<div className="nodec">
				<a href={INFO.main.resume} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLink}
							className="social-icon"
						/>
						<a className="pdflink">Resume</a>
					</div>
				</a>
			</div>
			<div className="nodec">
				<a href={INFO.main.cv} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLink}
							className="social-icon"
						/>
						<a className="pdflink">Curriculum Vitae</a>
					</div>
				</a>
			</div>
		</div>
	);
};

export default HomeSocials;
