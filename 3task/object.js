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

//* Копирование объектов и ссылки

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"

//TODO: Сравнения по ссылке 

let a = {};
let b = a; // копирование по ссылке
alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
alert( a === b ); // true

let a = {};
let b = {}; // два независимых объекта
alert( a == b ); // false
alert( a === b ); // false

//TODO: Клонирование и объединение, Object.assign

let user = {
  name: "John",
  age: 30
};
let clone = {}; // новый пустой объект
// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}
// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные
alert( user.name ); // все ещё John в первоначальном объекте

//TODO: Object.assign

Object.assign(dest, [src1, src2, src3...])
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }

//!Если скопированное имя свойства уже существует, оно будет перезаписано:

let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // теперь user = { name: "Pete" }

//Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);

//TODO: Вложенное клонирование

//свойства могут быть и ссылками на другие объекты

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

//Теперь недостаточно просто скопировать clone.sizes = user.sizes, потому что user.sizes – это объект, он будет скопирован по ссылке. 

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes ); // true, тот же объект
// user и clone обладают общим свойством sizes
user.sizes.width++;       // изменяем свойства в первом объекте
alert(clone.sizes.width); // 51, видим результат в другом

//* Методы объекта, "this"

let user = {
  // ...
};
// сначала, объявляем
function sayHi() {
  alert("Привет!");
}
// затем добавляем в качестве метода
user.sayHi = sayHi;
user.sayHi(); // Привет!


user = {
  sayHi: function() {
    alert("Привет");
  }
};
// сокращённая запись выглядит лучше, не так ли?
user = {
  sayHi() { // то же самое, что и "sayHi: function(){...}"
    alert("Привет");
  }
};

//! this - ссылка на текущий объект

let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  }
};
user.sayHi(); // John

// Можно так, но!
let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert(user.name); // "user" вместо "this"
  }
};

//! Если захотим сделать так?* 
let admin = user;
user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
admin.sayHi(); // TypeError: Cannot read property 'name' of null

//TODO: This не фиксирован, соответственно 

let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert( this.name );
}
// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

//! У стрелочных функций нет «this». Стрелочные функции особенные: 
//!у них нет своего «собственного» this. Если мы ссылаемся на this внутри такой функции, то оно берётся из внешней «нормальной» функции.
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

//TODO: Функция-конструктор с this
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

//* Опциональная цепочка 

//TODO: Проблема «несуществующего свойства»

let user = {}; // пользователь без свойства "address"
alert(user.address.street); // Ошибка!

//! Во многих практических случаях мы бы предпочли получить здесь undefined вместо ошибки

//TODO: Можно так

let user = {};
alert(user.address ? user.address.street : undefined);

let user = {}; // у пользователя нет адреса
alert(user.address ? user.address.street ? user.address.street.name : null : null);

let user = {}; // пользователь без адреса
alert( user.address && user.address.street && user.address.street.name ); // undefined (без ошибки)

//TODO: Не то верхнее, поэтому

//Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.
//!мы будем говорить, что что-то «существует», если оно не является null и не undefined.
//Другими словами, value?.prop:
//работает как value.prop, если значение value существует,
//в противном случае (когда value равно undefined/null) он возвращает undefined.

let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

//TODO: Можно так

let key = "firstName";
let user1 = {
  firstName: "John"
};
let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined