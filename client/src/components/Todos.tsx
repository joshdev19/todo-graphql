import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TODOTYPES } from "../types/types";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/todos/todos_mutations";
import { GET_TODOS } from "../graphql/todos/todos_queries";
import { toast } from "react-toastify";

const Todos = ( { id, title, description, done }: TODOTYPES ) => {

    const [ deleteTodo ] = useMutation(DELETE_TODO, {
        variables: { id },
        refetchQueries: [ { query: GET_TODOS } ]
    })

    const deleteHandler = async () => {
        try {
            deleteTodo(id)
            toast.success("Deleted Successfully")
        } catch (error) {
            alert("may error")
        }
    }

    return (
        <div className="todos">
            <Link to={`/update/${id}`} className="edit">
                <FontAwesomeIcon icon={faEdit}/>
            </Link>
            <button type="button" className="delete" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
            <p className="title"> { title.substring(0, 18) }.. </p>
            <p className="description"> { description.substring(0, 70) } .. </p>
            <div className="mark-wrapper">
                <p>{ done == "false" ? "mark as done" : "marked as done" }</p>
                <input type="checkbox" defaultChecked={ done == "false" ? false : true}/>
            </div>
        </div>
    )

}

export default Todos;