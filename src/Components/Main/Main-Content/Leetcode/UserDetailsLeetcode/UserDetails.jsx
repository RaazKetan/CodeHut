// import React from 'react';
import classes from "./UserDetails.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {

  return (
    <div className={classes.container}>
      <div className={classes.acceptanceRateCircle}  >{user.acceptanceRate}%</div>
      <div className={classes.detailsContainer}>
        <p className={classes.rank}>Rank: {user.ranking}</p>
        <p className={classes.totalSolved}>
          Total Problems Solved: {user.totalSolved}
        </p>
        <p className={classes.easySolved}>
          Easy : {user.easySolved}
        </p>
        <p className={classes.mediumSolved}>
          Medium : {user.mediumSolved}
        </p>
        <p className={classes.hardSolved}>
          Hard : {user.hardSolved}
        </p>
        <p className={classes.contributionPoints}>
          Contribution Points: {user.contributionPoints}
        </p>
        <p className={classes.reputation}>Reputation: {user.reputation}</p>
      </div>
    </div>
  );
};

export default UserProfile;
