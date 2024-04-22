
// number is a string , adding 3 to a string result a string, afterward same
expression = 'number' + 3 + 3;
console.log(expression);
// null is nothing adding 3 to nothing results 3
expression = null + 3;
console.log(expression);
//logical && returns last true 
expression = 5 && "qwerty";
console.log(expression);
// + converts string to number if can then adding string to the end
expression = +'40' + +'2' + "hillel";
console.log(expression);
//result is false because 10 converting to number and result of '-' comapring to 6
expression ='10' - 5 === 6;
console.log(expression);
//true converting to 1 and false to 0 
expression =true + false
console.log(expression);
//error of trying converting string to number
expression ='4px' - 3
console.log(expression);
//succsefful converting string to number results a succsefful mathematical operation
expression ='4' - 3
console.log(expression);
//as of mathematical at first we degree 3 in 0 = 1 then concatenation with string '6' if we had '+'6'' then it would be number
expression =+'6' + 3 ** 0;
console.log(expression);
//12 number division by 6 as number
expression = 12 / '6'
console.log(expression);
//at first we checking logical === after it returns 'false' - we adding it to the string as text
expression ='10' + (5 === 6);
console.log(expression);
//null and empty string are different therefore can't be true of comprassion
expression =null == ''
console.log(expression);
//as of mathematical at first we make operations inside () afterwards we taking degree of such operation
expression =3 ** (9 / 3);
console.log(expression);
//Both are compared as existing not empty string therefore both returns true and expression itself returns true
expression =!!'false' == !!'true'
console.log(expression);
//logical expression priority && before || , they return boolean '0' && 1 > 1  > 0 || 1  > 1
expression =0 || '0' && 1
console.log(expression);
// + converts null to 0 therfore it's true therefore true as 1 <  1 is false
expression =(+null == false)  < 1;
console.log(expression);
// false AND true -> returns false, false OR true  -> returns true
expression = false && true  || true
console.log(expression);
//first () which result is true, false AND true returns false
expression = false && (false || true);
console.log(expression);
// first () in which null converted to number returns 0, 0 == false - returns true 
// 1 degree of 5 is 1 . therefore 1<1 - false
expression = (+null == false)  < 1 ** 5;
console.log(expression);
