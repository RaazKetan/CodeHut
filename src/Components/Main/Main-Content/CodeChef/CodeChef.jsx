import { useState } from "react";
import useFetchUserDetails from '../../../../hook/useFetchUserDetails';
import SearchInput from './SearchInput';
import UserDetail from './UserDetail';


const CodeChef = () => {
    const [user, setUser] = useState(null);
    const { loading, error, fetchUserDetails } = useFetchUserDetails(
        'https://codechef-api.vercel.app/',
        setUser
    );

    return (
        <div>
        <h1>CodeChef</h1>
            <SearchInput onSearch={fetchUserDetails} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && <UserDetail user={user} />}
        </div>
    );
}
export default CodeChef;