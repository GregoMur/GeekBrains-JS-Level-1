"use strict";

let divForS = document.querySelector('.forSmallImg'); //div для отображения маленьких изображений.
let divForB = document.querySelector('.forBigImg'); //div для отображения больших изображений.

let imgB = document.createElement('img'); //тег img для больщих изображений.

let nextImgB = document.createElement('button'); // кнопка "следующее изображение"
let previousImgB = document.createElement('button'); // кнопка "предыдущее изображение"

let currentImg; //текущее большое изображение

// Массив объектов с изображениями.
let images = [
	{
		smallImg: 'Small/imS1.jpg',
		bigImg: 'Big/imB1.jpg',
	},
	{
		smallImg: 'Small/imS1.png',
		bigImg: 'Big/imB2.png',
	},
	{
		smallImg: 'Small/imS3.jpg',
		// bigImg: 'Big/imB3.jpg', // Условно, большой картинки нет.
	},
	{
		smallImg: 'Small/imS4.png',
		bigImg: 'Big/imB4.png',
	},
	{
		smallImg: 'Small/imS5.png',
		bigImg: 'Big/imB5.png',
	},
	{
		smallImg: 'Small/imS6.png',
		bigImg: 'Big/imB6.png',
	},
];

// Отображение маленьких изображений в браузере.

for(let i = 0; i < images.length; i++) {
	let imgS = document.createElement('img');

	imgS.src = images[i].smallImg;
	imgS.id = i;
	imgS.onclick = showBig;

	divForS.append(imgS);
}

/*---------------------------------------------------------------------*/
// Функция отображает большое изображение(если оно существует, если его нет то) 
function showBig() {
	currentImg = this.id;
	if(images[currentImg].bigImg) {
		imgB.src = images[currentImg].bigImg;
		divForB.append(imgB);
		addButtons();
	} else {
		alert('Изображение отсутствует.');
	}
	
}

function addButtons() {
	nextImgB.onclick = toNextImg;
	nextImgB.id = 'nextImg';
	nextImgB.innerHTML = '&#62;';

	previousImgB.onclick = toPreviousImg;
	previousImgB.id = 'previousImg';
	previousImgB.innerHTML = '&#60;';

	
	divForB.append(previousImgB);
	divForB.append(nextImgB);
}

function toNextImg() {
	imgB.remove();
	if(++currentImg > (images.length-1)) {
		currentImg = 0;
	}
	if(images[currentImg].bigImg) {
		imgB.src = images[currentImg].bigImg;
		divForB.prepend(imgB);
	} else {
		alert('Изображение отсутствует.');
		previousImgB.remove();
		nextImgB.remove();
	}
}

function toPreviousImg() {
	imgB.remove();
	if(--currentImg < 0) {
		currentImg = images.length-1;
	}
	if(images[currentImg].bigImg) {
		imgB.src = images[currentImg].bigImg;
		divForB.prepend(imgB);
	} else {
		alert('Изображение отсутствует.');
		previousImgB.remove();
		nextImgB.remove();
	}
}
/*--------------------------------------------------------------------------------------------------------*/