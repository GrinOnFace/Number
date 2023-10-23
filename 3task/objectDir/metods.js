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