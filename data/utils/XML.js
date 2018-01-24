import * as axios from 'axios';
const parseXML = require('xml2js').parseString;
import { flatten } from './flatten';

const baseURL = `https://www.boardgamegeek.com/xmlapi2`;
const axiosOptions = {
    responseType: 'document'
};

export const makeBGGRequest = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`${baseURL}/${url}`, axiosOptions);

            // Convert XML to JS
            parseXML(data, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    const item = result.items.item[0];
                    const flattenedItem = flatten(item);

                    resolve(flattenedItem);
                }
            });
        }
        catch (e) {
            reject(e);
        }
    });
}