import classes from "./Main.module.css";
import MainContent from "./Main-Content/MainContent";

const Main = () => {
 
  return (
    <div id="main" className={classes.main}>
      <div className={classes["main-heading"]}>
        Please Enter Your <span> CODING </span> Platforms <span> USERNAME</span>
      </div>
      <MainContent />
    
    </div>
  );
};
export default Main;
