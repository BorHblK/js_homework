const regex = /^(?=[^Aa]*$).{6,}$/;

// test data
const testStrings = [
  "abcdef",       
  "bcdefg",       
  "aBcdef",       
  "123456",       
  "12345A",       
  "bcdefghijkl",  
  "123ba"          
];
console.log(`Regex expression: ${regex}, Validating is string has 6 or more symbols and do not contain "A" and "a"`)
testStrings.forEach(str => {
  console.log(`Test data: ${str} \nIs passes regex check - ${regex.test(str)}`);
});