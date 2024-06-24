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
    const requiredPaddingLength = Math.max(0, count - initialString.length);
    const padding = symbol.repeat(requiredPaddingLength);

    if (endOf) {
        // Додаємо символи в кінець рядка, якщо endOf == true
        return padding + initialString;
    } else {
        // Додаємо символи в початок рядка, якщо endOf == false
        return initialString + padding;
    }
}

console.log(pad ('test', '^', 6, true));