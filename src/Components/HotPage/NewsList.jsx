import { Link } from 'react-router-dom';
import styles from './NewsList.module.css'; // Adjust the import path as necessary
import img from '../../assets/Images/code.jpg'; // Adjust the import path as necessary

const NewsList = ({ news }) => {
 return (
    <section className={styles.news}>
      {news.map((item, index) => (
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
      ))}
    </section>
 );
};

export default NewsList;
