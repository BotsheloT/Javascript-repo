/*function calcArea(radius){
    return 3.14 * radius**2;    
}*/

const calcArea = radius => 3.14 * radius**2;

//more random arrow functions
const squareArea = side => side**side;

const triArea = (base, height) => {
    return 0.5*base*height;
}

console.log(calcArea(5));