// В змейке замыкания можно использовать для подсчета очков

function plus() {
    var num = 0;
    return function() {
        num++
        showScore.innerHTML = 'Текущий счет очков: ' + num;
        return num;
    }
}

var scorePlus = plus();

// 






/*---------------------------------------------------------------------
// a)
if (!("a" in window)) {
    var a = 1;
}
alert(a);	//выведет 1, так как ("a" in window) вернет false, а (!("a" in window) вернет true, соответственно будет создана 
			// переменная a со значением 1

// b)
var b = function a(x) {
    x && a(--x);
};
alert(a);	//выведет тело функции a

// c)
function a(x) {	
    return x * 2;
}
var a;
alert(a);	//выведет тело функции a

// d)
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);	//Выведет 10

-----------------------------------------------------------------------*/