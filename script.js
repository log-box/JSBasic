alert('Задание#0 (угадай число)')

function randomInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var count = 0;
var GUESS = '';
var secret_number = randomInteger(1, 9999);

alert('Браузер загадал число, угадайте его\nДля выхода введите "stop" вместо числа')
while (GUESS.toLowerCase() != 'stop') {
    var user_number=prompt("Введите число");
    GUESS = user_number;
    user_number = parseInt(user_number);
    count += 1;
    if (user_number > secret_number) {
        alert('Загаданное число меньше.\nВы загадывали:' + user_number  + '\nКоличество попыток = ' + count);
    }
    else if (user_number < secret_number) {
        alert('Загаданное число больше.\nВы загадывали:' + user_number  + '\nКоличество попыток = ' + count);
    }
    else if (user_number == secret_number) {
        alert('Вы уагадали, браузер загадал число: ' + secret_number + '\nКоличество попыток = ' + count);
        count = 0;
        alert('Браузер загадал новое число... Играем');
        secret_number = randomInteger(1, 9999);
    }
} 



///////////////////////////////1////////////////////////////
alert('Задание#1 (пояснения в комментариях в коде)')
// var a = 1, b = 1, c, d; //в постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.
// c = ++a; alert(c); // 2. а увеличился на 1 и стал равным 2 и присвоился к переменной с
// d = b++; alert(d); // 1. b со значением 1 присвоился к переменной d, а потом увеличился на 1 
// c = (2+ ++a); alert(c); // 5. переменная а увеличилас на 1 и стала равной 3. К 2 прибавили 3 и все присвоили переменной с, которая стала равной 5: 2+3 = 5
// d = (2+ b++); alert(d); // 4. Переменная b равна 2 (из-за прошлых операций) 2+2 = 4. Увеличение переменной b на 1 происходит после арифметичеыской операции.
// alert(a); // 3. переменная а равна 3 по результатам прошлых операций. Строчка кода 34
// alert(b); // 3. в строчке кода 35 переменная b увеличилась на 1 и стала равной 3
// /////////////////////////////////////////////////////////

// ////////////////////////////2////////////////////////////
alert('Задание#2')
var a = 2;
var x = 1 + (a *= 2); //5. *= сокращенная запись умножения себя на значение. 1 + (2 * 2) = 5
alert(x)
////////////////////////////////////////////////////////////

///////////////////////////////3////////////////////////////
alert('Задание#3')

var a = randomInteger(-999, 999);
var b = randomInteger(-999, 999);
if (a>=0 && b>=0){
    var c = a-b
    alert('Разница ' + a + ' и ' + b + ' равна: ' + c );
}
else if (a<0 && b <0) {
    var c = a*b
    alert('Произведение ' + a + ' и ' + b + ' равно: ' + c );
}
else {
    var c = a+b
    alert('Сумма ' + a + ' и ' + b + ' равна: ' + c );
}
////////////////////////////////////////////////////////////

///////////////////////////////4////////////////////////////
alert('Задание#4')
a = randomInteger(0, 15);
switch(a) {
    case 0:
        alert('0')
    case 1:
        alert('1')        
    case 2:
        alert('2')
    case 3:
        alert('3')
    case 4:
        alert('4')        
    case 5:
        alert('5')
    case 6:
        alert('6')
    case 7:
        alert('7')        
    case 8:
        alert('8')
    case 9:
        alert('9')
    case 10:
        alert('10')        
    case 11:
        alert('11')
    case 12:
        alert('12')
    case 13:
        alert('13')        
    case 14:
        alert('14')
    case 15:
        alert('15')
}
////////////////////////////////////////////////////////////

///////////////////////////////5////////////////////////////
alert('Задание#5')
function _sum(a,b){
    return  parseFloat(a)+parseFloat(b)
}

function _dif(a,b){
    return  parseFloat(a)-parseFloat(b)
}

function _mul(a,b){
    return  parseFloat(a)*parseFloat(b)
}

function _div(a,b){
    return  parseFloat(a)/parseFloat(b)
}

alert(_sum(2,3))
alert(_dif(2,3))
alert(_mul(2,3))
alert(_div(2,3))
////////////////////////////////////////////////////////////

///////////////////////////////6////////////////////////////
alert('Задание#6')
function mathOperation(arg1, arg2, operation){
    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);
    switch(operation) {
        case '+':
            return arg1+arg2;
        case '-':
            return arg1-arg2;
        case '*':
            return arg1*arg2;
        case '/':
            return arg1/arg2;
        default:
            alert('Вы ошиблись с оператором')
}
}
alert(mathOperation(2, 3, '+'))
alert(mathOperation(2, 3, '-'))
alert(mathOperation(2, 3, '*'))
alert(mathOperation(2, 3, '/'))
mathOperation(2, 3, '//')
////////////////////////////////////////////////////////////

///////////////////////////////7////////////////////////////
alert('Задание#7')

alert(0 == null) // false потому что 0 тип int, а null свой отдельный тип

alert('"0 == null"\nfalse потому что 0 тип int, а null свой отдельный тип')
////////////////////////////////////////////////////////////

///////////////////////////////8////////////////////////////
alert('Задание#8')

function power(val, pow){
    if (pow <= 1) {
        return val
    }
    else {
        return val * power(val, pow - 1)
    }
}

alert(power(2,10)) //32
////////////////////////////////////////////////////////////


document.write("<h1>Нажмите F5 для перезапуска домашней работы :)</h1>");