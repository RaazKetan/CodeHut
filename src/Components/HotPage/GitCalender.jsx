import { useState } from 'react';
import styles from './GitCalender.module.css';
import GitHubCalendar from 'react-github-calendar';

function GitCalender() {
  const [username, setUsername] = useState('raazketan');
  const [newUsername, setNewUsername] = useState('');
  const [theme, setTheme] = useState('light');

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setUsername(newUsername);
  };

  return (
    <div className={styles.main}>
      <h1>GitHub Contributions Calendar</h1>
      <h5>Enter your GitHub username to see your contributions calendar</h5>
      <form onSubmit={handleUsernameSubmit}>
        <div className={styles.search}>
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameChange}
            placeholder="Enter your GitHub username"
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div className={styles.calender}>
        <GitHubCalendar
          username={username}
          colorScheme={theme}
          blockRadius={20}
          hideColorLegend={false}
          blockSize={16}
          blockMargin={5}
        />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default GitCalender;