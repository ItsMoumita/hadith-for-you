// math object - module scaffolding
const math ={};



// generate random number between two numbers in javascript

math.getRandomNumber = function getRandomNumber(min,max) {
    let minimum = min;
    let maximum = max;

    return Math.floor(Math.random() * (maximum - minimum +1) + minimum);
}


export default math;