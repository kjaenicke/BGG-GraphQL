import { flatten, makeBGGRequest } from '../utils';

export const boardGame = (root, { id }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const result = await makeBGGRequest(`/thing?type=boardgame&id=${id}`);
            const game = flatten(result.items.item[0]);

            resolve({
                id: game.id,
                description: game.description,
                thumbnail: game.thumbnail,
                yearPublished: game.yearpublished,
                minPlayers: game.minplayers,
                maxPlayers: game.maxplayers,
                playingTime: game.playingtime,
                minPlayTime: game.minplaytime,
                maxPlayTime: game.maxplaytime,
                minAge: game.minage
            });
        }
        catch (e){
            reject(e);
        }
    });
};