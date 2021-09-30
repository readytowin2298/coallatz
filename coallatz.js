const process = require('process');
const colors = require('colors')

let int = process.argv[2]
let oldInt = int

console.log(`The number you picked was ${int}`);

let ticker = 0;

while(int !== 0){
    if(int === 1){
        console.log(`It took ${ticker} rounds for ${oldInt} to resolve as 1` .yellow)
        if(ticker === 3){process.exit(0)}
        int = ticker
        oldInt = int
        ticker = 0
    }
    else if(int%2 === 0){
        int = int/2;
        console.log(`${int}` .red)
    } else {
        int = (int*3)+1;
        console.log(`${int}` .green)
    }
    ticker++
}



process.exit(0);