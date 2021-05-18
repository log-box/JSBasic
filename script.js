// alert('Задание#0 (угадай число) Версия2')
function randomNum() {
   var a = 0;
   var b = 0;
   var c = 0;
   var d = 0;
   while (b == a || c == a || d == a || b == c || b == d || d == c || a == 0 ) {
      b = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      c = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      d = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      a = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
   }
   return String(a) + String(b) + String(c) + String(d);
 }

var cow_dict = new Set(); 
var count = 0;
var STOP = '';
var secret_number = randomNum();

alert('Браузер загадал число, угадайте его\nДля выхода введите "stop" вместо числа')

while (STOP.toLowerCase() != 'stop') {
   var user_number=prompt("Введите число");
   STOP = user_number;
   count += 1;
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
      alert('Бык: ' + '***' + user_number[3] )
      cow_dict.add(user_number[3])
   }
   for (let i = 0; i > 3; i++) {
      


   }

}   



//     if (user_number > secret_number) {
//         alert('Загаданное число меньше.\nВы загадывали:' + user_number  + '\nКоличество попыток = ' + count);
//     }
//     else if (user_number < secret_number) {
//         alert('Загаданное число больше.\nВы загадывали:' + user_number  + '\nКоличество попыток = ' + count);
//     }
//     else if (user_number == secret_number) {
//         alert('Вы уагадали, браузер загадал число: ' + secret_number + '\nКоличество попыток = ' + count);
//         count = 0;
//         alert('Браузер загадал новое число... Играем');
//         secret_number = randomInteger(1, 9999);
//     }
// } 