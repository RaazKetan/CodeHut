import { useState } from 'react';

import styles from './GitCalender.module.css';

import GitHubCalendar from 'react-github-calendar';


function GitCalender() {
const [username, setUsername] = useState('raazketan');
const [theme, setTheme] = useState('light');

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
        <div className={styles.calender}>
      <GitHubCalendar username={username} 
      colorScheme={theme}
      blockRadius={20}
      hideColorLegend={false}
      blockSize={16} blockMargin={5} />
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >Change Theme</button>
      </div>
   
    </div>
 );
}

export default GitCalender;
