import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";
import "./App.css";

const BASE_URL = "http://localhost:5000/api";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async (category = "general") => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines?category=${category}`);
      setArticles(response.data.articles || []);
    } catch (err) {
      console.error("Error fetching news:", err);
      setArticles([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    try {
      const response = await axios.get(`${BASE_URL}/search?q=${searchQuery}`);
      setArticles(response.data.articles || []);
    } catch (err) {
      console.error("Error searching news:", err);
      setArticles([]);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="App">
      <header>
        <h1>News App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for news"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <div className="category-buttons">
        {["general", "business", "entertainment", "health", "science", "sports", "technology"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cat === category ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="news-container">
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
