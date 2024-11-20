import React from 'react';
import './Popup.css';

const Popup = ({ article, onClose }) => {
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} className="popup-image" />
      <p>{article.content || 'No content available.'}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

export default Popup;
