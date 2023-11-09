//* spread

function sum(a, b) {
    return a + b;
}
alert( sum(1, 2, 3, 4, 5) );

//TODO: Cуть 

function sumAll(...args) { // args — имя массива
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

/*Мы можем положить первые несколько параметров в переменные, а остальные – собрать в массив.
В примере ниже первые два аргумента функции станут именем и фамилией, а третий и последующие превратятся в массив titles:*/

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Юлий Цезарь
  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  alert( titles[0] ); // Консул
  alert( titles[1] ); // Император
  alert( titles.length ); // 2
}
showName("Юлий", "Цезарь", "Консул", "Император");

//TODO: Есть массив. Хотим найти максимум

let arr = [3, 5, 1];
alert( Math.max(arr) ); // NaN

//! Как выше - нельзя (Math.max ожидает получить список чисел, а не один массив. Конечно, 
//! мы можем вводить числа вручную : Math.max(arr[0], arr[1], arr[2])), поэтому 

let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)

//TODO: можно

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

//TODO: слияние массивов 

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

//TODO: можно

let str = "Привет";
alert( [...str] ); // П,р,и,в,е,т

