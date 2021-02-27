// Создание переменных и присовение им значений через prompt
var arg1 = +prompt('Введите первое число', 0);
var arg2 = +prompt('Введите второе число', 0);
var operation = prompt('Укажите математический знак операции\(+, -, *, /\)');

// Вызов функции
mathOperating(arg1, arg2, operation);

//Сумма двух чисел
function sum(a, b) {
	return (a + b);
}

//Разность двух чисел
function sub(a, b) {
	return (a - b);
}

//Произведение двух чисел
function multi(a, b) {
	return (a * b);
}

//Частное двух чисел
function div(a, b) {
	return (a / b);
}

// Проверка чисел на NaN, если true, то запуск switch.
function mathOperating(arg1, arg2, operation) {
	if (!isNaN(arg1) && !isNaN(arg2)) {
		switch(operation){
			case '+':
			console.log(`Сумма ваших чисел равна: ${sum(arg1, arg2)}`);
			break;

			case '-':
			console.log(`Разность ваших чисел равна: ${sub(arg1, arg2)}`);
			break;

			case '*':
			console.log(`Произведение ваших чисел равно: ${multi(arg1, arg2)}`);
			break;

			case '/':
			console.log(`Частное ваших чисел равно: ${div(arg1, arg2)}`);
			break;

			default:
			console.log('Математический знак операции неизвестен');
		}
	} else {
		console.log('Вы указали не числовое значение');
	}
	
}