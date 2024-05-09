function pad (initialString, symbol, count, endOf) {
    if (typeof initialString !== 'string'){
        console.log("1st parameter Not a string")
        return;
    }
    if (typeof symbol !== 'string'){
        console.log("2nd parameter Not a string")
        return;
    }
    if (!Number.isInteger(count) || count < 0){
        console.log("3rd parameter Not an int")
        return;
    }
    if (typeof endOf !== 'boolean'){
        console.log("4th parameter Not a boolean")
        return;
    }
    // Створюємо рядок з 'count' повторень 'symbol'
    const padding = symbol.repeat(count);  

    if (endOf) {
        // Додаємо символи в кінець рядка, якщо endOf == true
        return initialString + padding;
    } else {
        // Додаємо символи в початок рядка, якщо endOf == false
        return padding + initialString;
    }
}

console.log(pad ('test', '^', 50, false));