import classes from './MainContent.module.css';
import LeetCode from './Leetcode/LeetCode';
import CodeForces from './CodeForces/CodeForces';
// import CodeChef from './CodeChef/CodeChef';
const MainContent = () => {
        
    return (
        <div className={classes["main-content"]}>
        <LeetCode/>
        <CodeForces/>
        {/* <CodeChef/> */}
      </div>
    );
}
export default MainContent;
//Ketan Raj