import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

export const BoardGameSearchResult = new GraphQLObjectType({
    name: 'BoardGameSearchResult',
    description: 'Board game result from using search API',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        yearPublished: {
            type: GraphQLString
        },
        matchPercentage: {
            type: GraphQLString
        }
    })
});
