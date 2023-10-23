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
