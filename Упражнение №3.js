var a = parseInt(+prompt('Введите целое число', 0));
var b = parseInt(+prompt('Введите целое число', 0));


if (!isNaN(a) && !isNaN(b)) {
	if (a >= 0 && b >= 0) {
		alert(`Разность ваших чисел: ${a - b}`);
	} else if (a < 0 && b < 0) {
		alert(`Произведение ваших чисел: ${a * b}`);
	} else {
		alert(`Сумма ваших чисел: ${a + b}`);
	}
} else {
	alert("Ошибка! Вы указали не числовое значение.");
}

