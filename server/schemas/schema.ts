import { GraphQLSchema } from "graphql";
import { RootQueries } from "./queries";

export const schema = new GraphQLSchema({
    query: RootQueries
})