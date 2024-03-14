// UserProfile.js
// import classes from "./UserDetails.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {
 if (!user) return <p>Loading...</p>;
console.log(user.result[0].rating);
 return (
    <div >
      <div >
        {/* <h2 >Username: {user.handle}</h2> Updated property name */}
        <p >Rank: {user.rank}</p> {/* Updated property name */}
        <p >Rating: {user.rating}</p> {/* New property */}
        <p >Max Rating: {user.maxRating}</p> {/* New property */}
        {/* Display other details as needed */}
      </div>
    </div>
 );
};

export default UserProfile;
