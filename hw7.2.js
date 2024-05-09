const carServices = {
    "мийка": "500 грн",
    "холодний воск": "100 грн",
    "гарячий воск" : "200",
    "пилосос" : "100",
    };

function price (services){
    let total = 0;
    for (let key in services) {
        const price = parseInt(services[key]);
        if (!isNaN(price)) {
            total += price;
        }
    }
    return total + " грн";
}

function minPrice(services){
    let min = Infinity;
    for (let key in services) {
        const price = parseInt(services[key]);
        if (!isNaN(price) && price < min) {
            min = price;
        }
    }
    return min === Infinity ? "немає послуг" : min + " грн";

}
function maxPrice(services){
    let max = 0;
    for (let key in services) {
        const price = parseInt(services[key]);
        if (!isNaN(price) && price > max) {
            max = price;
        }
    }
    return max + " грн";

}
function addService(key, value){
    carServices[key]=value;
}


console.log ("Суммарна вартість послуг: ", price(carServices));
console.log ("Найдешевша послуга вартує: ", minPrice(carServices));
console.log ("Найдорожча послуга вартує: ", maxPrice(carServices));
addService('видалення мошки','1250 грн')
console.log ("Суммарна вартість послуг: ", price(carServices));
console.log ("Найдешевша послуга вартує: ", minPrice(carServices));
console.log ("Найдорожча послуга вартує: ", maxPrice(carServices));