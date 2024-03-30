import styles from './Categories.module.css';

const Categories = ({ onCategoryChange }) => {
 return (
    <section className={styles.categories}>
      <span>Categories</span>
      <span>
      <button onClick={() => onCategoryChange('startup')}>Sartup</button>
        <button onClick={() => onCategoryChange('technology')}>Technology</button>
        <button onClick={() => onCategoryChange('entertainment')}>Entertainment</button>
        <button onClick={() => onCategoryChange('science')}>Science</button>
        <button onClick={() => onCategoryChange('health')}>Health</button>
        <button onClick={() => onCategoryChange('sports')}>Sports</button>
        <button onClick={() => onCategoryChange('business')}>Business</button>
        <button onClick={() => onCategoryChange('general')}>General</button>
        <button onClick={() => onCategoryChange('politics')}>Politics</button>
        <button onClick={() => onCategoryChange('education')}>Education</button>
        <button onClick={() => onCategoryChange('automobile')}>Automobile</button>
      </span>
    </section>
 );
};

export default Categories;
