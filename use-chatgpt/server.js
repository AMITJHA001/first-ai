import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/ask", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    let result;
    try {
      result = await model.generateContent(userMessage);
    } catch (error) {
      if (error.status === 429) {
        console.warn("Rate limit hit. Retrying after 30 seconds...");
        await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait 30 seconds
        result = await model.generateContent(userMessage); // Retry once
      } else {
        throw error;
      }
    }

    const reply = result.response.text().trim();
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ reply: "Something went wrong with Gemini API." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
