/**
 * Created by amitthakkar on 19/07/16.
 */
const nestedCount = 3;
const loopLength = 5;
const tempArray = [];
let loopOnLength = (start, index) => {
    if (index == nestedCount) {
        console.log(tempArray);
    } else {
        for (let i = start; i < loopLength; i++) {
            tempArray[index] = i;
            loopOnLength(i + 1, index + 1)
        }
    }
};
// loopOnLength(0, 0);

const loopArray = [1, 2, 3, 4, 5];
let loopOnArray = (start, index) => {
    if (index == nestedCount) {
        console.log(tempArray);
    } else {
        for (let i = start; i < loopArray.length; i++) {
            tempArray[index] = loopArray[i];
            loopOnArray(i + 1, index + 1)
        }
    }
};
loopOnArray(0, 0);
