const display = document.getElementById('display');


function toDisplay(input){
    display.value += input;
     if (justCalculated) {
        display.value = input;
        justCalculated = false;
    
}}
function clearDisplay(){
    display.value = "";
    

}
function calculate(){
    display.value = eval(display.value);
     justCalculated = true;
    
}
