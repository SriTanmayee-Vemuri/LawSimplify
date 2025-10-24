// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Home as HomeIcon,
//   Bot,
//   Book,
//   FileText,
//   List,
//   Map,
//   BookOpen,
//   Layout,
//   Workflow,
//   GraduationCapIcon,
//   HelpCircle,
//   Shield,
//   Scroll,
// } from "lucide-react";

// const Navbar = ({ loggedIn, handleLogout, handleLogin, handleSignup }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleHover = (e) => (e.currentTarget.style.backgroundColor = "#e0dedeff");
//   const handleLeave = (e) => (e.currentTarget.style.backgroundColor = "transparent");

//   const styles = {
//     navbar: {
//       background: "rgba(11, 26, 61, 0.8)",
//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",
//       color: "white",
//       display: "flex",
//       padding: "10px 1rem",
//       justifyContent: "space-between",
//       alignItems: "center",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       position: "fixed",
//       width: "100%",
//       top: 0,
//       left: 0,
//       zIndex: 50,
//       boxSizing: "border-box",
//     },
//     title: { fontSize: "1.5rem", fontWeight: 800 },
//     menuContainer: { display: "flex", alignItems: "center", gap: "0.5rem" },
//     authBtn: {
//       padding: "0.45rem 1rem",
//       border: "none",
//       borderRadius: "0.5rem",
//       cursor: "pointer",
//       fontWeight: 600,
//       color: "#fff",
//       textDecoration: "none",
//       transition: "all 0.3s ease",
//       fontSize: "0.85rem",
//     },
//     loginBtn: { backgroundColor: "#2563eb" },
//     signupBtn: { backgroundColor: "#10b981" },
//     logoutBtn: { backgroundColor: "#ef4444" },
//     hamburgerBtn: {
//       background: "rgba(63, 62, 62, 0.1)",
//       border: "none",
//       padding: "0.5rem",
//       borderRadius: "0.5rem",
//       cursor: "pointer",
//       color: "#daa520",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       zIndex: 100,
//     },
//     sidebar: {
//       position: "fixed",
//       top: 0,
//       right: menuOpen ? 0 : "-350px",
//       height: "100vh",
//       width: "300px",
//       backgroundColor: "#fff",
//       color: "#000",
//       boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
//       transition: "right 0.3s ease",
//       display: "flex",
//       flexDirection: "column",
//       zIndex: 97,
//     },
//     scrollContainer: {
//       flex: 1,
//       overflowY: "auto",
//       padding: "2rem 1rem 1rem 1rem",
//     },
//     link: {
//       display: "flex",
//       alignItems: "center",
//       gap: "0.5rem",
//       padding: "0.75rem 1rem",
//       textDecoration: "none",
//       color: "inherit",
//       borderRadius: "0.3rem",
//       transition: "background 0.2s ease",
//       marginBottom: "0.5rem",
//       fontWeight: 500,
//       fontSize: "1rem",
//     },
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "rgba(0,0,0,0.3)",
//       opacity: menuOpen ? 1 : 0,
//       visibility: menuOpen ? "visible" : "hidden",
//       transition: "opacity 0.3s ease, visibility 0.3s ease",
//       zIndex: 90,
//     },
//   };

//   const authButtons = loggedIn ? (
//     <button
//       onClick={handleLogout}
//       style={{ ...styles.authBtn, ...styles.logoutBtn }}
//       onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
//       onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
//     >
//       Logout
//     </button>
//   ) : (
//     <div style={{ display: "flex", gap: "0.5rem" }}>
//       <button
//         onClick={handleLogin}
//         style={{ ...styles.authBtn, ...styles.loginBtn }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
//       >
//         Login
//       </button>
//       <button
//         onClick={handleSignup}
//         style={{ ...styles.authBtn, ...styles.signupBtn }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
//       >
//         Sign Up
//       </button>
//     </div>
//   );

//   return (
//     <>
//       <nav style={styles.navbar}>
//         <h1 style={styles.title}>⚖️ LawSimplify</h1>
//         <div style={styles.menuContainer}>
//           {!isMobile && authButtons}
//           <button
//             style={{
//               ...styles.hamburgerBtn,
//               background: menuOpen ? "#0b1a3d" : "rgba(63,62,62,0.1)",
//               color: menuOpen ? "#030303ff" : "#daa520",
//             }}
//             onClick={() => setMenuOpen(!menuOpen)}
//             onMouseOver={(e) => (e.currentTarget.style.background = "rgba(240, 232, 232, 0.2)")}
//             onMouseOut={(e) => (e.currentTarget.style.background = menuOpen ? "#0b1a3d" : "rgba(63,62,62,0.1)")}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       <div style={styles.overlay} onClick={() => setMenuOpen(false)}></div>

//       <div style={styles.sidebar}>
//         <div style={styles.scrollContainer}>
//           <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <HomeIcon size={18} /> 🏠 Home
//           </Link>
//           <Link to="/Chatbot" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Bot size={18} /> 🤖 AI Chatbot
//           </Link>
//           <Link to="/Analyzer" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <List size={18} /> 📊 Legal Analyzer
//           </Link>
//           <Link to="/LearnPaths" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <GraduationCapIcon size={18} /> 📚 Career Paths
//           </Link>
//           <Link to="/Roadmap" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Map size={18} /> 🗺️ Roadmap
//           </Link>
//           <Link to="/Articles" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <FileText size={18} /> 📰 Articles
//           </Link>
//           <Link to="/Sections" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Layout size={18} /> 📜 Sections
//           </Link>
//           <Link to="/CasesHandling" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Workflow size={18} /> 📊 Cases Handling
//           </Link>
//           <Link to="/LandmarkCases" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Book size={18} /> 📘 LandmarkCases
//           </Link>
//           <Link to="/LegalTermsDictionary" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <BookOpen size={18} /> 📖 LegalTermsDictionary
//           </Link>
//           <Link to="/Ammendments" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Scroll size={18} /> 📝 Ammendments
//           </Link>
//           <Link to="/FAQ" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <HelpCircle size={18} /> ? FAQ's
//           </Link>
//           <Link to="/CitizenRights" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
//             <Shield size={18} /> 🛡️ Rights
//           </Link>
//         </div>

//         {isMobile && <div style={{ padding: "1rem" }}>{authButtons}</div>}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home as HomeIcon,
  Bot,
  Book,
  FileText,
  List,
  Map,
  BookOpen,
  Layout,
  Workflow,
  GraduationCapIcon,
  HelpCircle,
  Shield,
  Scroll,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To hide Navbar on specific pages
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loggedIn, setLoggedIn] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check login status from localStorage
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("loggedIn");
    setLoggedIn(userLoggedIn === "true");
  }, []);

  // Hide Navbar on login/signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleHover = (e) => (e.currentTarget.style.backgroundColor = "#e0dedeff");
  const handleLeave = (e) => (e.currentTarget.style.backgroundColor = "transparent");

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    navigate("/");
  }
};


  const styles = {
    navbar: {
      background: "rgba(11, 26, 61, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      color: "white",
      display: "flex",
      padding: "10px 1rem",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 50,
      boxSizing: "border-box",
    },
    title: { fontSize: "1.5rem", fontWeight: 800 },
    menuContainer: { display: "flex", alignItems: "center", gap: "0.5rem" },
    authBtn: {
      padding: "0.45rem 1rem",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      fontWeight: 600,
      color: "#fff",
      transition: "all 0.3s ease",
      fontSize: "0.85rem",
    },
    loginBtn: { backgroundColor: "#2563eb" },
    signupBtn: { backgroundColor: "#10b981" },
    logoutBtn: { backgroundColor: "#ef4444" },
    hamburgerBtn: {
      background: "rgba(63, 62, 62, 0.1)",
      border: "none",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
      color: "#daa520",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
    },
    sidebar: {
      position: "fixed",
      top: 0,
      right: menuOpen ? 0 : "-350px",
      height: "100vh",
      width: "300px",
      backgroundColor: "#fff",
      color: "#000",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
      transition: "right 0.3s ease",
      display: "flex",
      flexDirection: "column",
      zIndex: 97,
    },
    scrollContainer: { flex: 1, overflowY: "auto", padding: "2rem 1rem 1rem 1rem" },
    link: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1rem",
      textDecoration: "none",
      color: "inherit",
      borderRadius: "0.3rem",
      transition: "background 0.2s ease",
      marginBottom: "0.5rem",
      fontWeight: 500,
      fontSize: "1rem",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.3)",
      opacity: menuOpen ? 1 : 0,
      visibility: menuOpen ? "visible" : "hidden",
      transition: "opacity 0.3s ease, visibility 0.3s ease",
      zIndex: 90,
    },
  };

  const authButtons = loggedIn ? (
    <button
      onClick={handleLogout}
      style={{ ...styles.authBtn, ...styles.logoutBtn }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
    >
      Logout
    </button>
  ) : (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button
        onClick={handleLogin}
        style={{ ...styles.authBtn, ...styles.loginBtn }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        Login
      </button>
      <button
        onClick={handleSignup}
        style={{ ...styles.authBtn, ...styles.signupBtn }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
      >
        Sign Up
      </button>
    </div>
  );

  return (
    <>
      <nav style={styles.navbar}>
        <h1 style={styles.title}>⚖️ LawSimplify</h1>
        <div style={styles.menuContainer}>
          {!isMobile && authButtons}
          <button
            style={{
              ...styles.hamburgerBtn,
              top: "1rem",
              right: "1rem",
              background: menuOpen ? "#0b1a3d" : "rgba(63,62,62,0.1)",
              color: menuOpen ? "#030303ff" : "#daa520",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(240, 232, 232, 0.2)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "rgba(63,62,62,0.1)")}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div style={styles.overlay} onClick={() => setMenuOpen(false)}></div>

      <div style={styles.sidebar}>
        <div style={styles.scrollContainer}>
          <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <HomeIcon size={18} /> 🏠 Home
          </Link>
          <Link to="/Chatbot" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Bot size={18} /> 🤖 AI Chatbot
          </Link>
          <Link to="/Analyzer" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <List size={18} /> 📊 Legal Analyzer
          </Link>
          <Link to="/LearnPaths" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <GraduationCapIcon size={18} /> 📚 Career Paths
          </Link>
          <Link to="/Roadmap" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Map size={18} /> 🗺️ Roadmap
          </Link>
          <Link to="/Articles" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <FileText size={18} /> 📰 Articles
          </Link>
          <Link to="/Sections" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Layout size={18} /> 📜 Sections
          </Link>
          <Link to="/CasesHandling" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Workflow size={18} /> 📊 Cases Handling
          </Link>
          <Link to="/LandmarkCases" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Book size={18} /> 📘 LandmarkCases
          </Link>
          <Link to="/LegalTermsDictionary" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <BookOpen size={18} /> 📖 LegalTermsDictionary
          </Link>
          <Link to="/Ammendments" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Scroll size={18} /> 📝 Ammendments
          </Link>
          <Link to="/FAQ" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <HelpCircle size={18} /> ? FAQ's
          </Link>
          <Link to="/CitizenRights" style={styles.link} onClick={() => setMenuOpen(false)} onMouseOver={handleHover} onMouseOut={handleLeave}>
            <Shield size={18} /> 🛡️ Rights
          </Link>
        </div>

        {isMobile && <div style={{ padding: "1rem" }}>{authButtons}</div>}
      </div>
    </>
  );
};

export default Navbar;
