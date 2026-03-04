// // src/pages/LegalAnalyzer.jsx
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
// import legalTerms from "./legalTerms.json";

// // Set pdfjs worker automatically
// GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.12.141/pdf.worker.min.js`;

// const LegalAnalyzer = () => {
//   const [text, setText] = useState("");
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const analyzeText = (inputText) => {
//     const foundTerms = Object.keys(legalTerms).filter((term) =>
//       inputText.toLowerCase().includes(term.toLowerCase())
//     );
//     setMatches(foundTerms);
//   };

//   const handleTextChange = (e) => setText(e.target.value);

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     let extractedText = "";

//     try {
//       if (file.type === "application/pdf") {
//         const pdfData = await file.arrayBuffer();
//         const pdf = await getDocument(pdfData).promise;
//         for (let i = 1; i <= pdf.numPages; i++) {
//           const page = await pdf.getPage(i);
//           const content = await page.getTextContent();
//           extractedText += content.items.map((item) => item.str).join(" ") + " ";
//         }
//       } else if (file.type.startsWith("image/")) {
//         const { data } = await Tesseract.recognize(file, "eng");
//         extractedText = data.text;
//       } else if (file.type === "text/plain") {
//         extractedText = await file.text();
//       } else {
//         alert("Unsupported file type.");
//         setLoading(false);
//         return;
//       }

//       setText(extractedText);
//       analyzeText(extractedText);
//     } catch (err) {
//       console.error("Error processing file:", err);
//       alert("Failed to process file. Check console for details.");
//     }

//     setLoading(false);
//   };

//   const getHighlightedText = (inputText) => {
//     let highlighted = inputText;
//     matches.forEach((term) => {
//       const regex = new RegExp(`(${term})`, "gi");
//       highlighted = highlighted.replace(regex, `<mark>${"$1"}</mark>`);
//     });
//     return highlighted;
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>Legal Analyzer</h2>

//       <textarea
//         rows="8"
//         placeholder="Paste text here..."
//         value={text}
//         onChange={handleTextChange}
//         style={styles.textarea}
//       />
//       <br />
//       <input
//         type="file"
//         accept=".pdf,.png,.jpg,.jpeg,.txt"
//         onChange={handleFileUpload}
//         style={styles.fileInput}
//       />
//       <button onClick={() => analyzeText(text)} style={styles.button}>
//         Analyze
//       </button>

//       {loading && <p style={styles.loadingText}>Processing file...</p>}

//       <h3 style={styles.subHeader}>Highlighted Text:</h3>
//       <div
//         style={styles.highlightedText}
//         dangerouslySetInnerHTML={{ __html: getHighlightedText(text) }}
//       />

//       <h3 style={styles.subHeader}>Detected Legal Terms:</h3>
//       <div style={styles.cardsContainer}>
//         {matches.map((term, idx) => {
//           const info = legalTerms[term];
//           return (
//             <div key={idx} style={styles.card}>
//               <h4 style={styles.term}>{term.toUpperCase()}</h4>
//               <p><b>Meaning:</b> {info.meaning}</p>
//               <p><b>Punishment:</b> {info.punishment}</p>
//               <p><b>Immediate Action:</b> {info.immediate_action}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     maxWidth: "900px",
//     margin: "30px auto",
//     padding: "20px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#fdfdfd",
//     borderRadius: "10px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//   },
//   header: {
//     textAlign: "center",
//     color: "#2c3e50",
//     marginBottom: "20px",
//   },
//   subHeader: {
//     color: "#34495e",
//     marginTop: "25px",
//     marginBottom: "10px",
//   },
//   textarea: {
//     width: "100%",
//     padding: "12px",
//     fontSize: "14px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     resize: "vertical",
//   },
//   fileInput: {
//     margin: "15px 0",
//   },
//   button: {
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#27ae60",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   buttonHover: {
//     backgroundColor: "#219150",
//   },
//   loadingText: {
//     color: "#e67e22",
//     fontStyle: "italic",
//   },
//   highlightedText: {
//     padding: "15px",
//     backgroundColor: "#f0f8ff",
//     borderRadius: "8px",
//     minHeight: "60px",
//     lineHeight: "1.6",
//   },
//   cardsContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   card: {
//     padding: "15px",
//     borderRadius: "10px",
//     backgroundColor: "#ecf0f1",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     transition: "transform 0.2s ease, background-color 0.2s ease",
//   },
//   term: {
//     color: "#c0392b",
//     marginBottom: "8px",
//   },
// };

// export default LegalAnalyzer;

// src/pages/LegalAnalyzer.jsx
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import legalTerms from "./legalTerms.json";

// Set pdfjs worker
GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.12.141/pdf.worker.min.js";

const LegalAnalyzer = () => {
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [language, setLanguage] = useState("English");
  const [summarizing, setSummarizing] = useState(false);

  const analyzeText = (inputText) => {
    const foundTerms = Object.keys(legalTerms).filter((term) =>
      inputText.toLowerCase().includes(term.toLowerCase())
    );
    setMatches(foundTerms);
  };

  const handleTextChange = (e) => setText(e.target.value);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    let extractedText = "";

    try {
      if (file.type === "application/pdf") {
        const pdfData = await file.arrayBuffer();
        const pdf = await getDocument({ data: pdfData }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          extractedText += content.items.map((item) => item.str).join(" ") + " ";
        }
      } else if (file.type.startsWith("image/")) {
        const { data } = await Tesseract.recognize(file, "eng");
        extractedText = data.text;
      } else if (file.type === "text/plain") {
        extractedText = await file.text();
      } else {
        alert("Unsupported file type.");
        setLoading(false);
        return;
      }

      setText(extractedText);
      analyzeText(extractedText);
    } catch (err) {
      console.error("Error processing file:", err);
      alert("Failed to process file. Check console for details.");
    }

    setLoading(false);
  };

  const getHighlightedText = (inputText) => {
    let highlighted = inputText;
    matches.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi");
      highlighted = highlighted.replace(regex, `<mark>$1</mark>`);
    });
    return highlighted;
  };

  // ✅ Backend-based summarization
  const summarizeText = async () => {
    if (!text.trim()) {
      alert("Please enter or upload text to summarize.");
      return;
    }

    try {
      setSummarizing(true);
      const response = await fetch("http://localhost:5000/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      console.error("Error summarizing:", err);
      setSummary("Error generating summary.");
    } finally {
      setSummarizing(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Legal Analyzer</h2>

      <textarea
        rows="8"
        placeholder="Paste text here..."
        value={text}
        onChange={handleTextChange}
        style={styles.textarea}
      />
      <br />
      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.txt"
        onChange={handleFileUpload}
        style={styles.fileInput}
      />
      <button onClick={() => analyzeText(text)} style={styles.button}>
        Analyze
      </button>

      {loading && <p style={styles.loadingText}>Processing file...</p>}

      <h3 style={styles.subHeader}>Highlighted Text:</h3>
      <div
        style={styles.highlightedText}
        dangerouslySetInnerHTML={{ __html: getHighlightedText(text) }}
      />

      <h3 style={styles.subHeader}>Detected Legal Terms:</h3>
      <div style={styles.cardsContainer}>
        {matches.map((term, idx) => {
          const info = legalTerms[term];
          return (
            <div key={idx} style={styles.card}>
              <h4 style={styles.term}>{term.toUpperCase()}</h4>
              <p>
                <b>Meaning:</b> {info.meaning}
              </p>
              <p>
                <b>Punishment:</b> {info.punishment}
              </p>
              <p>
                <b>Immediate Action:</b> {info.immediate_action}
              </p>
            </div>
          );
        })}
      </div>

      <h3 style={styles.subHeader}>AI Summary</h3>
      <div style={styles.summaryBox}>
        <label>
          Select Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={styles.dropdown}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
            <option value="Kannada">Kannada</option>
            <option value="Marathi">Marathi</option>
          </select>
        </label>
        <button onClick={summarizeText} style={styles.button}>
          {summarizing ? "Summarizing..." : "Generate Summary"}
        </button>
        {summary && <p style={styles.summaryText}>{summary}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 900,
    margin: "30px auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fdfdfd",
    borderRadius: 10,
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  header: { textAlign: "center", color: "#2c3e50", marginBottom: 20 },
  subHeader: { color: "#34495e", marginTop: 25, marginBottom: 10 },
  textarea: { width: "100%", padding: 12, fontSize: 14, borderRadius: 8, border: "1px solid #ccc", resize: "vertical" },
  fileInput: { margin: "15px 0" },
  button: { padding: "10px 20px", borderRadius: 5, border: "none", backgroundColor: "#27ae60", color: "white", fontSize: 16, cursor: "pointer", transition: "all 0.3s ease", marginLeft: 10 },
  loadingText: { color: "#e67e22", fontStyle: "italic" },
  highlightedText: { padding: 15, backgroundColor: "#f0f8ff", borderRadius: 8, minHeight: 60, lineHeight: 1.6 },
  cardsContainer: { display: "flex", flexDirection: "column", gap: 15 },
  card: { padding: 15, borderRadius: 10, backgroundColor: "#ecf0f1", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
  term: { color: "#c0392b", marginBottom: 8 },
  summaryBox: { marginTop: 20, padding: 15, borderRadius: 8, backgroundColor: "#f8f9fa" },
  dropdown: { marginLeft: 10, padding: 5, fontSize: 14 },
  summaryText: { marginTop: 15, lineHeight: 1.6, backgroundColor: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" },
};

export default LegalAnalyzer;

