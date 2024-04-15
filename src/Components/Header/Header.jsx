// import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {

    return (
        <nav className={classes["nav-bar"]}>
        <ul>
          <li>
          <NavLink to="..">Codee {'</>'}</NavLink>
            {/* <a href="#">Codee {'</>'}</a> */}
          </li>
          <li>
          <NavLink to="..">Home</NavLink>
          </li>
          <li>
          <NavLink to="/gitcalender">Git Calender</NavLink>

          </li>
          <li>
          <NavLink >About Me</NavLink>
          </li>
          <li>
            <a href="https://ketan-raj-2-0.vercel.app/" target='_black'>Other Work</a>
          </li>
          <li>
          <NavLink to="/checkstats">Check-Stats</NavLink>
          </li>
        </ul>
      </nav>
    );
}
export default Header;