setTimeout(reminder, 5000);
function reminder() {
 alert("Так и будешь смотреть на эту скучную страницу?");
}


var car = "Audi";
var power = 500;
if (power > 400) {
 alert("This page is for fast cars only!");
} else {
 alert("Welcome " + car + " owner!");
}

var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";
var color = COLOR_ORANGE;
alert( color ); // #FF7F00

alert( 1 / 0 ); // Infinity
alert("не число" * 2 ); // NaN, ошибка
var str = "Мама мыла раму";
str = "Одинарные кавычки тоже подойдут";

typeof undefined;        // undefined
typeof 0;                // number
typeof true;             // boolean
typeof "foo";            // string
typeof {};               // object
typeof null;             // object
typeof function(){};     // function