import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { motion } from "framer-motion"; 

import Homepage from "./pages/homepage";
import Articles from "./pages/articles";
import Projects from "./pages/projects";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

const pageVariants = {
	initial: {
		opacity: 0
	},
	in: {
		opacity: 1
	},
	out: {
		opacity: 0
	}
};

const pageTransition = {
	type: 'tween',
	ease: 'linear',
	duration: 0.6
};


const AnimationLayout = () => {
	const { pathname } = useLocation();
	return (
			<motion.div
				key={pathname}
				initial="initial"
				animate="in"
				variants={pageVariants}
				transition={pageTransition}
			>
				<Outlet />
			</motion.div>
	);
};
function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App" style={{ height: '100vh' }}>
			<Routes>
				<Route element={<AnimationLayout />}>
					<Route path="/" element={<Homepage />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/files/resume.pdf" element={<Navigate to='https://files.devksingh.com/resume.pdf'/>} />
					<Route path="/files/cv.pdf" element={<Navigate to='https://files.devksingh.com/cv.pdf' />} />
					<Route path="*" element={<Notfound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
