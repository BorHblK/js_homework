const fs = require('fs');

function readJSONfile(fileName, callback) {
        fs.readFile(fileName,'utf8', (err, data) => {
            if (err) {
                console.error("Помилка при читанні файлу: " + err);
                return;
                } 
            try {
                let parsedJSON = JSON.parse(data); 
                {
                    callback(parsedJSON);
                }       
            }
            catch (parseError){
                console.error("Помилка при розборі JSON: " + parseError);        
                    }
        });
    }
 
function findUserByID(id, users) {
        return users.find(user => user.id === id)
}

function displayInfoAboutUser(user){
    console.log("Інформація про користувача:");
    console.log(user);
    if (user.hobbies && user.hobbies.length > 0){
    console.log("Останнє хобі:", user.hobbies[user.hobbies.length-1]);
    }
    else {
        console.log("Хобі не знайдено.");
    }
    if (user.address && user.address.city && user.address.street) {
    console.log("Адреса:", user.address.city, user.address.street);
    }
    else 
    {   console.log("Адрес немає");
     }
}
readJSONfile('unique_users.json',(users) => {
    const user = findUserByID('0028',users);
    if (user) {
        displayInfoAboutUser(user);
    } 
    else {
        console.log ("Користувача з таким номером не знайдено.");
    }
}
)