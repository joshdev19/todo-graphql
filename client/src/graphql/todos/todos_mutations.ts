import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
    mutation createTodo( $title: String!, $description: String! ) {
        createTodo( title: $title, description: $description ) {
            id
            title
            description
        }
    }
`