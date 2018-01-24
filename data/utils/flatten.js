const getObjValue = obj => {
    let ret;

    if (obj.$ && obj.$.value) {
       ret = obj.$.value;
    }

    return ret;
}

export const flatten = stacked => {
    let out = {};

    for (let key in stacked) {
        if (typeof stacked[key] === 'string') {
            out[key] = stacked[key];
        }
        else if (Array.isArray(stacked[key])) {
            if(typeof stacked[key][0] === 'object'){
                out[key] = getObjValue(stacked[key][0])
            }
            else {
                out[key] = stacked[key][0];
            }
        }
        else if (typeof stacked[key] === 'object') {
            var val = getObjValue(stacked[key]);
            out[key] = val;
        }
    }

    return out;
};