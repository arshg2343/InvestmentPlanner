import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const Landing_page = () => {
	const navigate = useNavigate();
	return (
		<div>
			{" "}
			<header>
				<div className="container">
					<h1 onClick={() => navigate("/")}>AI Investment Adviser</h1>
					<nav>
						<ul>
							<li>
								<a onClick={() => navigate("/")}>Home</a>
							</li>
							<li>
								<a href="#features">Features</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a onClick={() => navigate("/contact")}>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<section className="hero">
				<div className="container">
					<h2>Make Smarter Investments with AI</h2>
					<p>
						Analyze stocks, plan your retirement, and stay updated
						on market trends.
					</p>
					<a href="#features" className="cta-button">
						Get Started
					</a>
				</div>
			</section>
			<section id="features" className="features">
				<div className="container">
					<h3>Features</h3>
					<div className="feature-cards">
						<button
							className="card"
							onClick={() => navigate("/stock-analysis")}
						>
							<h4>Stock Analysis</h4>
							<p>
								Get AI-powered insights to buy, sell, or hold
								stocks.
							</p>
						</button>
						<button className="card" onClick={() => navigate("")}>
							<h4>Predictions & Graphs</h4>
							<p>
								Interactive graphs showing stock trends and
								future predictions.
							</p>
						</button>
						<button
							className="card"
							onClick={() => navigate("/retirement-planning")}
						>
							<h4>Retirement Planning</h4>
							<p>
								Optimize your investments to secure your
								financial future.
							</p>
						</button>
						<button
							className="card"
							onClick={() => navigate("/contact")}
						>
							<h4>Market News</h4>
							<p>
								Stay informed with the latest news about your
								favorite stocks.
							</p>
						</button>
					</div>
				</div>
			</section>
			{/* <footer>
				<div className="container">
					<p>
						&copy; 2024 AI Investment Adviser. All rights reserved.
					</p>
				</div>
			</footer> */}
		</div>
	);
};

export default Landing_page;
