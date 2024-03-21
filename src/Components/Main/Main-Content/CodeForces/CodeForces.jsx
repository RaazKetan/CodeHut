// CodeForces.js
import { useState } from 'react'; // Make sure to import useState
import useFetchUserDetails from '../../../../hook/useFetchUserDetails';
import SearchInput from './SearchInputCodeForces/SearchInput'; // Make sure to import SearchInput
import UserDetail from './UserDetailCodeForces/UserDetail'; // Make sure to import UserDetail
import LoadingUserDetails from '../../LoadingScreen/LoadingUserDetails';
import classes from './CodeForces.module.css';
const CodeForces = () => {
    const [user, setUser] = useState(null);
 const { loading, error, fetchUserDetails } = useFetchUserDetails(
   'https://codeforces.com',
   setUser // Pass setUser as the callback to update the user state
 );

 return (
    <section className={classes.CodeForcecontent}>
    <h1>CodeForces</h1>
      <SearchInput onSearch={fetchUserDetails} /> {/* Render the search input */}
      {loading ? <LoadingUserDetails />: null}
      {error && <p>Error: {error}</p>}
      {user && <UserDetail user={user}/>}
    </section>
 );
};

export default CodeForces;
