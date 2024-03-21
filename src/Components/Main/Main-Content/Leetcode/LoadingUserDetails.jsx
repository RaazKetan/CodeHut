// LoadingUserDetails.js
import classes from './LoadingUserDetails.module.css'; // Make sure to create this CSS module

const LoadingUserDetails = () => {
 return (
    <div className={classes.container}>
      <div className={classes.acceptanceRateCircle}></div>
      <div className={classes.detailsContainer}>
        <div className={classes.rank}></div>
        <div className={classes.totalSolved}></div>
        <div className={classes.easySolved}></div>
        <div className={classes.mediumSolved}></div>
        <div className={classes.hardSolved}></div>
        <div className={classes.totalSubmissions}></div>
        <div className={classes.maxSubmissions}></div>
        <div className={classes.contributionPoints}></div>
        <div className={classes.reputation}></div>
      </div>
    </div>
 );
};

export default LoadingUserDetails;
