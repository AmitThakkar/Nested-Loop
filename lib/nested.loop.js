/**
 * Created by amitthakkar on 19/07/16.
 */
exports = module.exports = (nestedDepth, loopArray) => {
    let result = [];
    if (!Array.isArray(loopArray)) {
        loopArray = [...Array(loopArray).keys()];
    }
    const tempArray = [];
    let loopOnArray = (start, index) => {
        if (index == nestedDepth) {
            result.push(tempArray.slice());
        } else {
            for (let i = start; i < loopArray.length; i++) {
                tempArray[index] = loopArray[i];
                loopOnArray(i + 1, index + 1)
            }
        }
    };
    loopOnArray(0, 0);
    return result;
};