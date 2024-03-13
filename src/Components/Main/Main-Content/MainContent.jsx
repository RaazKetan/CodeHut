import classes from './MainContent.module.css';
import LeetCode from './Leetcode/LeetCode';
const MainContent = () => {
        
    return (
        <div className={classes["main-content"]}>
        <LeetCode/>
        <section className={classes["content-codeforces"]}>
          <h1>codeforces</h1>
        </section>
      </div>
    );
}
export default MainContent;