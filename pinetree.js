
//Variant 1
let isInverter = false;
function drawPineTree (height, symbol, inverter) {
    if (inverter == false){
        for ( i = 1; i <= height; i++){
            let line = '';
                for ( j = 1; j <= i; j++){
                    line += symbol;
                }
            console.log(line);
        }        
    }
    else {
        for ( i = height; i > 0; i--){
            let line = '';
            for ( j = 1; j <= i; j++){
                line += symbol;
            }
        console.log(line);
        }
    }    
}
// enter - height, -symbol pinetree to be created , - isInverted? (true/false) or (1/0) ;
drawPineTree (5, '$', 0);
