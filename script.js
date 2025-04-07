// блок объявления переменных
const ranNum = Math.floor(Math.random() * 100) + 1;
console.log(ranNum);
let userNum;

// блок описания функций
const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
	userNum = prompt("Угадай число от 1 до 100.");
	if (userNum === null) {
		alert("Игра окончена.");
		return;
	} else if (!isNumber(userNum)) {
		alert("Введи число!");
		return asking();
	}

	userNum *= 1;

	if (userNum > ranNum) {
		alert("Загаданное число меньше.");
		return asking();
	} else if (userNum < ranNum) {
		alert("Загаданное число больше.");
		return asking();
	} else {
		alert("Поздравляю, Вы угадали!!!");
		return;
	}
}

// блок функционала
asking();
