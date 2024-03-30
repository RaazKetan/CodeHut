
import { Link } from 'react-router-dom';
import styles from './NewsList.module.css'; // Adjust the import path as necessary

const NewsList = ({ news }) => {
 return (
    <div className={styles.newsList}>
      {news.map((article) => (
        <div key={article.article_id} className={styles.newsItem}>
          <img src={article.image_url} alt={article.title} />
          <div>
            <h2>{article.title}</h2>
            {article.creator && <span>By {article.creator}</span>}
            <span>{article.pubDate}</span>
            <p>{article.description}</p>
            <Link to={article.link} target="_blank">Read More</Link>
          </div>
        </div>
      ))}
    </div>
 );
};

export default NewsList;
