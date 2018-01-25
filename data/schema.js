import { GraphQLSchema, GraphQLList, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

// Types
import {
  BoardGameSearchResult,
  BoardGameType,
  HotBoardGameType
} from './types';

// Connectors (data fetching)
import { boardGame, hotBoardGames, searchBoardGames } from './connectors'; 

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root',
  fields: () => ({
    boardgame: {
      type: BoardGameType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: boardGame
    },
    hotBoardgames: {
      type: new GraphQLList(HotBoardGameType),
      resolve: hotBoardGames
    },
    search: {
      type: new GraphQLList(BoardGameSearchResult),
      args: {
        query: {
          type: GraphQLString
        }
      },
      resolve: searchBoardGames
    }
  })
})

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;
