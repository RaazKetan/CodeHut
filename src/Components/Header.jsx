import classes from './Header.module.css';
const Header = () => {
    return (
        <nav className={classes["nav-bar"]}>
        <ul>
          <li>
            <a href="#">Code {'</>'} <br/> Hut</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Get Code</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Other Work</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    );
}
export default Header;