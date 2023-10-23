//* Базовые математические операторы

let x = 10;
let y = 5;

//TODO: Сложение
let sum = x + y; // 15

//TODO: Вычитание
let difference = x - y; // 5

//TODO: Умножение
let product = x * y; // 50

//TODO: Деление
let quotient = x / y; // 2

//TODO: Остаток от деления (модуль)
let remainder = x % y; // 0

//TODO: Возведение в степень
let power = x ** y; // 100000

//TODO: Инкремент и декремент

let a = 5;

//TODO: Инкремент (увеличение на 1)
a++; // Теперь 'a' равно 6

//TODO: Декремент (уменьшение на 1)
a--; // Теперь 'a' равно 5 (вернулись к исходному значению)

//* Комбинированные операторы

let number = 10;

//TODO: Сокращенная запись для number = number + 5
number += 5; // Теперь 'number' равно 15

//TODO: Сокращенная запись для number = number - 3
number -= 3; // Теперь 'number' равно 12

//TODO: Сокращенная запись для number = number * 2
number *= 2; // Теперь 'number' равно 24

//TODO: Сокращенная запись для number = number / 4
number /= 4; // Теперь 'number' равно 6

//* Операторы сравнения

let a = 10;
let b = 5;

//TODO: Равенство
let isEqual = a == b; // false

//TODO: Неравенство
let isNotEqual = a != b; // true

//TODO: Больше
let isGreater = a > b; // true

//TODO: Меньше
let isLess = a < b; // false

//TODO: Больше или равно
let isGreaterOrEqual = a >= b; // true

//TODO: Меньше или равно
let isLessOrEqual = a <= b; // false

//* Операторы нулевого слияния и присваивания

let x = null;
let y = "Значение y";
let result = x ?? y;
console.log(result); // "Значение y"