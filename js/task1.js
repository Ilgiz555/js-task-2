/* обычный вариант
let P = 'ddd@bbb@ccc';
let newP = P.replace('ddd@bbb@ccc', 'ddd!bbb!ccc');
console.log(newP);
*/

let P = 'ddd@bbb@ccc';
let newP = P.replace(P[3], '!');
let newС = newP.replace(newP[7], '!');
console.log(newС);