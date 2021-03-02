var num = [];
 for (var i = 0; i <= 100; i++) {
 	for (var j = 1; j <= i; j++) {
 		if(i % j == 0){
 			num.push(j);
 		}
 	}
 	if (num.length > 2) {
 		num.length = 0;
 			continue;
 		}
 	console.log(i);
 	num.length = 0;
 }
 