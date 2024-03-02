import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const TodosClient = new GraphQLObjectType({
    name: "TodosClient",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        done: { type: GraphQLBoolean }
    })
})