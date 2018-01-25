import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

export const BoardGameType = new GraphQLObjectType({
    name: 'BoardGame',
    description: 'Board game',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        },
        thumbnail: {
            type: GraphQLString
        },
        yearPublished: {
            type: GraphQLString
        },
        minPlayers: {
            type: GraphQLString
        },
        maxPlayers: {
            type: GraphQLString
        },
        playingTime: {
            type: GraphQLString
        },
        minPlayTime: {
            type: GraphQLString
        },
        maxPlayTime: {
            type: GraphQLString
        },
        minAge: {
            type: GraphQLString
        }
    })
})