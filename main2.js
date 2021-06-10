let input = document.getElementById("input");
let output = document.getElementById("output");


function calculator(data) {
    switch(data) {
        case 'AC':
            input.innerHTML = " ";
            output.innerHTML = "0"
            break;
        case 'C':
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML) ;   
            break;
        case '=':
            output.innerHTML = math.evaluate(input.innerHTML);   
            break; 
        default:
            input.innerHTML += data;    

    }
   

}