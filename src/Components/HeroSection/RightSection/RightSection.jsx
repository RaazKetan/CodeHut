import classes from "./RightSection.module.css";
import image from "../../../assets/Images/code.jpg";
const RightSection = () => {
  return (
    <div className={classes["hero-section__image"]}>
      {/* <span className={classes.infoAboutStreak}>
        <span>
          <span>
            <h1>20+</h1>
            <h5> Highest Streak</h5>
          </span>
          <span>
            <h1>400+</h1>
            <h5>Question Solved</h5>
          </span>
        </span>
      </span> */}
      <img src={image} alt="CodeHut" />
    </div>
  );
};
export default RightSection;
