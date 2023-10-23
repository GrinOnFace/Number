//* Методы массивов

//TODO: splice

//Если удалять так 

let arr = ["I", "go", "home"];
delete arr[1]; // удалить "go"
alert( arr[1] ); // undefined
// теперь arr = ["I",  , "home"];
alert( arr.length ); // 3

//Поэтому

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

//splice возвращает массив из удалённых элементов:

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = arr.splice(0, 2);
alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов

/*Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0: */

let arr = ["Я", "изучаю", "JavaScript"];
// с индекса 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

//TODO: slice

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

//TODO: concat

let arr = [1, 2];
// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

//! объект не скопировать 

let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]

//!Надо 
let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё

//TODO: forEach

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
});

//TODO: indexOf/lastIndexOf и includes

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

//TODO: find

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
  
let user = users.find(item => item.id == 1);
  
alert(user.name); // Вася

//TODO: findIndex, findLastIndex

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Вася"}
  ];
  
  // Найти индекс первого Васи
  alert(users.findIndex(user => user.name == 'Вася')); // 0
  
  // Найти индекс последнего Васи
  alert(users.findLastIndex(user => user.name == 'Вася')); // 3

//TODO: filter

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2

//TODO: map

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6

//TODO: sort

let arr = [ 1, 2, 15 ];
// метод сортирует содержимое arr
arr.sort();
alert( arr );  // 1, 15, 2

//! неверно(строки)

arr.sort( (a, b) => a - b ); //верно

//TODO: reverse

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

//TODO: split, join

let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша

//TODO: reduce

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

//TODO: Array.isArray

alert(typeof {}); // object
alert(typeof []); // тоже object

//! не работает верхнее, поэтому

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true