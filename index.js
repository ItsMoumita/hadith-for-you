// Title : Basic Node app example
// Description: Simple node application that print random hadith per second interval 
// Author: Moumita

// dependencies
import hadith from "./lib/hadith/index.js";
import math from "./lib/math.js"

// module scaffolding 
const app = {};


app.printAHadith = function printAHadith() {

    const allHadith = hadith.allHadith();
    const numOfHadith = allHadith.length;
    
    const getRandomNumber = math.getRandomNumber(1, numOfHadith);

    const selectedHadith = allHadith[getRandomNumber - 1];
    console.log(selectedHadith);
}



app.printAHadith();