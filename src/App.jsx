import React from "react";
import Landing_page from "./components/landing_page";
import ContactUs from "./components/ContactUs";
import StockAnalysis from "./components/StockAnalysis";
import RetirementPlanner from "./components/RetirementPlanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing_page />} />{" "}
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/stock-analysis" element={<StockAnalysis />} />
				<Route
					path="/retirement-planning"
					element={<RetirementPlanner />}
				/>
				<Route path="*" element={<Landing_page />} />
			</Routes>
		</Router>
	);
};

export default App;
