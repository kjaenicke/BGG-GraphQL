import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers'
import { Boardgame } from './types';

const typeDefs = `
  ${Boardgame}

  type Query {
    boardgame(id: Int!): Boardgame
  }

  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
