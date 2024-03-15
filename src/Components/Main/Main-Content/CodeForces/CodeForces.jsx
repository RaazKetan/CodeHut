// CodeForces.js
import { useState } from 'react'; // Make sure to import useState
import useFetchUserDetails from '../../../../hook/useFetchUserDetails';
import SearchInput from './SearchInputCodeForces/SearchInput'; // Make sure to import SearchInput
import UserDetail from './UserDetailCodeForces/UserDetail'; // Make sure to import UserDetail

const CodeForces = () => {
    const [user, setUser] = useState(null);
 const { loading, error, fetchUserDetails } = useFetchUserDetails(
   'https://codeforces.com',
   setUser // Pass setUser as the callback to update the user state
 );

 return (
    <div>
    <h1>CodeForces</h1>
      <SearchInput onSearch={fetchUserDetails} /> {/* Render the search input */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && <UserDetail user={user}/>}
    </div>
 );
};

export default CodeForces;
