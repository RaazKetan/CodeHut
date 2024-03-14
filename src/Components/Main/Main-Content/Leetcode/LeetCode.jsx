// LeetCode.js
import { useState, useCallback } from 'react';
import SearchInput from './SearchInput';
import UserDetails from './UserDetails';
import classes from './LeetCode.module.css';

const LeetCode = () => {
 const [user, setUser] = useState(null);
 const fetchUserDetails = useCallback(async (username) => {
    
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com//${username}`);
      const result = await response.json();
      console.log(result);
      const userDetails = {
        uname:username,
        status: result.status,
        totalSolved: result.totalSolved,
        easySolved: result.easySolved,
        mediumSolved: result.mediumSolved,
        hardSolved: result.hardSolved,
        rank: result.ranking,
        contributionPoints: result.contributionPoints,
        reputation: result.reputation,
        acceptanceRate: result.acceptanceRate
      };
      setUser(userDetails);
    } catch (error) {
      console.error(error);
    }
 }, [setUser]);

 return (
    <section className={classes.content}>
      <SearchInput onSearch={fetchUserDetails} />
      {user && <UserDetails user={user} />}
    </section>
 );
};

export default LeetCode;
