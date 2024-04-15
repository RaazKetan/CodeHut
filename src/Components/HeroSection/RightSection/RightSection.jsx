import classes from "./RightSection.module.css";
import image from "../../../assets/Images/code.jpg";
const RightSection = () => {
  return (
    <div className={classes["hero-section__image"]}>
      <img src={image} alt="CodeHut" />
    </div>
  );
};
export default RightSection;
