import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

export const HotBoardGameType = new GraphQLObjectType({
    name: 'HotBoardGame',
    description: 'Board game on the hot list',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        thumbnail: {
            type: GraphQLString
        },
        yearPublished: {
            type: GraphQLString
        }
    })
});
