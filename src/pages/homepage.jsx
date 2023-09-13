import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";


import "./styles/homepage.css";
import HomeSocials from "../components/about/HomeSocials";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(window.innerWidth <= 600 ? 0 : 80);
	const [oldLogoSize, setOldLogoSize] = useState(window.innerWidth <= 600 ? 0 : 80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth <= 600) {
				setLogoSize(0);
				setOldLogoSize(0);
				setStayLogo(false);
				return;
			}
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 20;
			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 60) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<meta property="og:title" content={INFO.main.title} />
				<meta property="og:description" content={INFO.homepage.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
					<div style={{marginRight: '20px'}}></div>
					<div className="homepage-container">
					<div className="homepage-first-area">
						<div className="homepage-first-area-left-side" style={{flexDirection: 'column', order: 1}}>
							<div className="homepage-image-container" style={{order: 0}}>
								<div className="homepage-image-wrapper">
									<img
										src="https://files.devksingh.com/mecr.png"
										alt="Dev Singh"
										className="homepage-image"
									/>
								</div>
							</div>
							<div className="homepage-left-info">
								<HomeSocials />
							</div>
						</div>

						<div className="homepage-first-area-left-side" style={{order: 0}}>
							<div className="title homepage-title">
								{INFO.homepage.title}
							</div>

							<div className="subtitle homepage-subtitle">
								{INFO.homepage.description}
							</div>

							<div className="subtitle homepage-subtitle">
								For Summer 2023, I will be a Digital and Analytics intern at the Cat Digital division of 
								{} <a class="hmlink" href="https://caterpillar.com">Caterpillar</a>, where I will be working on Applied Machine Learning 
								and other similar tasks. I was also a Software Engineering Intern at <a class="hmlink" href="https://zaktilabs.com">Zakti Security Labs</a>, developing 
								security and auditing applications for clients of all sizes.
							</div>
							<div className="subtitle homepage-subtitle">
								I am a course assistant for <a className="hmlink" href="https://cs.illinois.edu/academics/courses/cs357">CS 357 (Numerical Methods)</a> at UIUC. I am also the Treasurer, as well as an Infrastructure Project Lead, for <a class="hmlink" href="https://acm.illinois.edu">ACM @ Illinois</a>. 
								I was also a student researcher, working on Computer Vision models using vision transformers, at the <a class="hmlink" href="https://timan.cs.illinois.edu/ir/">Text Information Management and Analysis Group at the University of Illinois</a>, 
								advised by Prof. ChengXiang Zhai and Prof. Ismini Lourentzou (Virginia Tech). 
							</div>
						</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						{/* <div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

						{/* </div> */}
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
