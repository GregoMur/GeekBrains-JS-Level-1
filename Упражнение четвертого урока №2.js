"use strict";

let answer, ok;
let array = [];

addAnswer(sentences.sentensce_a, sentences.acceptValues_a, sentences.value_a_1, sentences.value_a_2);
switch(answer) {
	case 1:
	addAnswer(sentences.sentensce_b, sentences.acceptValues_b, sentences.value_b_1, sentences.value_b_2);

	switch(answer) {
		case 1:
		addAnswer(sentences.sentensce_c, sentences.acceptValues_c, sentences.value_c_1, sentences.value_c_2);

		switch(answer) {
			case 1:
			case 2:
			addAnswer(sentences.sentensce_d, sentences.acceptValues_d, sentences.value_d_1, sentences.value_d_2);
			break;
		}
		break;

		case 2:
		array.push('Нет ответа, так как вы выбрали другой вариант событий.');// Если сценарий был пропущен в результате другого выбора, 
																			//то в массив добавляется это значение
		addAnswer(sentences.sentensce_d, sentences.acceptValues_d, sentences.value_d_1, sentences.value_d_2);
		break;
	}
	break;

	case 2:
	array.push('Нет ответа, так как вы выбрали другой вариант событий.');// Если сценарий был пропущен в результате другого выбора, 
																			//то в массив добавляется это значение
	addAnswer(sentences.sentensce_c, sentences.acceptValues_c, sentences.value_c_1, sentences.value_c_2);

	switch(answer) {
		case 1:
		case 2:
		addAnswer(sentences.sentensce_d, sentences.acceptValues_d, sentences.value_d_1, sentences.value_d_2);
		break;
	}

	break;
}

showAnswer();

alert('Спасибо за игру!');


// Проверяем, является ли число допустимым
function isAnswer(q, ans) {
	if(isNaN(ans) || !isFinite(ans)) {
		alert('Вы ввели недопустимый символ.');
		return false;
	}
	if (ans < 0 || ans > q) {
		alert('Ваше число выходит из допустимого диапозона.');
		return false;
	} else {
		return true;
	}
}

// Ввод варината событий и добавление этого варианта в массив.
// Если "-1" то выход
function addAnswer(sentence, acceptVal, val1, val2) {
	do{
		ok = false;
		answer = +prompt(sentence + val1 + val2);
		if(answer == -1) {
			break;
		}
		ok = isAnswer(acceptVal, answer);
		answer == 1 ? array.push(val1) : array.push(val2)
	} while(!ok);
}

// Ввод номера вопроса(окна) и отображение результата.
function showAnswer() {
	do{
		ok = false;
		let num = prompt('Введите номер вопроса.');

		if (!num) {
			ok = true;
			return ok;
		}

		switch(num) {
		case '1':
		alert(sentences.sentensce_a + '\n Ваш ответ: ' + array[0]);
		break;

		case '2': 
		alert(sentences.sentensce_b + '\n Ваш ответ: ' + array[1]);
		break;

		case '3': 
		alert(sentences.sentensce_c + '\n Ваш ответ: ' + array[2]);
		break;

		case '4': 
		alert(sentences.sentensce_d + '\n Ваш ответ: ' + array[3]);
		break;

		default:
		alert('Нет такого значения.');
		break;
		}
	}while(!ok)
	
}