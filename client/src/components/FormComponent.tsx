import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { TODOTYPES } from "../types/types";
import { CREATE_TODO, UPDATE_TODO } from "../graphql/todos/todos_mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TODOS, GET_TODO_BY_ID } from "../graphql/todos/todos_queries";
import { toast } from "react-toastify";

const FormComponent = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const path = location.pathname;
    const { id } = useParams();
    const [ values, setValues ] = useState<TODOTYPES>({
        title: "",
        description: ""
    })
    const getTodoByID = useQuery(GET_TODO_BY_ID, {
        variables: {id}
    })
    const [createTodo] = useMutation(CREATE_TODO, {
        variables: {
            title: values?.title,
            description: values?.description
        },
        update(cache, { data: { createTodo } }) {
            const { todos } = cache.readQuery({ query: GET_TODOS });
            cache.writeQuery({
                query: GET_TODOS,
                data: { todos: [...todos, createTodo] }
            })
        }
    })
    const [ updateTodo ] = useMutation(UPDATE_TODO, {
        variables: {
            id,
            title: values?.title,
            description: values?.description
        },
        refetchQueries: [ { query: GET_TODOS }]
    })

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        setValues( ( prev ) => ( { ...prev, [name]: value } ))
    }

    const submitHandler = async () => {
        try {
            if(path.includes('/add')) {
                createTodo(values?.title, values?.description)
                toast.success("Created Successfully")
                navigate('/')
                return
            }
            if(path.includes('/update')) {
                updateTodo(id, values?.title, values?.description)
                toast.success("Updated Successfully")
                navigate('/')
                return
            }
        } catch (error) {
            toast.error("Failed to add todo")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if( path.includes('/update')) {
                const { data } = getTodoByID;
                setValues({
                    title: data?.todo.title,
                    description: data?.todo.description
                })
            }
        }
        fetchData()
    }, [ path, getTodoByID, setValues ])

    return (
        <div className="form-wrapper">
            <form>
                <h2> { path.includes('/add') ? "Add New Todo " : "Update Todo" } </h2>
                <input type="text" name="title" onChange={controlledInputs} placeholder="Title..." value={values?.title || ''} />
                <input type="text" name="description" onChange={controlledInputs} placeholder="Description..." value={values?.description || ''} />
                <button type="button" onClick={submitHandler}>
                    {
                        path.includes('/add') ?
                        "Add" :
                        "Update"
                    }
                </button>
            </form>
        </div>
    )
}

export default FormComponent