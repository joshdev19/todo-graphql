import { GraphQLSchema } from "graphql";
import { RootQueries } from "./queries";
import { RootMutations } from "./mutations";

export const schema = new GraphQLSchema({
    query: RootQueries,
    mutation: RootMutations
})