// Сравнение 0 и null
console.log(null == 0);// false, null представляет из себя отдельный тип данных, который означает 'ничего', 'пусто', 'значение неизвестно'.
					// Null равен самому себе и равен undefined. 



// Возведение в степень с помощью рекурсии
function power(val, pow) {
	if (pow == 1) {
		return val * pow;
	}

	return val * power(val, pow - 1);
}

alert(power(2,3));//8
alert(power(5,3));//125
alert(power(3,4));//81
alert(power(11,2));//121