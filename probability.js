function probability(count){
    const min = 100;
    const max = 1000;
    let evenCount = 0;
    let oddCount = 0;
    
    // Генеруємо випадкові числа та рахуємо кількість парних та непарних
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;               
        if (randomNumber % 2 === 0) {
            // Збільшуємо лічильник парних чисел
            evenCount++; 
        } else {
            // Збільшуємо лічильник непарних чисел
            oddCount++; 
        }
    }
    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;
   
    // Виводимо результати
    console.log(`Генеруємо ${count} рандомних чисел від ${min} до ${max}......`);
    console.log("Результати:");
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "%", oddPercentage.toFixed(2) + "%");
}
probability(100000);