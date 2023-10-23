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
