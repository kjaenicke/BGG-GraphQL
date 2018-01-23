import { makeBGGRequest } from './utils/XML';

export const boardgame = (root, { id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await makeBGGRequest(`/thing?type=boardgame&id=${id}`);
            const game = response.items.item[0];

            resolve({
                id,
                description: game.description[0],
                thumbnail: game.thumbnail[0],
                yearPublished: game.yearpublished[0],
                minPlayers: game.minplayers[0],
                maxPlayers: game.maxplayers[0],
                playingTime: game.playingtime[0],
                minplayTime: game.minplaytime[0],
                maxplayTime: game.maxplaytime[0],
                minAge: game.minage[0]
            });
        }
        catch (e){
            reject(e);
        }
    });
};