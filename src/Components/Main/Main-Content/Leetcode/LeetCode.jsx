// LeetCode.js
import { useState } from "react";
import useFetchUserDetails from "../../../../hook/useFetchUserDetails";
import SearchInput from './SearchInput';
import UserDetails from './UserDetails';
import classes from './LeetCode.module.css';

const LeetCode = () => {
 const [user, setUser] = useState(null);
 const { loading, error, fetchUserDetails } = useFetchUserDetails(
 'https://leetcode-stats-api.herokuapp.com',
 setUser // Pass setUser as the callback to update the user state
);

 return (
    <section className={classes.content}>
      <SearchInput onSearch={fetchUserDetails} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && <UserDetails user={user}/>}
    </section>
 );
};

export default LeetCode;
