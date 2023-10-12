function createOrderText(coffeeType, sugarAmount, milkAdded) {
  let message = `Вы заказали ${coffeeType}.`;

  if (sugarAmount > 0) {
    message +=  `Добавили ${sugarAmount} кубик(а) сахара.`;
  }

  if (milkAdded) {
    message += ' Добавили молоко.';
  }

  if (coffeeType === 'latte') {
    message += ' Это ваш любимый вид кофе!';
  } else if (coffeeType === 'espresso') {
    message += ' Эспрессо - отличный выбор для бодрости!';
  }

  return message;
} 

function handleFormSubmit(event) {
  event.preventDefault();

  const coffeeType = document.querySelector('#coffee-type').value;
  const sugarAmount = parseInt(document.querySelector('#sugar').value);
  const milkAdded = document.querySelector('#milk').checked;

  const orderText = createOrderText(coffeeType, sugarAmount, milkAdded);

  const orderMessage = document.querySelector('#order-message');
  orderMessage.textContent = orderText;
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

let textSpan = document.getElementById("textSpan")
let textChange = document.getElementById("textChange")
let colorChange = document.getElementById("colorChange")

colorChange.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  textSpan.style.backgroundColor = randomColor;
})

let flag = false

textChange.addEventListener("click", () => {
  if (!flag){
    textSpan.innerText = '1 раз'
  }
  else{
    textSpan.innerText = "2 раз"
  }
  flag = !flag
})