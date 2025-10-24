import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Sections from "./pages/Sections";
import Chatbot from "./pages/Chatbot";
import Analyzer from "./pages/Analyzer";
import Roadmap from "./pages/Roadmap";
import Learn from "./pages/LearnPaths";
import Cases from "./pages/CasesHandling";
import LandmarkCases from "./pages/LandmarkCases";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from "./pages/FAQ";
import CitizenRights from "./pages/CitizenRights";
import LegalTermsDictionary from "./pages/LegalTermsDictionary";
import Ammendments from "./pages/Ammendments";
import './styles/home.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/analyzer" element={<Analyzer />} />
        <Route path="/casesHandling" element={<Cases />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Ammendments" element={<Ammendments />} />
        <Route path="/landmarkCases" element={<LandmarkCases />} />
        <Route path="/LegalTermsDictionary" element={<LegalTermsDictionary />} />
        <Route path="/learnpaths" element={<Learn />} />
        <Route path="/CitizenRights" element={<CitizenRights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
