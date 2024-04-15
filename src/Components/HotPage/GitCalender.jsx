import { useState } from 'react';

import styles from './GitCalender.module.css';

import GitHubCalendar from 'react-github-calendar';


function GitCalender() {
const [username, setUsername] = useState('raazketan');
 return (
    <div className={styles.main}>
      <h1>GitHub Contributions Calendar</h1>
      <div className={styles.search}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your GitHub username"/>
        <button onClick={() => setUsername(username)}>Submit</button>
        </div>
      <GitHubCalendar username={username} 
      colorScheme='light'
      blockRadius={20}
      year={2020}
      blockSize={15} blockMargin={5} />
   
    </div>
 );
}

export default GitCalender;
