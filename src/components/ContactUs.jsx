import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactUs = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};
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
					<form
						className="contact-form"
						name="contact" // Netlify form name
						method="POST" // Required for Netlify Forms
						data-netlify="true" // Enables Netlify form handling
						onSubmit={(e) => {
							e.preventDefault();
							// Additional logic (if needed)
							e.target.submit(); // Submit the form
						}}
						value="contact"
					>
						<label for="name">Your Name:</label>
						<input
							type="text"
							id="name"
							placeholder="Your Name"
							value={formState.name}
							onChange={handleChange}
						/>

						<label for="email">Your Email:</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							value={formState.email}
							onChange={handleChange}
						/>

						<label for="message">Your Message:</label>
						<textarea
							id="message"
							rows="5"
							placeholder="Your Message"
							value={formState.message}
							onChange={handleChange}
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
