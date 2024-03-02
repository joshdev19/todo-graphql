import { Link } from "react-router-dom";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Search from "./Search";

const Header = () => {
    return (
        <nav>
            <Link to="/" className="logo"> TODO APP </Link>
            <Search/>
            <Link to="/add" className="add">
                <FontAwesomeIcon icon={faAdd}/>
                <p> TODO </p>
            </Link>
        </nav>
    )
}

export default Header;