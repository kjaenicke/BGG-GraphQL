import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

export const HotBoardgameType = new GraphQLObjectType({
    name: 'HotBoardgame',
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
