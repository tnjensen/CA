import { Link } from "react-router-dom";
import styles from './nav.module.css';

function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;