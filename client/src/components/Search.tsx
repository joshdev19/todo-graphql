import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    return (
        <div className="search-wrapper">
            <input type="text" placeholder="Search..."/>
            <button type="button">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    )
}

export default Search;