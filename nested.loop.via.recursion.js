/**
 * Created by amitthakkar on 19/07/16.
 */
const nestedCount = 2;
const loopLength = 5;
const tempArray = [];
let loop = (start, index) => {
    if (index == nestedCount) {
        console.log(tempArray);
    } else {
        for (let i = start; i < loopLength; i++) {
            tempArray[index] = i;
            loop(i + 1, index + 1)
        }
    }
};
loop(0, 0);
