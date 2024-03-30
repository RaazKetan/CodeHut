import { useState, useEffect } from 'react';

const useNews = (category, apiKey) => {
 const [news, setNews] = useState([]);

 useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&country=in&language=en  `);
      const data = await response.json();
      setNews(data.results);
    };

    fetchNews();
 }, [category, apiKey]);

 return news;
};

export default useNews;
