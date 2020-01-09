"use strict"


var input = document.getElementById('input');
var number = document.querySelectorAll('.numbers div');
var operator = document.querySelectorAll('.operators div');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var resultDisplayed = false; // counter
var button = document.getElementById('button');

var input1 = document.getElementById('input1');
var number1 = document.querySelectorAll('.numberscomplex div');
var operator1 = document.querySelectorAll('.operatorscomplex div');
var result1 = document.getElementById('result1');
var resultDisplayed1 = false; // counter
var clear1 = document.getElementById('clear1');


for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {

            input.innerHTML += e.target.innerHTML;

        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {

            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}




for (var i = 0; i < operator.length; i++) {


    operator[i].addEventListener("click", function (e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }


    });


}



result.addEventListener("click", function () {

    var inputString = input.innerHTML;

    var numbers = inputString.split(/\+|\-|\×|\÷/g);

    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    var divide = operators.indexOf("÷");

    while (divide != -1) {

        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");


    }


    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];
    resultDisplayed = true;

});





clear.addEventListener("click", function () {

    input.innerHTML = "";


})


button.addEventListener("click", function () {

    var div = document.getElementById('simple');
    var div1 = document.getElementById('complex');



    if (div.style.display !== 'none' && div1.style.display == 'none') {
        div.style.display = 'none';
        div1.style.display = 'block'
    } else {
        div.style.display = 'block';
        div1.style.display = 'none';

    }

});


//complex calc



for (var i = 0; i < number1.length; i++) {
    number1[i].addEventListener("click", function (e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed1 === false) {

            input1.innerHTML += e.target.innerHTML;

        } else if (resultDisplayed1 === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "^" || lastChar === "g" || lastChar === "√" || lastChar === "!") {
            resultDisplayed1 = false;
            input1.innerHTML += e.target.innerHTML;
        } else {

            resultDisplayed1 = false;
            input1.innerHTML = "";
            input1.innerHTML += e.target.innerHTML;
        }
    });
}




for (var i = 0; i < operator1.length; i++) {


    operator1[i].addEventListener("click", function (e) {

        var currentString = input1.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "√" || lastChar === "^" || lastChar === "!") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input1.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else if (lastChar === "g") {

            var newString = currentString.substring(0, currentString.length - 3) + e.target.innerHTML;
            input1.innerHTML = newString;
        } else {
            input1.innerHTML += e.target.innerHTML;
        }

        console.log(currentString)
    });


}



result1.addEventListener("click", function () {

    var inputString = input1.innerHTML;

    var numbers = inputString.split(/\l|\-|\^|\×|\√|\÷|\+/g);

    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    var divide = operators.indexOf("÷");

    console.log(operators)

    while (divide != -1) {

        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");


    }


    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    var log1 = operators.indexOf("l");
    while (log1 != -1) {

        numbers.splice(log1, 2, Math.log(numbers[log1]));
        operators.splice(log1, 1);
        log1 = operators.indexOf("l");

        //                input1.innerHTML  = inputString;
    }


    var power = operators.indexOf("^");
    while (power != -1) {
        numbers.splice(power, 2, (numbers[power], numbers[power + 1]));
        operators.splice(power, 1);
        power = operators.indexOf("^");
    }


    var root = operators.indexOf("√");
    while (root != -1) {
        numbers.splice(root, 2, Math.sqrt(numbers[root]));
        operators.splice(root, 1);
        root = operators.indexOf("√");
    }


    var fact = operators.indexOf("!");
    while (fact != -1) {
        numbers.splice(fact, 2, factorial(parseFloat(numbers[fact])));
        operators.splice(root, 1);
        fact = operators.indexOf("!");
    }





    input1.innerHTML = numbers[0];
    resultDisplayed1 = true;







});



function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}





clear1.addEventListener("click", function () {

    input1.innerHTML = "";


})
