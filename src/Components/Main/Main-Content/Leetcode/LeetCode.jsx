// LeetCode.js
import { useState } from "react";
import useFetchUserDetails from "../../../../hook/useFetchUserDetails";
import SearchInput from './SearchLeetCode/SearchInput';
import UserDetails from './UserDetailsLeetcode/UserDetails';
import LoadingUserDetails from "../../LoadingScreen/LoadingUserDetails";
import classes from './LeetCode.module.css';

const LeetCode = () => {
 const [user, setUser] = useState(null);
 const { loading, error, fetchUserDetails } = useFetchUserDetails(
 'https://leetcode-stats-api.herokuapp.com',
 setUser // Pass setUser as the callback to update the user state
);
 return (
    <section className={classes.content}>
    <h1>Leetcode</h1>
    <SearchInput onSearch={fetchUserDetails} />
    {loading ? <LoadingUserDetails /> : null}
    {error && <p>Error: {error}</p>}
    {/* Check if user is not null before rendering UserDetails */}
    {user && <UserDetails user={user} submissionCalendar={user.submissionCalendar}/>}
    </section>
 );
};

export default LeetCode;
