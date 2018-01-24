import { boardgame, hotboardgames } from './connectors';

export const resolvers = {
    Query: {
        boardgame,
        hotboardgames
    }
}