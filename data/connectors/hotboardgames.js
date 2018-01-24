import { makeBGGRequest } from '../utils/XML';
import { flatten } from '../utils/flatten';

export const hotboardgames = (root) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await makeBGGRequest('/hot?type=boardgame');
            const games = result.items.item.map(g => {
                const game = flatten(g);
                
                return {
                    id: game.id,
                    name: game.name,
                    thumbnail: game.thumbnail,
                    yearPublished: game.yearpublished
                };
            });

            resolve(games);
        }
        catch (e) {
            reject(e);
        }
    });
};