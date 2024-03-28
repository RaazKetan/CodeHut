import styles from './TodayNews.module.css';
function TodaysNews() {
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
      
      
    </div>
  );
}
export default TodaysNews;