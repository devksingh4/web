const INFO = {
	main: {
		title: "Dev Singh",
		name: "Dev Singh",
		email: "dev@devksingh.com",
		email2: "dsingh14@illinois.edu",
		logo: "../android-chrome-512x512.png",
		resume: "https://files.devksingh.com/Dev_Singh_resume.pdf",
		cv: "https://files.devksingh.com/cv.pdf"
	},

	socials: {
		github: "https://github.com/devksingh4",
		linkedin: "https://linkedin.com/in/dev-singh4",
		twitter: "https://twitter.com/_andro_studios_"
	},

	homepage: {
		title: "Hi, I'm Dev!",
		description: "I am a sophomore majoring in Computer Science at the University of Illinois Urbana-Champaign interested in machine learning engineering. I have previously worked with tools including: PyTorch, scikit-learn, Express.js, Docker, Kubernetes, AWS Lambda, PostgreSQL, DynamoDB, Redis, and MongoDB."
	},

	articles: {
		title: "My Articles",
		description: "View my thoughts on various topics.",
	},
	projects: [
		{
			title: "Association for Computing Machinery @ UIUC",
			description:
				"Architected and led infrastructure modernization, including implementing Azure Active Directory, mail server, custom link shortener, Kubernetes cluster, and central events system. Utilized AWS Lambda and Dynamo DB to automate frequent business processes, including event ticket sales and new member provisioning.",
			logo: "",
			linkText: "View Site",
			link: "https://acm.illinois.edu",
		},
		{
			title: "Linkry",
			description: "Linkry is an enterprise link shortener application with support for role-based access control through Azure Active Directory, including group link management delegation.",
			logo: "",
			linkText: "View Repository",
			link: "https://github.com/acm-uiuc/linkry",
		},
		{
			title: "The Red Alliance",
			description: "Designed cross-platform applications to facilitate FIRST Robotics Competition (FRC) data collection with a custom mobile app and backend REST API using React, React Native, Node.JS, MongoDB, and Docker. Developed a data analysis engine using scikit-learn and PyTorch to provide competition insights and generate predictions about future performance.",
			logo: "",
			linkText: "View Repositories",
			link: "https://github.com/titanscouting"
		},
		{
			title: "Epoch @ IMSA",
			description: "Developed a team of 20 students to create and oversee a new CUDA-enabled HPC cluster using the SLURM job scheduler. Architected the technological vision and ensured overall reliability of the cluster at the hardware and software levels.",
			link: "https://epochml.org",
			linkText: "View Site"
		},
		{
			title: "Notus",
			description: "Built a graphical tool to model the spread of COVID-19 and generate various saferroom layouts using a Monte Carlo algorithm.",
			link: "https://github.com/devksingh4/notus",
			linkText: "View Repository"
		},
		{
			title: "Thinkpad Tools",
			description: "Developed a userspace tool to read and write hardware properties to the Lenovo Thinkpad system controller on Linux. Provides feature-parity with the first-party Windows client.",
			link: "https://github.com/devksingh4/thinkpad-tools",
			linkText: "View Repository"
		}
	],
}

export default INFO;
