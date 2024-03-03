import Todos from "./Todos"
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/todos/todos_queries";
import { TODOTYPES } from "../types/types";

const TodosWrapper = () => {

    const { data, error, loading } = useQuery(GET_TODOS);
    
    return (
        <div className="todos-wrapper">
            {
                error && (
                    <p> Error... </p>
                )
            }
            {
                loading && (
                    <p> Loading... </p>
                )
            }
            {
                data && data.todos?.map( ( d:TODOTYPES ) => <Todos key={d?.id} {...d} />)
            }
        </div>
    )
}

export default TodosWrapper