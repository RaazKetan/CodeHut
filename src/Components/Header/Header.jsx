// import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {

  const check = ( ) => {
    document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
  }
    return (
        <nav className={classes["nav-bar"]}>
        <ul>
          <li>
          <Link>Codee {'</>'}</Link>
            {/* <a href="#">Codee {'</>'}</a> */}
          </li>
          <li>
          <Link>Home</Link>
          </li>
          <li>
          <a href="https://github.com/RaazKetan/CodeHut" target="_blank" rel="noopener noreferrer">Get Code</a>

          </li>
          <li>
          <Link >About Me</Link>
          </li>
          <li>
            <a href="https://ketan-raj-2-0.vercel.app/" target='_black'>Other Work</a>
          </li>
          <li>
          <Link  onClick={check}>Get Started</Link>
          </li>
        </ul>
      </nav>
    );
}
export default Header;