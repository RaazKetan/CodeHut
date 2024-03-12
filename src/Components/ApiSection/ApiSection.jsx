import { useState, useCallback, useEffect } from "react";
const ApiSection = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState([]);


   const onChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const fetchUserDetails = useCallback(async () => {
        try {
            // const response = await fetch(`https://codeforces.com/api/user.info?handles=${username};`); 
            const response = await fetch("https://codeforces.com/api/user.info?handles=ketanraaz");
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            const userDetails = {
                uname: data.result[0].handle,
                currentRating: data.result[0].rating,
                maxRating: data.result[0].maxRating,
                currentRank: data.result[0].rank,
                maxRank: data.result[0].maxRank,
                contribution: data.result[0].contribution,
                avatar: data.result[0].titlePhoto
            }
            setUser(userDetails);

        } catch (error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
        fetchUserDetails();
    },[fetchUserDetails,username])

  
  const submitHandler = (e) => {

        e.preventDefault();
        setUsername(e.target.value);
        fetchUserDetails();
    }
    return(
        <div>
            <h1>Api Section</h1>
            <label>Enter Username</label>
            <input type="text" onChange={onChangeHandler}  ></input>
            <button
            onClick={submitHandler} 
            >Search</button>
            <div>
                <h1>Username: {user.uname}</h1>
                <h1>Current Rating: {
                    user.currentRating
                }</h1>
                <h1>Max Rating: {user.maxRating} </h1>
                <h1>Current Rank: </h1>
                <h1>Max Rank: </h1>
                <h1>Contribution: </h1>
                <img src="" alt="avatar"></img>
            </div>
            {username && <h1>{username}</h1>}
            
        </div>       
    )
}
export default ApiSection;