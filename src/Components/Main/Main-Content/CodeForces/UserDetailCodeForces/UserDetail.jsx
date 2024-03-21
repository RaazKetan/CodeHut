import classes from "./UserDetails.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {
 if (!user) return <p>Loading...</p>;
 const userDetails = user.result[0];

 // Convert registrationTimeSeconds and lastOnlineTimeSeconds to date strings in "date month in short then year" format
 const registrationDate = new Date(userDetails.registrationTimeSeconds * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
 const lastSeenDate = new Date(userDetails.lastOnlineTimeSeconds * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

 return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={userDetails.avatar} alt="User Avatar" />
      </div>
      <div className ={classes.userInfo}>
        <p>Max Rating: {userDetails.maxRating}</p> 
        <p>Current Rating: {userDetails.rating}</p>
        <p>Rank: {userDetails.rank}</p>
        <p>Contribution: {userDetails.contribution}</p> 
        <p>Registered: {registrationDate}</p>
        <p>Last Seen: {lastSeenDate}</p>
      </div>
    </div>
 );
};

export default UserProfile;
