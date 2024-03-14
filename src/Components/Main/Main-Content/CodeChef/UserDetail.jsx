// UserProfile.js
// import classes from "./user.module.css"; // Assuming you have a CSS module for styling

const UserProfile = ({ user }) => {
    if (!user) return <p>Loading...</p>;
   console.log(user);
   if(user.contribution=== undefined){
      user.contribution = 0;
   }
    return (
       <div >
         <div >
           <h3 >Username: {user.name}</h3> 
           <p >Rating: {user.highestRating}</p> {/* New property */}
           <p >Rank: {user.countryRank}</p> {/* Updated property name */}
           <p >Contribution: {user.contribution}</p> {/* New property */}
           <p> Starts : {user.stars}</p>
           <img src={user.profile}></img>

           {/* Display other details as needed */}
         </div>
       </div>
    );
   };
   
   export default UserProfile;
   