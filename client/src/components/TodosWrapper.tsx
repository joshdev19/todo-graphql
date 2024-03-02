import Todos from "./Todos"
import { Data } from '../../data'
import { useEffect, useState } from "react";

const TodosWrapper = () => {

    // Temporary
    const [ data, setData ] = useState();

    useEffect(() => {
        setData(Data);
    }, setData)

    return (
        <div className="todos-wrapper">
            {
                data && data.map( d => <Todos key={d?.id} {...d} />)
            }
        </div>
    )
}

export default TodosWrapper