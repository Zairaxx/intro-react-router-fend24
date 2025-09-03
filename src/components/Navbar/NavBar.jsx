import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const NavBar = () => {
    return(
        <ul className={styles.navbar}>
            <li><Link to="/">Home</Link></li>
        </ul>)
    
}
export default NavBar