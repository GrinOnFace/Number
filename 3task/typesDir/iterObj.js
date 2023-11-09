/*Для простых объектов доступны следующие методы:

Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение]. */

//! Возвращает массивы

let user = {
    name: "John",
    age: 30
};

/*Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ] */

let user = {
    name: "John",
    age: 30
};
  
// перебор значений
for (let value of Object.values(user)) {
    alert(value); // John, затем 30
}