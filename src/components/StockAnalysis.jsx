import React from "react";

const StockAnalysis = () => {
	return (
		<div>
			<header>
				<div className="container">
					<h1>AI Investment Adviser</h1>
					<nav>
						<ul>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a
									href="stock-analysis.html"
									className="active"
								>
									Stock Analysis
								</a>
							</li>
							<li>
								<a href="retirement-planning.html">
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
					<h2>Stock Analysis</h2>
					<form className="stock-form">
						<label for="stock-name">
							Enter Stock Name or Symbol:
						</label>
						<input
							type="text"
							id="stock-name"
							placeholder="e.g., AAPL, TSLA"
						/>
						<button type="submit">Analyze</button>
					</form>
					<div className="stock-results">
						<h3>Results:</h3>
						<p>
							<strong>Recommendation:</strong> Buy
						</p>
						<p>
							<strong>Predicted Future Price:</strong> $150.25
						</p>
						<div className="graph-placeholder">
							[Graph Placeholder]
						</div>
						<div className="news-placeholder">
							[News Placeholder]
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

export default StockAnalysis;
