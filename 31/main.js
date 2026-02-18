(function() {
// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
function calculateFinalPrice(price, sale, tax) {
  price -= price * (sale/100);
  price += price * tax;
  return price;
} 
// Пример работы:
console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAccess(name, password){
  if(name == "admin" && password == "123456"){
    return "Доступ разрешен"; 
  } else return "Доступ запрещен"; 
}

console.log(checkAccess("admin", 123456));
console.log(checkAccess("a1dmin", 123456));
console.log(checkAccess("admin", 123426));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
const getTimeOfDay = function (time){
  switch (true) {
    case 18 <= time  && time <= 23:
      return "Вечер";
    case 12 <= time && time <= 17:
      return "День";
    case 6 <= time  && time<= 11:
      return "Утро";
    case 0 <= time && time <= 5:
      return "Ночь";
    default:
      return "Некорректное время";
  }
}

console.log(getTimeOfDay(1));
console.log(getTimeOfDay(8));
console.log(getTimeOfDay(15));
console.log(getTimeOfDay(19));
console.log(getTimeOfDay(50));
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".
function findFirstEven(start, end){
  for(let i = start; i <= end; i++){
    if(i % 2 == 0){
      return i;
    }
  }
  return "Чётных чисел нет"; 
}
// Пример работы:
console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
})()