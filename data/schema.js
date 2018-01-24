import { GraphQLSchema, GraphQLList, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

// Types
import { BoardgameType, HotBoardgameType } from './types';

// Connectors (data fetching)
import { boardgame, hotboardgames } from './connectors'; 

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root',
  fields: () => ({
    boardgame: {
      type: BoardgameType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: boardgame
    },
    hotBoardgames: {
      type: new GraphQLList(HotBoardgameType),
      resolve: hotboardgames
    }
  })
})

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;
