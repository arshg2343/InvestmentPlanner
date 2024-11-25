import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
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
								<a href="retirement-planning.html">
									Retirement Planning
								</a>
							</li>
							<li>
								<a href="contact.html" className="active">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<section className="main-content">
				<div className="container">
					<h2>Contact Us</h2>
					<form className="contact-form">
						<label for="name">Your Name:</label>
						<input type="text" id="name" placeholder="Your Name" />

						<label for="email">Your Email:</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
						/>

						<label for="message">Your Message:</label>
						<textarea
							id="message"
							rows="5"
							placeholder="Your Message"
						></textarea>

						<button type="submit">Send</button>
					</form>
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

export default ContactUs;
