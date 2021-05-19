alert('Задание#0 (угадай число) Версия2\n Число четырехзначное, цифры не повторяются')
function randomNum() {
   var a = 0;
   var b = 0;
   var c = 0;
   var d = 0;
   while (b == a || c == a || d == a || b == c || b == d || d == c || a == 0) {
      b = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      c = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      d = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      a = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
   }
   return String(a) + String(b) + String(c) + String(d);
}


var count = 0;
var STOP = '';
var secret_number = randomNum();

alert('Браузер загадал число, угадайте его\nДля выхода введите "stop" вместо числа')

while (STOP.toLowerCase() != 'stop') {
   count += 1;
   var user_number = prompt("Попытка № " + count + "\nВведите число");
   STOP = user_number;

   if (secret_number == user_number) {
      alert('Вы угадали!\nБыло загадано число: ' + secret_number)
   }
   else {
      var cow_dict = new Set();
      if (secret_number[0] == user_number[0]) {
         alert('Бык: ' + user_number[0] + '***')
         cow_dict.add(user_number[0])
      }
      if (secret_number[1] == user_number[1]) {
         alert('Бык: ' + '*' + user_number[1] + '**')
         cow_dict.add(user_number[1])
      }
      if (secret_number[2] == user_number[2]) {
         alert('Бык: ' + '**' + user_number[2] + '*')
         cow_dict.add(user_number[2])
      }
      if (secret_number[3] == user_number[3]) {
         alert('Бык: ' + '***' + user_number[3])
         cow_dict.add(user_number[3])
      }
      for (let i = 0; i < 4; i++) {
         if (secret_number.indexOf(user_number[i]) > -1 && !(cow_dict.has(user_number[i]))) {
            alert('Корова: ' + user_number[i]);
         }
      }
   }
}

/////////////////////////////////////1//////////////////////////////////////////
alert('Задание#1\n Вывести простые числа до 100 при помощи while')
var max = 100;
var min = 2;
var check_min = 2;
// var indication = 1;
while (min <= max) {
   var indication = 1;
   while (check_min < min) {
      if (min % check_min == 0) {
         indication = 0;
      }
      check_min += 1;
   }
   if (indication == 1) {
      alert(min);
   }
   check_min = 2;
   min += 1;
}
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////2-3////////////////////////////////////////
alert('Задание#2-3\n Функциональность подсчета стоимости корзины интернет магазина\nСумма будет выведена на страницу')
let backet = [
   {name: "Товар1", price: 100000 },
   {name: "Товар2", price: 1000},
   {name: "Товар3", price: 10000},
 ];
function countBasketPrice(basket, discount=1){
   if (typeof(basket) == 'object'){
      var sum = 0;
      basket.forEach((item, index, array) => {
         sum = sum + item.price;
      });
      return parseFloat((sum*discount)/100);
   }
   else {
      alert('Ошибка. Вы передали в функцию не массив, а что-то другое...')
   }
}
document.writeln('Сумма корзины равна: ' + countBasketPrice(backet, 0.75).toFixed(2) + ' рублей<br>');
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////4//////////////////////////////////////////
alert('Задание#4\n Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.')
for (i = 0; i < 10; alert(i++)) { }
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////5//////////////////////////////////////////
alert('Задание#5\n Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке')
for (i = 1; i < 21; i++) {
   console.log('*'.repeat(i))
}
document.writeln('Нажмите F5 для перезапуска ДЗ')