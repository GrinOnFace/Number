//TODO: Пример справочника для цветов с использованием цикла while
const colorsWhile = ['Красный', 'Синий', 'Зеленый', 'Желтый'];
let i = 0;

while (i < colorsWhile.length) {
  console.log(`Цвет ${i + 1}: ${colorsWhile[i]}`);
  i++;
}

//TODO: Пример справочника для фруктов с использованием цикла for
const fruitsFor = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];

for (let j = 0; j < fruitsFor.length; j++) {
  console.log(`Фрукт ${j + 1}: ${fruitsFor[j]}`);
}

//TODO: Пример справочника для дней недели с использованием оператора switch
const day = 'Понедельник';

switch (day) {
  case 'Понедельник':
    console.log('Сегодня - Понедельник');
    break;
  case 'Вторник':
    console.log('Сегодня - Вторник');
    break;
  case 'Среда':
    console.log('Сегодня - Среда');
    break;
  case 'Четверг':
    console.log('Сегодня - Четверг');
    break;
  case 'Пятница':
    console.log('Сегодня - Пятница');
    break;
  case 'Суббота':
    console.log('Сегодня - Суббота');
    break;
  case 'Воскресенье':
    console.log('Сегодня - Воскресенье');
    break;
  default:
    console.log('Некорректный день недели');
}