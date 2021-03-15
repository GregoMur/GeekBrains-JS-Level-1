// Товары
let products = [
	{
		name: 'Смартфон',
		img:'ыьфкезрщту.jpg',
		price: 50,
	},
	
	{
		name: 'Планшетный компьютер',
		img:'planshet.jpg',
		price: 100,
	},

	{
		name: 'Колонки',
		img:'ызуфлукы.jpg',
		price: 20,
	},

	{
		name: 'Электронная книга',
		img:'planshet 1.jpg',
		price: 50,
	},
];

// Корзина
let basket = [];

// ---------------------------------------------------------------------------------------
let productsDiv = document.querySelector('.catalog');//каталог товаров

let basketDiv = document.querySelector('.basket');//корзина, пока пуста

let currentLength = 0; //Количество товаров в корзине, изначально 0

let currentSumOfBasket = 0; //Сумма всех товаров, изначально 0

let message = document.querySelector('.message'); //Здесь будет отображаться количество товаров и их общая сумма

/*----------------------------------------------------------------------------------------------------------
												 ВЫВОДИМ КАТАЛОГ ТОВАРОВ
-----------------------------------------------------------------------------------------------------------*/
for(let i = 0; i < products.length; i++) {

	let prodItem = document.createElement('div');	// ячейка в каталоге(div в котором содержатся сведения об одном товаре)
	let button = document.createElement('button');	// кнопка "Купить"
	button.innerText = 'Купить';

	button.onclick = function() {					// при нажатии на кнопку происходит добваление товара в корзину
			basket.push({							
				name:products[i].name,
				price:products[i].price
			});

			showBasket();							//затем запуск функции, которая отображает содержимое корзины
		}

	prodItem.insertAdjacentHTML('beforeend','<img src="'+products[i].img+'"></img><p>'+products[i].name+
		'</p><p>'+products[i].price+'$</p>');		//Добавление содержимого в ячейку
	prodItem.append(button);						//Добавление кнопки в ячейку
	productsDiv.append(prodItem);					// Добавление ячейки в каталог
}

/*----------------------------------------------------------------------------------------------------------
												 ВЫВОДИМ СОДЕРЖИМОЕ КОРЗИНЫ
-----------------------------------------------------------------------------------------------------------*/

function showBasket() {
	for(; currentLength < basket.length; currentLength++) {

		let basketItem = document.createElement('div');	// ячейка в корзине
		basketItem.className = 'item item_' + currentLength; //присваиваем класс ячейке

		basketItem.insertAdjacentHTML('beforeend','<p>'+basket[currentLength].name+ //Вставляем в ячейку содержмое
		'</p><p>'+basket[currentLength].price+'$</p>');	

		basketDiv.append(basketItem); // Вставляе ячейку в корзину
		currentSumOfBasket+=basket[currentLength].price; // складываем сумму всхе товаров
	}
	message.innerHTML = '<p>В корзине позиций: '+currentLength+' шт на сумму: '+currentSumOfBasket+' $</p>'; // выводим в браузер 
																									//количество товаров и их сумму
}