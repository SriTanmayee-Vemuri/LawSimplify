import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBrain, faBook, faFileAlt, faComments, faGavel, faSearch } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check localStorage for login status on component mount
    useEffect(() => {
        const userLoggedIn = localStorage.getItem("loggedIn");
        if (userLoggedIn === "true") {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem("loggedIn", "true"); // store login status
        navigate("/"); 
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem("loggedIn"); // remove login status
        navigate("/"); 
    };

    const handleSignup = () => {
        navigate("/login"); 
    };

    return (
        <div className='home_container'>
            <Navbar loggedIn={loggedIn} handleLogout={handleLogout} handleLogin={handleLogin} handleSignup={handleSignup} />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to ⚖️ LawSimplify</h1>
                    <h3>Your AI-powered legal companion — simplify legal research, understand complex terms, and get instant case insights at your fingertips....</h3>
                    <button className="get_started" onClick={() => navigate("/chatbot")}>
                        Get Started <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </section>
            <section className="features-section">
                <h2>Powerful features that simplify legal work</h2>
                <p>Everything a modern legal user needs — whether you're a law student, a busy lawyer, or someone navigating legal processes.</p>
                <div className="features">
                    <div className="feature-card">
                        <div className="icon purple"><FontAwesomeIcon icon={faBrain} /></div>
                        <h3>AI Legal Analyzer</h3>
                        <p>Paste legal text and get clear explanations of terms.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon pink"><FontAwesomeIcon icon={faBook} /></div>
                        <h3>Learn Legal Terms</h3>
                        <p>Understand legal jargon with simple definitions and examples.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon yellow"><FontAwesomeIcon icon={faFileAlt} /></div>
                        <h3>Clause & Punishment Highlighter</h3>
                        <p>Upload a legal paper, highlight key issues, and view severity levels.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon sky"><FontAwesomeIcon icon={faComments} /></div>
                        <h3>AI Chat Assistant</h3>
                        <p>Ask legal questions and get reliable answers anytime.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon emerald"><FontAwesomeIcon icon={faGavel} /></div>
                        <h3>Case Summaries</h3>
                        <p>Turn lengthy judgments into short, easy-to-read summaries with key highlights.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon rose"><FontAwesomeIcon icon={faSearch} /></div>
                        <h3>Legal Research</h3>
                        <p>Search laws, rules, and case precedents with context-aware, relevant results.</p>
                    </div></div>
            </section>

            <section className="contact-us">
                <div className="contact-card">
                    <h1>Contact Us</h1>
                    <form className="form">
                        <div className="input-box">
                            <input type="text" name="name" required />
                            <label>Name</label>
                        </div>

                        <div className="input-box">
                            <input type="email" name="email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input type="tel" name="mobile" required />
                            <label>Mobile</label>
                        </div>

                        <div className="input-box">
                            <input type="text" name="place" required />
                            <label>Place</label>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </section>


            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h2>⚖️ LawSimplify</h2>
                        <p>Your AI-powered legal companion</p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/chatbot">AI Chatbot</a></li>
                            <li><a href="/analyzer">Legal Analyzer</a></li>
                            <li><a href="/learnpaths">Student Learning</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>Email: info@lawsimplify.com</p>
                        <p>Phone: +91 12345 67890</p>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} /> Facebook
                            </a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} /> YouTube
                            </a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 LawSimplify. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}
export default Home;
