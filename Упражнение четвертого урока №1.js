"use strict";
let num = prompt('Введите число от 0 до 999', 0);// Вводим число от 0 до 999

fromNumToObj(num);// Запускаем функцию

// Создем пустой объект, проверка "число num больше 999". Если да, то выводим сообщение
// и возвращаем пустой объект

function fromNumToObj(n) {
	let obj = {};
	if (n > 999) {
		console.log('Значение превышает 999');
		return obj;
	}

// Если нет, то используем оператор switch.
// Выводим в консоли содержимое объекта и возвращаем объект.
	
	switch(n.length) {
		case 3:
		obj = {
			'единицы': n[2],
			'десятки': n[1],
			'сотни': n[0]
		};
		console.log(obj);
		return obj;

		case 2:
		obj = {
			'единицы': n[1],
			'десятки': n[0],
		};
		console.log(obj);
		return obj;

		case 1:
		obj = {
			'единицы': n[0],
		};
		console.log(obj);
		return obj;
	}
}