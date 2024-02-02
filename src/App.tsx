import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Space from "./pages/Space";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Space />} />
            </Routes>
        </Router>
    );
}

export default App;
