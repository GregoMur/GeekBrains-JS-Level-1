var basket = [[],[]];// Создаем массив basket(корзина), содержащий два массива. Массив с индексом 0 будет содержать в себе наименования вещей.
					// Массив с индексом 1 будет содержать в себе стоимость вещей.
;

//Функция countBasketPrice запрашивает пользователя наименование вещи и ее стоимость. 
function countBasketPrice() {

	var goodsName = prompt('Добавить вещь');

// Если пользователь нажимает "отмена", то происходит выход.
// Также происходит проверка на тип введенных значений, если введенные значения не соответствуют требуемым, то пользователю предлагается ввести другое значение
	while(!isNaN(goodsName) || goodsName == false){
		if(goodsName == null) {
			return;
		}

		alert('Введите название вещи');
		goodsName = prompt('Добавить вещь');
	}

	var goodsPrice = prompt(`Укажите стоимость товара: ${goodsName}`);

	
	while(isNaN(goodsPrice) || !goodsPrice){
		if(goodsPrice == null){
			return;
		}

		alert('Введите стоимость вещи');
		goodsPrice = prompt(`Укажите стоимость товара: ${goodsName}`);
	}

// Преобразование в тип данных 'number'
	goodsPrice = +goodsPrice;

// Округление до двух знаков после запятой
	goodsPrice.toFixed(2);

// Добавление значений в массивы
	basket[0].push(goodsName);
	basket[1].push(goodsPrice);

	var basketDiv = document.querySelector('.basketDiv');

	basketDiv.append(`Товар: ${basket[0][basket[0].length - 1]} Стоимость: ${basket[1][basket[1].length - 1]}`);
	basketDiv.append(document.createElement('br'));
	basketDiv.append(document.createElement('hr'));
}

// Функция showBasket отображает общую сумму стоимости всех позиций.
function showBasket(){
	var basketDiv = document.querySelector('.basketDiv');
	var basketSum = 0;

	for (var i = 0; i < basket[1].length; i++) {
		basketSum += basket[1][i];
	}

	
	basketDiv.after(`В корзине содержится позиций: ${basket[0].length} на сумму: ${basketSum.toFixed(2)}руб.`);
	basketDiv.after(document.createElement('br'));
	basketDiv.after(``);
}


