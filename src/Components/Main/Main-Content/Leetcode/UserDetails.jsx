// import React from 'react';
import classes from "./UserDetails.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <div className={classes.acceptanceRateCircle}>{user.acceptanceRate}%
      </div>
      <div className={classes.detailsContainer}>
        <h2 className={classes.username}>Username: {user.uname}</h2>
        <p className={classes.rank}>Rank: {user.rank}</p>
        <p className={classes.totalSolved}>
          Total Problems Solved: {user.totalSolved}
        </p>
        <p className={classes.easySolved}>
          Easy Problems Solved: {user.easySolved}
        </p>
        <p className={classes.mediumSolved}>
          Medium Problems Solved: {user.mediumSolved}
        </p>
        <p className={classes.hardSolved}>
          Hard Problems Solved: {user.hardSolved}
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
