sports = [
	['skier','⛷'], //0
	['snowboarder','🏂'], //1
	['apple','🍎'],//2
	['hockey','🏒'],//3
	['ice skate','⛸'],//4
	['swimmer','🏊'],//5
	['surfer','🏄‍'],//6
	['watermelon','🍉'],//7
	['lemon','🍋'],//8
	['rowboat','🚣'],//9
	['bicyclist','🚴‍']//10
];

// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
summer_sports = sports.slice(5, 7).concat(sports.slice(9, 11));

// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
winter_sports = sports.slice(0, 2).concat(sports.slice(3, 5));

// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.????
fruits = sports.slice(2, 3).concat(sports.slice(7, 9));

//4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль
console.log('*** Winter sports ***');
for(i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(': '));
}
console.log(`
*** Summer sports ***`);
for(i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(': '));
}
console.log(`
*** Fruits ***`);
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(': '));
}