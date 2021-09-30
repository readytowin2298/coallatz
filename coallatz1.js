const process = require('process');
const colors = require('colors')

let int = process.argv[2]
let oldInt = int

console.log(`The number you picked was ${int}`);

let ticker = 0;

let solved = false

while(int !== 0){
    if(int === Infinity || int === 4){
        console.log(`${oldInt} didn't work after ${ticker} rounds. Trying ${oldInt + 1}` .yellow)
        oldInt++
        int = oldInt;
        ticker = 0;
    }
    if(int%2 === 0){
        int = int/2;
        console.log(`${int}` .red)
    } else {
        int = (int*3)+1;
        console.log(`${int}` .green)
    }
    ticker++
}



process.exit(0);