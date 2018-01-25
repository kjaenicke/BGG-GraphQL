import { flatten, getEditDistance, makeBGGRequest } from '../utils';

export const searchBoardGames = (root, { query }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await makeBGGRequest(
                `/search?type=boardgame&query=${encodeURIComponent(query)}`
            );

            const games = result.items.item.map(g => {
                const game = flatten(g);

                if (query.toUpperCase() !== game.name.toUpperCase()) {
                    if (game.name.length > query.length){
                        game.matchPercentage = (100 - (game.name.length - getEditDistance(query, game.name) / game.name.length));
                    }
                    else {
                        game.matchPercentage = (100 - (query.length - getEditDistance(query, game.name) / query.length));
                    }
                }
                else{
                    game.matchPercentage = 100;
                }
                
                return {
                    id: game.id,
                    name: game.name,
                    yearPublished: game.yearpublished,
                    matchPercentage: game.matchPercentage
                };
            });

            const sorted = games.sort((a, b) => {
                return (a.matchPercentage > b.matchPercentage) ? -1 : ((b.matchPercentage > a.matchPercentage) ? 1 : 0);
            });

            resolve(games);
        }
        catch (e) {
            reject(e);
        }
    });
};