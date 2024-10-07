const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function square (num){
    return num * num;
}

function cube (num){
    return num * num * num;
}

function factorial (num){
    if (num === 0 || num === 1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

input.onchange = () => {
    var num = input.value;
    if(isNaN(num)){
        para.textContent = "Please enter a valid number";
    } else {
        para.textContent = 
            num 
            + " square is " + square(num) 
            + " and " 
            + num + " cube is " + cube(num) 
            + " and " 
            + num + " factorial is " + factorial(num);
    }
};