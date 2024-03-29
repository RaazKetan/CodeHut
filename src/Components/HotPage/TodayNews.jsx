import { useState } from 'react';
import useNews from '../../hook/useNews'; // Adjust the import path as necessary
import styles from './TodayNews.module.css';
import Categories from './Categories';
import NewsList from './NewsList';

function TodaysNews() {
 const [category, setCategory] = useState('technology');
 const apiKey = import.meta.env.VITE_API_KEY;
 const news = useNews(category, apiKey);

 function onCategoryChange(category) {
    setCategory(category);
 }

 return (
    <div className={styles.main}>
      <h1>TodaysNews</h1>
   <Categories onCategoryChange={onCategoryChange} />
     <NewsList news={news} />
    </div>
 );
}

export default TodaysNews;
