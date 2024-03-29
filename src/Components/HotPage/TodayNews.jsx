import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from '../../assets/Images/code.jpg';
import styles from './TodayNews.module.css';

function TodaysNews() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('technology');


  
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(()=>{
    async function getNews(){
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`);
      const data = await response.json();
      // console.log(data);
      setNews(data.articles);
      console.log(news);
    }
    getNews();
  },)


  return (
    <div className={styles.main}>
    <h1>TodaysNews</h1>
    <section className={styles.categories}>
       <span>Categories</span>
       <span>
         <button>Technology</button>
         <button>Entertainment</button>
         <button>Science</button>
         <button>Health</button>
         <button>Sports</button>
         <button>Business</button>
         <button>General</button>
         <button>Politics</button>
         <button>Education</button>
         <button>Automobile</button>
       </span>
    </section>
    <section className={styles.sortBy}>
       <span>Sort By</span>
       <span>
         <button>Latest</button>
         <button>Popular</button>
       </span>
    </section>
    <section className={styles.news}>
      {news.map((item, index) => {
        return (
          <div key={index} className={styles.newsItem}>
            <img src={item.urlToImage ? item.urlToImage : img} alt="news" />
            <div>
              <h2>{item.title}</h2>
              <span>{item.author}</span>
              <span>{item.publishedAt}</span>
              <p>{item.description}</p>
              <Link to={item.url} target="_blank">Read More</Link>
            </div>
          </div>
        )
      })}
   </section>
  </div>
   
  );
}
export default TodaysNews;
