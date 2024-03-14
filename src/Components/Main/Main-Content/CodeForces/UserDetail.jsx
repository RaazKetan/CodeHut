// UserProfile.js
// import classes from "./UserDetails.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {
 if (!user) return <p>Loading...</p>;
const userDetails = user.result[0];
console.log(userDetails);
 return (
    <div >
      <div >
        <h3 >Username: {userDetails.handle}</h3> Updated property name
        <p >Rating: {userDetails.maxRating}</p> {/* New property */}
        <p >Rank: {userDetails.rank}</p> {/* Updated property name */}
        <p >Contribution: {userDetails.contribution}</p> {/* New property */}
        <img src={userDetails.avatar}></img>
        {/* Display other details as needed */}
      </div>
    </div>
 );
};

export default UserProfile;
