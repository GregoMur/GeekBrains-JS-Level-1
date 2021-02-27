var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2, так как мы использовали префиксный инкримент, то значение переменной 'a' увеличилось на 1, 
						    // затем переменной 'с' присвоено текущее значение переменной 'а.

d = b++; alert(d);           // 1, здесь используется постфиксный инкримент. Соответственно, сначала происходит присваивание переменной 'd' значения 
							// переменной 'b' до инкремента, затем значение переменной 'b' увеличивается на 1.

c = (2+ ++a); alert(c);      // 5, на начало выполнения этого выражения значение переменной 'a' равно - 2, используется префиксный инкримент, 
							// соответственно выражение в скобках выглядит как (2 + 3).

d = (2+ b++); alert(d);      // 4, на начало выполнения этого выражения значение переменной 'b' равно - 2, используется постфиксный инкримент,
							// соответственно выражение в скобках выглядит как (2 + 2).

alert(a);                    // 3, в течение всего скрипта переменная "a" имела следующие изменения:
							// начальное значение - 1, префиксный инкримент - значение 2, префиксный инкримент - значение 3.

alert(b);                    // 3, в течение всего скрипта переменная "b" имела следующие изменения:
							// начальное значение - 1, постфиксный инкримент - значение 2, постфиксный инкримент - значение 3.