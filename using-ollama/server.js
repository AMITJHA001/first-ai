import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/ask", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const ollamaRes = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma:2b", // or llama3
        prompt: userMessage,
        stream: false,
      }),
    });

    const data = await ollamaRes.json();
    res.json({ reply: data.response.trim() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ reply: "Local model not responding." });
  }
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
