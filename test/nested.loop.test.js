/**
 * Created by amitthakkar on 19/07/16.
 */
const nestedLoop = require('../lib/nested.loop');
console.log(nestedLoop(3, 5));
/*
 * Output 
 * [ 
 *      [ 0, 1, 2 ],
 *      [ 0, 1, 3 ],
 *      [ 0, 1, 4 ],
 *      [ 0, 2, 3 ],
 *      [ 0, 2, 4 ],
 *      [ 0, 3, 4 ],
 *      [ 1, 2, 3 ],
 *      [ 1, 2, 4 ],
 *      [ 1, 3, 4 ],
 *      [ 2, 3, 4 ] 
 * ]
 * */
console.log(nestedLoop(3, [1, 2, 3, 4, 5]));
/*
 * Output
 * [
 *      [ 1, 2, 3 ],
 *      [ 1, 2, 4 ],
 *      [ 1, 2, 5 ],
 *      [ 1, 3, 4 ],
 *      [ 1, 3, 5 ],
 *      [ 1, 4, 5 ],
 *      [ 2, 3, 4 ],
 *      [ 2, 3, 5 ],
 *      [ 2, 4, 5 ],
 *      [ 3, 4, 5 ] 
 * ]
 * */