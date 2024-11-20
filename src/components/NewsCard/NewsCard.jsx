import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article, onClick }) => {
  return (
    <>
    <div className="news-card" onClick={onClick}>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-image" />
      )}
      <h3 className="news-title">{article.title}</h3>
      <p className="news-description">{article.description}</p>
    </div>
    </>
  );
};

export default NewsCard;
