import React from "react";
import "./NewsCard.css";

function NewsCard({ article }) {
  const {
    title,
    description,
    url,
    urlToImage,
    source,
    publishedAt
  } = article;

  return (
    <div className="news-card">
      {urlToImage && <img src={urlToImage} alt={title} />}
      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="source">
          <strong>{source?.name}</strong> -{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
