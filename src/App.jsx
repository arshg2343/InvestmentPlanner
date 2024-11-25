import React from "react";
import Landing_page from "./components/Landing_page.jsx";
import ContactUs from "./components/ContactUs.jsx";
import StockAnalysis from "./components/StockAnalysis.jsx";
import RetirementPlanner from "./components/RetirementPlanner.jsx";
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
