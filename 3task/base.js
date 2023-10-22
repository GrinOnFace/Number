//* Объявление переменных

//TODO: Используйте ключевое слово `var` для объявления переменной (устаревший способ)
var oldVariable = "Я устарел";

//TODO: Используйте ключевое слово `let` для объявления переменной, ограниченной областью видимости
let modernVariable = "Я современен";

//TODO: Используйте ключевое слово `const` для объявления константной переменной
const constantVariable = "Я неизменен";

//TODO: Примеры и правила именования переменных

let имяПеременной = "Значение переменной"; // Имя переменной может содержать буквы, цифры, символы $ и _
let number1 = 10; // Можно использовать цифры в имени переменной, но имя не должно начинаться с цифры
let $money = 100; // Можно использовать символ $
let _private = "Специальный символ _ также допустим";

//TODO: Примеры неправильных имен переменных
//! let 1number = 5; // Начинается с цифры
//! let my-variable = "Ошибка"; // Содержит дефис, что не допускается

//TODO: Правила объявления переменных

//TODO: Переменные могут быть объявлены повторно с использованием `var`
var x = 5;
var x = 10; // Это допустимо

//TODO: `let` и `const` не позволяют повторно объявлять переменные внутри одной области видимости
let y = 5;
//! let y = 10; // Это вызовет ошибку

//TODO: Переменные могут быть неинициализированными
let uninitializedVar;

//TODO: Значение переменной может быть изменено после инициализации
let mutableVar = 100;
mutableVar = 200;

//TODO: Константные переменные нельзя переопределить
const unchangeableVar = "Я неизменен";
//! unchangeableVar = "Попытка изменения"; // Это вызовет ошибку

//TODO: Область видимости переменных

//TODO: Глобальные переменные объявлены вне функций и доступны повсюду
let globalVar = "Глобальная переменная";

function someFunction() {
  //! Переменные, объявленные внутри функции, видны только в этой функции (локальная область видимости)
  let localVar = "Локальная переменная";
  console.log(globalVar); // Глобальную переменную можно использовать внутри функции
}

for(let i = 0; i < 5; i++){
  var glob = "Текст"
}
console.log(glob)

//TODO: Переменные, объявленные с `let` или `const`, имеют блочную область видимости
if (true) {
  let blockVar = "Переменная с блочной областью видимости";
}

//! console.log(blockVar); // Ошибка - переменная blockVar недоступна за пределами блока

//* Типы данных 

//* Примитивные типы данных (Primitive Data Types)

//TODO: 1. Числа (Numbers)
let num = 42;
let float = 3.14;

//TODO: 2. Строки (Strings)
let text = "Привет, мир!";
let singleQuotes = 'Одинарные кавычки тоже допустимы';

//TODO: 3. Булевы значения (Booleans)
let isTrue = true;
let isFalse = false;

//TODO: 4. Undefined (Неопределенное значение)
let und = undefined;

//TODO: 5. Null (Пустое значение)
let empty = null;

//* Составные типы данных (Composite Data Types)

//TODO: 7. Массивы (Arrays)
let fruits = ["яблоко", "банан", "апельсин"];

//TODO: 8. Объекты (Objects)
let person = {
  firstName: "Иван",
  lastName: "Иванов",
  age: 30,
};

//TODO: 9. Функции (Functions)
function greet(name) {
  return "Привет, " + name + "!";
}

//TODO: 10. Даты (Dates)
let today = new Date();

//* Специальные типы данных

//TODO: 13. NaN (Not-a-Number)
let notANumber = NaN;

//TODO: 14. Infinity (Бесконечность)
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

//TODO: Проверка типов данных

typeof num; // "number"

//* Явное преобразование типов (Type Casting)

//TODO: Преобразование в строку
let num = 42;
let str = String(num);

//TODO: Преобразование в число
let strNum = "123";
let parsedNum = parseInt(strNum);

//TODO: Преобразование в логический тип
let truthyStr = "true";
let isTruthy = Boolean(truthyStr);

//* Неявное преобразование типов (Type Coercion)

//TODO: Преобразование в число
let addition = "10" + 5; // "105"

//TODO: Преобразование в строку
let subtraction = "10" - 5; // 5

//TODO: Преобразование в логический тип
let truthy = 1;
let falsy = 0;

//TODO: Строки сравниваются лексикографически
let compareStrings = "apple" > "banana"; // false

//TODO: Преобразование в логический тип (falsy значения)
let emptyString = "";
let zero = 0;
let undefinedValue = undefined;
let nullValue = null; 
let falseValue = false;

//TODO: Преобразование в логический тип (truthy значения)
let nonEmptyString = "Hello";
let nonZero = 42;
let object = { key: "value" };

//TODO: Логическое НЕ
let notOperator = !true; // false

//TODO: Логическое И
let andOperator = true && false; // false

//TODO: Логическое ИЛИ
let orOperator = true || false; // true

//*alert, comfirm, prompt (Тут про dom, bom)

//TODO: alert

//alert("Привет, пользователь! Это важное сообщение.");

//TODO: сomfirm

// const userAgreed = confirm("Вы согласны продолжить?");
// if (userAgreed) {
//   alert("Вы согласились продолжить.");
// } else {
//   alert("Вы отменили операцию.");
// }

//TODO: prompt

// const userName = prompt("Пожалуйста, введите ваше имя:");
// if (userName !== null) {
//   alert(`Привет, ${userName}!`);
// } else {
//   alert("Вы отменили ввод имени.");
// }

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

//TODO: Пример справочника для цветов с использованием цикла while
const colorsWhile = ['Красный', 'Синий', 'Зеленый', 'Желтый'];
let i = 0;

while (i < colorsWhile.length) {
  console.log(`Цвет ${i + 1}: ${colorsWhile[i]}`);
  i++;
}

//TODO: Пример справочника для фруктов с использованием цикла for
const fruitsFor = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];

for (let j = 0; j < fruitsFor.length; j++) {
  console.log(`Фрукт ${j + 1}: ${fruitsFor[j]}`);
}

//TODO: Пример справочника для дней недели с использованием оператора switch
const day = 'Понедельник';

switch (day) {
  case 'Понедельник':
    console.log('Сегодня - Понедельник');
    break;
  case 'Вторник':
    console.log('Сегодня - Вторник');
    break;
  case 'Среда':
    console.log('Сегодня - Среда');
    break;
  case 'Четверг':
    console.log('Сегодня - Четверг');
    break;
  case 'Пятница':
    console.log('Сегодня - Пятница');
    break;
  case 'Суббота':
    console.log('Сегодня - Суббота');
    break;
  case 'Воскресенье':
    console.log('Сегодня - Воскресенье');
    break;
  default:
    console.log('Некорректный день недели');
}

//* Функции (Разница между ними + как работает js (Рекурсия))

//* Function Declaration

function sayHello(name) {
  console.log(`Привет, ${name}!`);
}

//TODO: с аргументами по умолчанию:

function greet(name = "Гость") {
  console.log(`Привет, ${name}!`);
}

greet(); // Выведет "Привет, Гость!"
greet("Джон"); // Выведет "Привет, Джон!"

//TODO: Рекурсивные функции

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Выведет 120

sayHello("Алиса");

//TODO: Function Expression

const sayGoodbye = function(name) {
  console.log(`До свидания, ${name}!`);
};

sayGoodbye("Боб");

//TODO: Arrow func

const add = (a, b) => a + b;
console.log(add(2, 3)); // Выведет 5

//TODO: Функции коллбеки

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

//TODO: Замыкания (собес)

//Как исполняется по строчкам

const x = 1

const y = function(){
  const u = "HI"
  console.log(u)
}

y()

//TODO: Вопрос для занятия

let x = 1
const y = function(){
  const u = "HI"
  console.log(u)
}
x = 2
y()

//? Что вызовется

let x = 1
const y = function(){
  const u = "HI"
  console.log(u)
}
x = 2
y()
x = 3 

//? А сейчас

//! Теперь совсем пиздец

function makeCounter(count){
  return function(){
    return count++
  }
}

let counter = makeCounter(0)
let counter2 = makeCounter(0)

console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())