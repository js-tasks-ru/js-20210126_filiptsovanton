/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const copyObj = {...obj};
    const objKeys = Object.keys(copyObj);
    const resObj = {};
    objKeys.forEach(e => {
        if(!fields.includes(e)){
            resObj[e] = copyObj[e]
        }
    })
    return resObj;
};
