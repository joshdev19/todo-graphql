import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TODOTYPES } from "../types/types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todos = ( { title, description, done }: TODOTYPES ) => {

    return (
        <div className="todos">
            <button type="button" className="delete">
                <FontAwesomeIcon icon={faTrash}/>
            </button>
            <h3> { title } </h3>
            <p> { description } </p>
            <div className="mark-wrapper">
                <p> Mark as done </p>
                <input type="checkbox" />
            </div>
        </div>
    )

}

export default Todos;