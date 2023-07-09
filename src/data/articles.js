import React from "react";

function cmmvt() {
	return {
		date: "April 21, 2021",
		title: "Contrastive Multi-Model Video Transformer",
		location: "Talk: Illinois Mathematics and Science Academy (IMSAloquium 2021) — Aurora, Illinois",
		description:
			"Transformer networks have shown great promise in video classification and understanding tasks by reducing the dependency on recurrent networks, and instead using self-attention techniques. Recurrent techniques are often not suitable for videos/data with long-term temporal dependencies due to the vanishing gradient problem, as well as the inability to fully backpropagate due to computational power restrictions. By using self-attention, a neural network can learn long-term dependencies with lower computational requirements and higher accuracy. We aim to increase the performance of self-supervised video transformer networks by contrasting frame-level local representations with the video-level global representations and determining how contrasting different representations from different data modalities may increase accuracy.",
		keywords: [
			"Transformer Model",
			"Contrastive Learning",
			"Deep Learning",
			"Semi-Supervised Learning",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Transformer networks have shown great promise in video classification and understanding tasks by reducing the dependency on recurrent networks, and instead using self-attention techniques. Recurrent techniques are often not suitable for videos/data with long-term temporal dependencies due to the vanishing gradient problem, as well as the inability to fully backpropagate due to computational power restrictions. By using self-attention, a neural network can learn long-term dependencies with lower computational requirements and higher accuracy. We aim to increase the performance of self-supervised video transformer networks by contrasting frame-level local representations with the video-level global representations and determining how contrasting different representations from different data modalities may increase accuracy.
					</div>
				</div>
				<br></br>
				<a href="https://files.devksingh.com/cmmvt-presentation.pdf">View Slides</a>
			</React.Fragment>
		),
	};
}

function zakti() {
	let descriptions = "Online reviews are becoming more important in a modern healthcare practice and can make or break healthcare practices. However, these responses can often expose Protected Health Information, or PHI. We performed research and analysis to determine some common violations to guide businesses in preventing these HIPAA violations.";
	return {
		date: "Sept 28, 2019",
		title: "Insights Into Patient Privacy and Online Reviews",
		location: "Paper: Zakti Security Labs — Naperville, Illinois",
		description: descriptions,
		style: ``,
		keywords: [
			"HIPAA Online Reviews",
			"Patient Privacy",
			"Online Reviews",
			"Healthcare",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						{descriptions}
					</div>
				</div>
				<br></br>
				<a href="https://www.zaktilabs.com/wp-content/uploads/2019/09/Insights-into-Patient-Privacy-and-Online-Reviews-2.pdf">View Paper</a>
			</React.Fragment>
		),
	};
}

const myArticles = [cmmvt, zakti];

export default myArticles;
