import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize GenAI client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // or GOOGLE_API_KEY
});

app.post("/api/summarize", async (req, res) => {
  const { text, language } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // stable public model
      contents: `Summarize the following legal text in ${language} using simple words:\n\n${text}`,
    });

    // The SDK response may have multiple layers, usually:
    // response.candidates[0].content[0].text
    const summary = response?.text || "Summary not available";

    res.json({ summary });
  } catch (error) {
    console.error("Error summarizing:", error);
    res.status(500).json({ summary: "Error generating summary" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
