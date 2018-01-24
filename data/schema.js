import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers'
import { Boardgame, HotBoardgame } from './types';

const typeDefs = `
  ${Boardgame}
  ${HotBoardgame}

  type Query {
    boardgame(id: Int!): Boardgame
    hotboardgames(id: Int): HotBoardgame
  }

  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
