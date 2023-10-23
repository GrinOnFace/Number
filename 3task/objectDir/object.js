//* Объекты

//TODO: Создание объекта 

let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];

//TODO: Создание константного объекта 

const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete

//! user = ... - нельзя (константа)

//TODO: Квадратные скобки 

let user = {
  name: "John",
  age: 30
};

let key = prompt("Что вы хотите узнать о пользователе?", "name");

// доступ к свойству через переменную
alert( user[key] ); // John (если ввели "name")

//! Так нельзя 

let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ); // undefined

//TODO: свойства из переменной

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

//или

function makeUser(name, age) {
  return {
    name,
    age,
    // ...другие свойс  тва
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

//TODO: Проверка существования свойства, оператор «in»

let user = {};
alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

//Или

let user = { age: 30 };
let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key

//TODO: Свойство существует, но содержит undef

let obj = {
  test: undefined
};

alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj ); // true, свойство существует!

//TODO: цикл для перебора объекта

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}
