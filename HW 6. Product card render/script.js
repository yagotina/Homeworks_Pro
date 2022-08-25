//определяем массивы данных про товары

vegetables = ['cabbage','avocado','tomato'];
fruits = ['grapes','rassbery','coconut'];

priceOfVegetables = [8,30,10];
priceOfFruits = [20,25,50];

//запрашиваем у пользователя информацию

do {
    period = prompt('Winter or summer period?').replaceAll(' ', '').toLowerCase();
} while(period !== 'summer' && period !== 'winter');

do {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits').replaceAll(' ', '').toLowerCase();
} while(category !== 'vegetables' && category !== 'fruits');

if(category === 'vegetables') {
    do {
        product = prompt('Choose product from category vegetables: cabbage, avocado, tomato').replaceAll(' ', '').toLowerCase();
    } while(product !== 'cabbage' && product !== 'avocado' && product !== 'tomato');
    for(i = 0; i < vegetables.length; i++) {
        if(vegetables[i] === product) price = priceOfVegetables[i];
    }
} else {
    do {
        product = prompt('Choose product from category fruits: grapes, rassbery, coconut').replaceAll(' ', '').toLowerCase();
    } while (product !== 'grapes' && product !== 'rassbery' && product !== 'coconut');
    for(i = 0; i < fruits.length; i++) {
        if(fruits[i] === product) price = priceOfFruits[i];
    }
}

do {
    count = +prompt(`Enter count of ${product}`).replaceAll(' ', '');
} while(count < 1 || isNaN(count));

//расчитываем итоговую сумму
period === 'winter' ? price *= 2 : price *= 0.8;
sum = price * count;

//рендер карточки товара
document.write(`
    <div class="product" align="center">
        <img src="images/${category}/${product}.svg" alt="${product}" width="100" height="100">
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${count}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${sum} UAH</b></p>
    </div>
`)