import React, { useState, useEffect } from 'react';
import { getTopHeadlines } from './services/api';
import Sidebar from './components/Sidebar/Sidebar';
import NewsCard from './components/NewsCard/NewsCard';
import Popup from './components/Popup/Popup';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';

const App = () => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    getTopHeadlines(category)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <>
    <Header />
    <div className="app">
      <Sidebar setCategory={setCategory} />
      <div className="news-list">
        {news.map((article, index) => (
          <NewsCard
            key={index}
            article={article}   //Here we are sending prop. to NewsCard
            onClick={() => setSelectedNews(article)}
          />
        ))}
      </div>
      {selectedNews && (
        <Popup article={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
    <Footer />
    </>
  );
};

export default App;