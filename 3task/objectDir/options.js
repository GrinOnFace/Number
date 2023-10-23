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