import { makeBGGRequest } from './utils/XML';

export const boardgame = (root, { id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const game = await makeBGGRequest(`/thing?type=boardgame&id=${id}`);

            resolve({
                id,
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