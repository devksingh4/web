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
										src="/dsingh14.jpg"
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
								During Summer 2024, I worked at Capital One as a Software Engineer Intern. There, I built full-stack fraud detection solutions using technologies such as TypeScript, AWS Fargate, and Kafka that reduced fraud investigation time, fraud losses, and operational costs.
							</div>
							<div className="subtitle homepage-subtitle">
								During Summer and Fall 2023, I worked at Caterpillar's Cat Digital division as a Software Engineer/MLOps Intern, where I focued on optimizing anomaly detection systems and increasing system performance by building a distributed machine learning and rules-based runner architecture. This work boosted after-market service sales by increasing the number of supported assets. 

								Previously, I was also a Software Engineer Intern at Zakti Security Labs, where I developed custom tools to prevent unauthorized access to client systems and performed cybersecurity audits.
							</div>
							<div className="subtitle homepage-subtitle">
								At UIUC, I serve as a Course Assistant for CS 357 (Numerical Methods), CS 341 (Systems Programming) and CS 210 (Ethics). I am an inI am also the Infrastructure Chair, and previously Treasurer, for ACM @ UIUC, where I led modernization initiatives that reduced application downtime by 40%. Additionally, I worked on deep learning research, focusing on contrastive multimodal video transformers, under the supervision of Prof. ChengXiang Zhai and Prof. Ismini Lourentzou.
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
							{/* <a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a> */}
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
