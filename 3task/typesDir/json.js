//* JSON

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// число в JSON остаётся числом
alert( JSON.stringify(1) ) // 1
// строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
alert( JSON.stringify('test') ) // "test"
alert( JSON.stringify(true) ); // true
alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  alert( JSON.stringify(meetup) );
  /* вся структура преобразована в строку:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */

//! Не должно быть цикличиских ссылок

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       // meetup ссылается на room
  room.occupiedBy = meetup; // room ссылается на meetup
  
  JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON