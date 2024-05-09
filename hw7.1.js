//Використовуєм Метод всередені об"єкту
const pComputerMethod = {
    cpu:"i5-14500k",
    ram:"16GB",
    motherboard:"Asus",
    vCard:"Radeon 6800XT",

    getSpecs(){
        let specs = '';
        for (let key in this){            
            // Переконуємося, що значення не є функцією
            if (typeof this[key] !== 'function'){
            specs += `\n${key}: ${this[key]}, `;            
        }
        }
        console.log(specs);
},
    updateSpecs(key, value){
        pComputerMethod[key]=value;
}
}
pComputerMethod.getSpecs();
pComputerMethod.updateSpecs('HDD', 'Seagate 3GB');
pComputerMethod.getSpecs();

//використовуєм окремі функції поза об"єктом
const pComputerFunction = {
    cpu:"i5-14500k",
    ram:"16GB",
    motherboard:"Asus",
    vCard:"Radeon 6800XT",
}
//повертає весь об"єкт
function getSpecs(){
        console.log(pComputerFunction);
}
//оновлюємо об"єкт
function updateSpecs(key, value){
    pComputerFunction[key]=value;
}
getSpecs();
updateSpecs('HDD', 'Seagate 3GB');
getSpecs();    