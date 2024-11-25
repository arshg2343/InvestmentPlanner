import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const RetirementPlanner = () => {
	const navigate = useNavigate();
	return (
		<div>
			<header>
				<div className="container">
					<h1 onClick={() => navigate("/")}>AI Investment Adviser</h1>
					<nav>
						<ul>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="stock-analysis.html">Stock Analysis</a>
							</li>
							<li>
								<a
									href="retirement-planning.html"
									className="active"
								>
									Retirement Planning
								</a>
							</li>
							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<section className="main-content">
				<div className="container">
					<h2>Retirement Planning</h2>
					<form className="retirement-form">
						<label for="savings">Current Savings (in USD):</label>
						<input
							type="number"
							id="savings"
							placeholder="e.g., 10000"
						/>

						<label for="target">Target Retirement Fund:</label>
						<input
							type="number"
							id="target"
							placeholder="e.g., 500000"
						/>

						<button type="submit">Plan</button>
					</form>
					<div className="plan-results">
						<h3>Recommended Plan:</h3>
						<p>
							<strong>Investment Strategy:</strong> Moderate Risk
						</p>
						<div className="graph-placeholder">
							[Graph Placeholder]
						</div>
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

export default RetirementPlanner;
