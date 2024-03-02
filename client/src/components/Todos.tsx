import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TODOTYPES } from "../types/types";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Todos = ( { id, title, description, done }: TODOTYPES ) => {

    return (
        <div className="todos">
            <Link to={`/update/${id}`} className="edit">
                <FontAwesomeIcon icon={faEdit}/>
            </Link>
            <button type="button" className="delete">
                <FontAwesomeIcon icon={faTrash}/>
            </button>
            <p className="title"> { title.substring(0, 18) }.. </p>
            <p className="description"> { description.substring(0, 70) } .. </p>
            <div className="mark-wrapper">
                <p> Mark as done </p>
                <input type="checkbox" />
            </div>
        </div>
    )

}

export default Todos;