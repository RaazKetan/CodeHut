import { useState } from 'react';

import styles from './GitCalender.module.css';

import GitHubCalendar from 'react-github-calendar';


function GitCalender() {

 return (
    <div className={styles.main}>
      <h1>GitHub Contributions Calendar</h1>
      <GitHubCalendar username="raazketan" blockSize={15} blockMargin={5} />
   
    </div>
 );
}

export default GitCalender;
