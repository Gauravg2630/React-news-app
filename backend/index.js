const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 5000;
app.use(cors());

app.get("/api/top-headlines", async (req, res) => {
  const category = req.query.category || "general";

  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "in",
        category,
      },
      headers: {
        "X-Api-Key": process.env.NEWS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        sortBy: "publishedAt",
        language: "en",
      },
      headers: {
        "X-Api-Key": process.env.NEWS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error searching news:", error.message);
    res.status(500).json({ error: "Failed to search news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
