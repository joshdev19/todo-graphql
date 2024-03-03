import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { TodosClient } from "./client_types";
import { performDataConnection } from "../database/database";
import { statments } from "../sql-statements/sql";

export const RootMutations = new GraphQLObjectType({
    name: "Root_Mutations",
    fields: {
        createTodo: {
            type: TodosClient,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                done: { type: GraphQLString },
            },
            async resolve( p, a ) {
                const newValues = [ a?.title, a?.description, a?.done ]
                const { affectedRows }: any = await performDataConnection(statments.createTodo, [newValues])
                if ( affectedRows > 0 ) {
                    return {
                        title: a?.title,
                        description: a?.description,
                        done: a?.done
                    }
                }
                else {
                    return {
                        title: "Failed to add todo",
                        desciption: "Failed to add todo",
                        done: "Failed to add todo"
                    }
                }
            }
        },
        updateTodo: {
            type: TodosClient,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                done: { type: GraphQLString },
            },
            async resolve( p, a ) {
                const { affectedRows }: any = await performDataConnection(statments.updateTodo, [ a?.title, a?.description, a?.done, a?.id ]);
                if( affectedRows > 0 ) {
                    return {
                        id: a?.id,
                        title: a?.title,
                        description: a?.description,
                        done: a?.done,
                    }
                }
                else {
                    return {
                        title: "Failed to update the todo",
                        description: "Failed to update the todo",
                        done: "Failed to update the todo",
                    }
                }
            }
        },
        deleteTodo: {
            type: TodosClient,
            args: { id: { type: GraphQLID } },
            async resolve( p, a ) {
                const data: any = await performDataConnection(statments.getTodosByID, [a?.id]);
                const { affectedRows }: any = await performDataConnection(statments.deleteTodo, [a?.id]);
                if( affectedRows > 0 ) {
                    return data[0]
                }
                else {
                    return {
                        title: "Failed to delete the todo",
                        description: "Failed to delete the todo",
                        done: "Failed to delete the todo",
                    }
                }
            }
        }
    }
})