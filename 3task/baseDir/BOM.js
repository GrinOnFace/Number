//*alert, comfirm, prompt (Тут про dom, bom)

//TODO: alert

//alert("Привет, пользователь! Это важное сообщение.");

//TODO: сomfirm

const userAgreed = confirm("Вы согласны продолжить?");
if (userAgreed) {
  alert("Вы согласились продолжить.");
} else {
  alert("Вы отменили операцию.");
}

//TODO: prompt

const userName = prompt("Пожалуйста, введите ваше имя:");
if (userName !== null) {
  alert(`Привет, ${userName}!`);
} else {
  alert("Вы отменили ввод имени.");
}
