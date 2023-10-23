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
