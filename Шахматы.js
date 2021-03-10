'use strict';

createChessDesk();



//-------------------------------------
// Создание шахматной доски, расскраска ячеек и их нумерация
function createChessDesk() {
	let body = document.querySelector('body');
	let chesseDesk = document.createElement('table');
	let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	for (let row = 0; row <= 9; row++) {

	let tr = document.createElement('tr');	//создаем строку
	tr.className = 'row';	//присваеваем класс .row

		for(let column = 0; column <= 9; column++) {

			let td = document.createElement('td');	//создаем столбец
			td.className = 'column';	// присваиваем класс .column

			if(row == 0 || row == 9) {
				td.style.border = '0';	//если значение строки == 0 или 9, то убираем у них border

				if(row == 0) {	//если значение строки == 0, то присваеваем дополнительный класс reverse(для отображения букв в другом направлении)
					td.classList.add('reverse');
				}

				if(column > 0 && column < 9){	//если значение столбца строки 0 или 9 равно от 1 до 8, то вставляем буквы столбцов
					td.append(letters[column - 1]);
				}
				
			}

			if(column == 0 || column == 9) {	//если значение столбца == 0 или 9, то убираем у них border
				td.style.border = '0';

				if (column == 0) { 	//если значение строки == 0, то присваеваем дополнительный класс reverse(для отображения номеров строк в другом направлении)
					td.classList.add('reverse');
				}

				if(row > 0 && row < 9) {	//если значение строки столбца 0 или 9 равно от 1 до 8, то вставляем номера строк
					td.append(row);
				}
			}

			if(row > 0 && row < 9) {
				if(column > 0 && column < 9) {
					(column + row) % 2 == 0 ? td.classList.add('bgColorWhite') : td.classList.add('bgColorBlack');	// если значения строк(row) и столбцов(column) в
																													//диапазоне от 1 до 8, то делаем background светлым
																													//или темным с помощью тернарного оператора
				}
			}

			if(row == 1 || row == 2) {
				if(column > 0 && column < 9) {
					td.classList.add('textColorWhite');
				}
			} else if(row == 7 || row == 8) {
				if(column > 0 && column < 9) {
					td.classList.add('textColorBlack');
				}
				
			}

			if(row == 1 || row == 8) {
				switch(column) {
					case 1:
					case 8:
					td.insertAdjacentHTML('beforeend','&#9820;');// Ладья
					break;

					case 2:
					case 7:
					td.insertAdjacentHTML('beforeend','&#9822;');// Конь
					break;

					case 3:
					case 6:
					td.insertAdjacentHTML('beforeend','&#9821;');// Слон
					break;

					case 4:
					td.insertAdjacentHTML('beforeend','&#9819;');// Ферзь
					break;

					case 5:
					td.insertAdjacentHTML('beforeend','&#9818;');// Король
					break;
				}
			}

		if(row == 2 || row == 7) {
			if(column > 0 && column < 9) {
				td.insertAdjacentHTML('beforeend','&#9823;');// Пешка
			}
			
		}
			

			tr.append(td);// вставляем ячейки td(столбцы) в строки tr

			chesseDesk.append(tr);// вставляем в тег table(chesseDesk) щаполненные строки tr
			body.append(chesseDesk);// вставляем нашу заполненную шахматную доску(chesseDesk) в body
		}


	}
}
