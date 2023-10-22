//* Числа

//TODO: Способы записи чисел 

let billion = 1000000000;
let billion = 1_000_000_000

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

//Другими словами, "e" умножает число на 1 с указанным количеством нулей.

1e3 === 1 * 1000 // e3 означает *1000
1.23e6 === 1.23 * 1000000 // e6 означает *1000000

//И наоборот

let ms = 1e-6; // шесть нулей слева от 1

//TODO: toString(base)

//Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//TODO: Округление 

//Math.floor
//Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.

//Math.ceil
//Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.

//Math.round
//Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

//TODO: toFixed

//Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.

//! alert( 0.1 + 0.2 ); // 0.30000000000000004 

//*Можно так 
//let sum = 0.1 + 0.2;
//alert( sum.toFixed(2) ); // 0.30

//TODO: Другие проверки

//isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

//isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

//TODO: parseInt и parseFloat

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
alert( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x тоже работает
alert( parseInt('2n9c', 36) ); // 123456

//TODO: Другие мат функции

/*Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)*/

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (любое количество псевдослучайных чисел)

/*Math.max(a, b, c...) / Math.min(a, b, c...)
Возвращает наибольшее/наименьшее число из перечисленных аргументов. */

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

/*Math.pow(n, power)
Возвращает число n, возведённое в степень power */

alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024

//* Строки

//TODO: кавычки
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

//TODO:Спецсимволы 

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

alert(str1 == str2); // true

//TODO: Длина строки

alert( `My\n`.length ); // 3

//TODO: Доступ к символам

let str = `Hello`;
// получаем первый символ
alert( str[0] ); // H
alert( str.at(0) ); // H
// получаем последний символ
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

//TODO: Строки неизменяемы

let str = 'Hi';
str[0] = 'h'; // ошибка
alert( str[0] ); // не работает

//! надо 

let str = 'Hi';
str = 'h' + str[1]; // заменяем строку
alert( str ); // hi

//TODO: Изменение регистра

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( 'Interface'[0].toLowerCase() ); // 'i'

//TODO: Поиск подстроки

//str.indexOf

/*Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений. */

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

//Можно 2 параметр

str.lastIndexOf(substr, position) //С конца

//TODO: includes, startsWith, endsWith

alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

//TODO: Получение подстроки

/*str.slice(start [, end])
Возвращает часть строки от start до (не включая) end. */

let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );

let str = "stringify";
alert( str.slice(2) ); // ringify, с позиции 2 и до конца

let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert( str.slice(-4, -1) ); // gif

/*str.substring(start [, end])
Возвращает часть строки между start и end (не включая) end.
Это — почти то же, что и slice, но можно задавать start больше end.
Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.*/

let str = "stringify";
// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)

/*str.substr(start [, length])
Возвращает часть строки от start длины length. */

let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );

let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert( str.substr(-4, 2) );

//TODO: Сравнение строк

alert( 'a' > 'Z' ); // true

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

//* Массивы 

//TODO: Объявление

let arr = new Array();
let arr = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits[0] ); // Яблоко
alert( fruits[1] ); // Апельсин
alert( fruits[2] ); // Слива

alert( fruits.length ); // 3

//!В массиве могут храниться элементы любого типа.

// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
// получить элемент с индексом 1 (объект) и затем показать его свойство
alert( arr[1].name ); // Джон
// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

let fruits = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

//TODO: pop

let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удаляем "Груша" и выводим его
alert( fruits ); // Яблоко, Апельсин

//TODO: push

let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");
alert( fruits ); // Яблоко, Апельсин, Груша

//TODO: shift

let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift() ); // удаляем Яблоко и выводим его
alert( fruits ); // Апельсин, Груша

//TODO: unshift

let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');
alert( fruits ); // Яблоко, Апельсин, Груша

//! Можно так

let fruits = ["Яблоко"];
fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");
// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert( fruits );
