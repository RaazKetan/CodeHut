import classes from './MainContent.module.css';
import LeetCode from './Leetcode/LeetCode';
import CodeForces from './CodeForces/CodeForces';
const MainContent = () => {
        
    return (
        <div className={classes["main-content"]}>
        <LeetCode/>
        <CodeForces/>
      </div>
    );
}
export default MainContent;