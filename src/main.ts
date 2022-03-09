import add from './add';
// LAB: Importar subtraction
import subtract from './subtraction';


let result = add(4, 5);
let output = document.querySelector('#output');
if (output) {
    output.innerHTML = result.toString();
}

// LAB: Invocar subtraction
let sub_result = subtract(100, 1);
let sub_output = document.querySelector('#sub_output');
if (sub_output){
    sub_output.innerHTML = sub_result.toString();
}

