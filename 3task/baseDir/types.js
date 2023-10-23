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