const pComputer = {
    cpu:"i5-14500k",
    ram:"16GB",
    motherboard:"Asus",
    vCard:"Radeon 6800XT",
}
function getSpecs(){
    console.log(pComputer);
}
function updateSpecs(key, value){
    pComputer[key]=value;
}
getSpecs();
updateSpecs('HDD', 'Seagate 3GB');
getSpecs();
