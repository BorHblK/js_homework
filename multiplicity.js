let sum = 0; 
let i = 1;
while (i <= 100) {
    if (i % 3 !== 0) {
        sum += i;
    }
    i++;
}

console.log("Сума чисел від 1 до 100, які не кратні 3 = " + sum);