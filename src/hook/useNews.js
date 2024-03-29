import { useState, useEffect } from 'react';

const useNews = (category, apiKey) => {
 const [news, setNews] = useState([]);

 useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
 }, [category, apiKey]);

 return news;
};

export default useNews;
