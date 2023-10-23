//* Массивы 

//TODO: Объявление

let arr = new Array(2);
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

//TODO: Перебор элементов

let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

let fruits = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям
for (let fruit of fruits) {
  alert( fruit );
}

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let key in arr) {
  alert( arr[key] ); // Яблоко, Апельсин, Груша
}

//TODO: length

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]
arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились

// TODO: Многомерные массивы

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, центральный элемент

//TODO: toString

let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

//! Не сравнивать массивы

alert( [] == [] ); // false
alert( [0] == [0] ); // false

alert( 0 == [] ); // true
alert('0' == [] ); // false

/*Так как же сравнить массивы?
Это просто: не используйте оператор ==. Вместо этого сравните их по элементам в цикле или используя методы итерации */
