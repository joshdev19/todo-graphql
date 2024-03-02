import { GraphQLList, GraphQLObjectType } from "graphql";
import { TodosClient } from "./client_types";
import { performDataConnection } from "../database/database";
import { statments } from "../sql-statements/sql";

export const RootQueries = new GraphQLObjectType({
    name: "TodosQueries",
    fields: {
        todos: {
            type: new GraphQLList(TodosClient),
            async resolve() {
                return await performDataConnection(statments.getTodos, '');
            }
        }
    }
})