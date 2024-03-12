import classes from './HeroSection.module.css';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
const HeroSection = () => {
        return(
            <div className={classes["hero-section"]}>
                <LeftSection/>
               <RightSection/>
            </div>
           
        );
};
export default HeroSection;