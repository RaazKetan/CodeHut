import classes from "./UserDetails.module.css"; 

const calculateSubmissionStats = (submissionCalendar) => {
 let totalSubmissions = 0;
 let maxSubmissions = 0;
 let maxDate = null;

 if (submissionCalendar) {
    for (const timestamp in submissionCalendar) {
      const submissionCount = submissionCalendar[timestamp];
      totalSubmissions += submissionCount;
      if (submissionCount > maxSubmissions) {
        maxSubmissions = submissionCount;
        maxDate = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
      }
    }
 }

 return { totalSubmissions, maxSubmissions, maxDate };
};

const UserProfile = ({ user, submissionCalendar }) => {
 const { totalSubmissions, maxSubmissions, maxDate } = calculateSubmissionStats(submissionCalendar);

 return (
    <div className={classes.container}>
      <div className={classes.acceptanceRateCircle}>{user.acceptanceRate}%</div>
      <div className={classes.detailsContainer}>
        <p className={classes.rank}>Rank: {user.ranking}</p>
        <p className={classes.totalSolved}>
          Total Problems Solved: {user.totalSolved}
        </p>
        <p className={classes.easySolved}>
          Easy: {user.easySolved}
        </p>
        <p className={classes.mediumSolved}>
          Medium: {user.mediumSolved}
        </p>
        <p className={classes.hardSolved}>
          Hard: {user.hardSolved}
        </p>
        {submissionCalendar && Object.keys(submissionCalendar).length > 0 ? (
          <>
            <p className={classes.totalSubmissions}>
              Total Submissions: {totalSubmissions}
            </p>
            <p className={classes.maxSubmissions}>
              Max Submissions: {maxSubmissions} on {maxDate ? maxDate.toLocaleDateString() : 'N/A'}
            </p>
          </>
        ) : (
          <p>No submission records available.</p>
        )}
        <p className={classes.contributionPoints}>
          Contribution Points: {user.contributionPoints}
        </p>
        <p className={classes.reputation}>Reputation: {user.reputation}</p>
      </div>
    </div>
 );
};

export default UserProfile;
