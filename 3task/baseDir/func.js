//* Функции (Разница между ними + как работает js (Рекурсия))

//* Function Declaration

function sayHello(name) {
    console.log(`Привет, ${name}!`);
  }
  
  //TODO: с аргументами по умолчанию:
  
  function greet(name = "Гость") {
    console.log(`Привет, ${name}!`);
  }
  
  greet(); // Выведет "Привет, Гость!"
  greet("Джон"); // Выведет "Привет, Джон!"
  
  //TODO: Рекурсивные функции
  
  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Выведет 120
  
  sayHello("Алиса");
  
  //TODO: Function Expression
  
  const sayGoodbye = function(name) {
    console.log(`До свидания, ${name}!`);
  };
  
  sayGoodbye("Боб");
  
  //TODO: Arrow func
  
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Выведет 5
  
  //TODO: Функции коллбеки
  
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);
  
  //TODO: Замыкания (собес)
  
  //Как исполняется по строчкам
  
  const x = 1
  
  const y = function(){
    const u = "HI"
    console.log(u)
  }
  
  y()
  
  //TODO: Вопрос для занятия
  
  let x = 1
  const y = function(){
    const u = "HI"
    console.log(u)
  }
  x = 2
  y()
  
  //? Что вызовется
  
  let x = 1
  const y = function(){
    const u = "HI"
    console.log(u)
  }
  x = 2
  y()
  x = 3 
  
  //? А сейчас
  
  //! Теперь совсем пиздец
  
  function makeCounter(count){
    return function(){
      return count++
    }
  }
  
  let counter = makeCounter(0)
  let counter2 = makeCounter(0)
  
  console.log(counter())
  console.log(counter())
  console.log(counter2())
  console.log(counter2())