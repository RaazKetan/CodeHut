import { useState, useCallback } from "react";
import classes from "./LeetCode.module.css";

const LeetCode = () => {
  const [username, setUsername] = useState("");
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({
    uname: "",
    currentRating: 0,
    maxRating: 0,
    currentRank: "",
    maxRank: "",
    contribution: 0,
    avatar: "",
  });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62b817e920msh60785d5a3745e62p14c4dfjsnb61a547dd414",
      "X-RapidAPI-Host": "leetcode-api.p.rapidapi.com",
    },
  };

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://leetcode-api.p.rapidapi.com/user/${username}`,
        options
      );
      const result = await response.json();
      console.log(result.data);

      // Assuming the API response structure matches the properties you're trying to set
      const userDetails = {
        uname: result.data.matchedUser.username, // Correct path to username
        rank: result.data.matchedUser.profile.ranking, // Correct path to current rating
        languages: result.data.matchedUser.languageProblemCount.map(
          (language) => ({
            name: language.languageName,
            problemsSolved: language.problemsSolved,
          })
        ),
        avatar: result.data.matchedUser.profile.userAvatar, // Correct path to avatar
        github: result.data.matchedUser.githubUrl,
        linkedin: result.data.matchedUser.linkedinUrl,
        twitter: result.data.matchedUser.twitterUrl,
        personalWebsite: result.data.matchedUser.profile.websites[0],
      };
      setUser(userDetails);
    } catch (error) {
      console.error(error);
    }
  }, [username]); // Added username to the dependency array

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchUserDetails();
    setShowUser(true);
  };

  return (
    <section className={classes["content"]}>
      <div className={classes.inputField}>
        <input
          value={username}
          onChange={onChangeHandler}
          className={classes.searchbar}
          type="text"
          placeholder="Leetcode Username"
        ></input>
        <button className={classes.searchbtn} onClick={submitHandler}>
          Search
        </button>
      </div>
      {showUser && (
        <div className={classes.container}>
          <section className={classes.socialMediaLinks}>
            <h3>Social Media Links</h3>
            <a href={user.linkedin} className={classes.socialLink}>
              LinkedIn
            </a>
            <a href={user.github} className={classes.socialLink}>
              GitHub
            </a>
            <a href={user.twitter} className={classes.socialLink}>
              Twitter
            </a>
            <a href={user.websites} className={classes.socialLink}>
              Personal Website
            </a>
          </section>
          <div className={classes.profileInfo}>
            <div className={classes.avatarContainer}>
              <img
                src={user.avatar}
                alt="User Avatar"
                className={classes.avatar}
              />
            </div>
            <div className={classes.detailsContainer}>
              <h3 className={classes.username}>Username: {user.uname}</h3>
              <h3 className={classes.rank}>Rank: {user.rank}</h3>
              <h3 className={classes.languagesTitle}>Languages:</h3>
              <p className={classes.languages}>
                {user.languages
                  ? user.languages.map((language) => language.name).join(", ")
                  : "Loading..."}
              </p>
              <h3 className={classes.totalProblemsTitle}>
                Total Problems Solved:
              </h3>
              <p className={classes.totalProblems}>
                {user.languages
                  ? user.languages.reduce(
                      (total, language) => total + language.problemsSolved,
                      0
                    )
                  : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeetCode;
