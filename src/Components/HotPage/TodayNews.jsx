import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from '../../assets/Images/code.jpg';
import styles from './TodayNews.module.css';

function TodaysNews() {
  const [news, setNews] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(()=>{
    async function getNews(){
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`);
      const data = await response.json();
      // console.log(data);
    }
    getNews();
  
  }, [])


  return (
    <div className={styles.main}>
      <h1>TodaysNews</h1>
      <section>
        <span>
          Categories
        </span>
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
      <section>
        <span>
          Sort By
        </span>
        <span>
          <button>Latest</button>
          <button>Popular</button>
        </span>
      </section>
      <section>
        <section ><img src={img} style={{width:'100px'}}></img></section>
        <section>
        <Link><h2>News Title</h2></Link>
        <span>News Name</span>
        <span>News author</span>
        <span>News Date</span>
        </section>
        <p>News Description</p>

      </section>
      
      
    </div>
  );
}
export default TodaysNews;
