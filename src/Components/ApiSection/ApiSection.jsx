import { useState, useCallback } from "react";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '62b817e920msh60785d5a3745e62p14c4dfjsnb61a547dd414',
        'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com'
    }
};
try {
	const response = await fetch("https://leetcode-api.p.rapidapi.com/user/ketanraaz", options);
	const data = await response.json();
	console.log(data.data.matchedUser);
} catch (error) {
	console.error(error);
}


const ApiSection = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({
        uname: "",
        currentRating: 0,
        maxRating: 0,
        currentRank: "",
        maxRank: "",
        contribution: 0,
        avatar: ""
    });
    
    
    // let url = 'https://leetcode-api.p.rapidapi.com/user/ketanraaz';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '62b817e920msh60785d5a3745e62p14c4dfjsnb61a547dd414',
            'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com'
        }
    };
    
    
    const fetchUserDetails = useCallback(async () => {
        
        
try {
	const response = await fetch(`https://leetcode-api.p.rapidapi.com/user/${username}`, options);
	const result = await response.text();
	console.log(result.data);
} catch (error) {
	console.error(error);
}
    //     // try {
    //     //     const response = await fetch(`https://codeforces.com/api/user.info?handles=${username};`);
    //     //     if (!response.ok) {
    //     //         throw new Error('Something went wrong!');
    //     //     }
    //     //     const data = await response.json();
    //     //     // Check if data.result[0] exists before accessing its properties
    //     //     if (data.result && data.result.length > 0) {
    //     //         const userDetails = {
    //     //             uname: data.result[0].handle,
    //     //             currentRating: data.result[0].rating,
    //     //             maxRating: data.result[0].maxRating,
    //     //             currentRank: data.result[0].rank,
    //     //             maxRank: data.result[0].maxRank,
    //     //             contribution: data.result[0].contribution,
    //     //             avatar: data.result[0].titlePhoto
    //     //         }
    //     //         setUser(userDetails);
    //     //     } else {
    //     //         alert('User not found or no data available.');
    //     //     }
    //     // } catch (error) {
    //     //     alert(error.message);
    //     // }

            


    }, [username]); // Added username to the dependency array

    const onChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetchUserDetails();
    }

    return (
        <div>
            <h1>Api Section</h1>
            <label>Enter Username</label>
            <input type="text"
                value={username}
                onChange={onChangeHandler}
            />
            <button onClick={submitHandler}>Search</button>
            <div>
                <h1>Username: {user.uname}</h1>
                <h1>Current Rating: {user.currentRating}</h1>
                <h1>Max Rating: {user.maxRating}</h1>
                <h1>Current Rank: {user.currentRank}</h1>
                <h1>Max Rank: {user.maxRank}</h1>
                <h1>Contribution: {user.contribution}</h1>
                <img src={user.avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default ApiSection;
