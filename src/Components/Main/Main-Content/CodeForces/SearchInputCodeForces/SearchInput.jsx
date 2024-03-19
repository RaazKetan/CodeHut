// components/SearchInput.js
import React from 'react';
import classes from './SearchInput.module.css';

const SearchInput = ({ onSearch }) => {
 const [username, setUsername] = React.useState('');

 const handleChange = (e) => {
    setUsername(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={handleChange}
        type="text"
        className={classes.searchbar}
        placeholder="CodeForces Username"
        // className={searchbar}
      />
      <button type="submit" className={classes.searchbtn}>Search</button>
    </form>
 );
};

export default SearchInput;
