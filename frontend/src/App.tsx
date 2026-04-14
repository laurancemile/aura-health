import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

// pages
import PatientIntake from "./pages/PatientIntake";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PatientIntake />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
