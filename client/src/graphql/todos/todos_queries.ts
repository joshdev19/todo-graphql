import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query {
        todos {
            id
            title
            description
            done
        }
    }
`;

export const GET_TODO_BY_ID = gql`
    query todo( $id: ID! ) {
        todo( id: $id ) {
            id
            title
            description
        }
    }
`;