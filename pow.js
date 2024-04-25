


function powUp (number, degree) {
    let result = 1;
    //degree for posirive and 0
    if (degree >= 0){
        for (i = 0; i < degree; i++) {
            result *= number;
        }
    }
    //negative degree
    else  {
        for (i = 0; i < -degree; i++) {
            result /= number;
         }   
    }
   return result;
}
//setting up input 
const number = 5;
const degree = -5;
let result = powUp(number,degree)
//console output
console.log (`${number} in degree of ${degree} will be ${result}`);