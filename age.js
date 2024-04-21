let continueInput = true;
//відкриваємо цикл безкінечності :) 
do {
    let ageInput = prompt("Введіть кількість років:");
    // валідаться що значення є позитивним числом
    if (ageInput !== null && ageInput !== "" && !isNaN(ageInput) && ageInput>=0)
    {
        
        const lastDigit = ageInput % 10;
        const lastTwoDigits = ageInput % 100;

        let output;

        if ((lastTwoDigits >= 11 && lastTwoDigits <= 14) || (lastDigit === 0) || (lastDigit >= 5 && lastDigit <= 9)) {
            output = ageInput + " років";
        } else if (lastDigit === 1) {
            output = ageInput + " рік";
        } else {
            output = ageInput + " роки";
        }
        alert(output);                 
    }
else {
    alert("Введіть число яке більше або рівно 0 ");
}
//повертаємось на вхід а закриваємо безкінечність
continueInput = confirm("Чи хочете ви спробувати ще раз?");
} while (true);
