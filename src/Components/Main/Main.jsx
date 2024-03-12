import classes from './Main.module.css';
const Main = () => {
    return (
        <div className ={classes.main}>
            <div className={classes["main-heading"]}>
             Please Enter Your <span> CODING </span> Platforms <span> USERNAME 
             </span>
            </div>
            <div className={classes["main-content"]}>
                <section className={classes["content-leetcode"]}>
                    <input type="text" placeholder="Enter Your Leetcode Username" />
                    <button>Submit</button>
                    <h1>leetcode</h1>

                </section>
                <section className={classes["content-codeforces"]}>
                    <h1>codeforces</h1>
                </section>
            </div>
        </div>
    )
}
export default Main;