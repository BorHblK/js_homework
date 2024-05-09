function myIsNaN (value){
    // Спочатку конвертуємо value в число. Якщо воно не є числом, результатом буде NaN.
    const number = Number(value);
    // Потім перевіряємо, чи є конвертоване значення NaN.
    return number !== number;
}
console.log(myIsNaN(NaN))


function testMyIsNaN() {
    console.assert(myIsNaN(NaN) === isNaN(NaN), 'Test NaN');
    console.assert(myIsNaN(123) === isNaN(123), 'Test number');
    console.assert(myIsNaN('abc') === isNaN('abc'), 'Test string');
    console.assert(myIsNaN(undefined) === isNaN(undefined), 'Test undefined');
    console.assert(myIsNaN(Infinity) === isNaN(Infinity), 'Test Infinity');
    console.assert(myIsNaN(null) === isNaN(null), 'Test null');
    console.assert(myIsNaN(0) === isNaN(0), 'Test zero');
    console.assert(myIsNaN('') === isNaN(''), 'Test empty string');
}

testMyIsNaN();