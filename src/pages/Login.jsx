import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { email, password } = formData;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if user exists in Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      setError("Access denied! You are not registered.");
      await auth.signOut();
      return;
    }

    // ✅ Save login state in localStorage
    localStorage.setItem("loggedIn", "true");

    // Redirect to homepage
    navigate("/");
  } catch (err) {
    if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
      setError("Invalid email or password!");
    } else {
      setError(err.message);
    }
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          <span style={styles.icon}><FaSignInAlt /></span> Login
        </h1>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Login</button>
        </form>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/Signup" style={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

// ✅ Styles remain the same
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fdfcfb, #e8f5e9)",
    padding: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "40px 50px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "420px",
    color: "#1f2937",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: "#065f46",
  },
  icon: { fontSize: "1.8rem", display: "flex", alignItems: "center" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px 15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    background: "linear-gradient(90deg, #059669, #047857)",
    color: "#fff",
    border: "none",
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer",
  },
  link: {
    color: "#b45309",
    fontWeight: "600",
    textDecoration: "none",
  },
  text: { textAlign: "center", marginTop: "15px" },
};

export default Login;
