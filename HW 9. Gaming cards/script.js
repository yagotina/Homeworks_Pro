//Определяем массивы данных для карт
cards = [];
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
persons = ['jack', 'queen', 'king'];
ranks = [];

for(i = 2; i <= 10; i++) {
    ranks.push(i);
}
for(i = 0; i < persons.length; i++) {
    ranks.push(persons[i][0].toUpperCase());
}
ranks.push('T');


//Рисуем карты
for(i = 0; i < ranks.length; i++) {
    for(j = 0; j < suits.length; j++) {
        cardInfo = `<div class="card__info">${ranks[i]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>`;
        if(isNaN(ranks[i])) {
            cardClass = 'card--person';
            cardImg = `<img class="person" src="images/${persons[i - 9]}.svg" alt="${persons[i - 9]}"></img>`;
            if (!(persons[i - 9])) cardImg = `<img class="person" src="images/${suits[j]}.svg" alt="${suits[j]}"></img>`;
        } else {
            cardClass = '';
            cardImg = '';
        }
        cards.push(`<div class="card ${cardClass}">${cardInfo}${cardImg}${cardInfo}</div>`);
    }
}
document.write(`<div class="wrapper">${cards.join('')}</div>`);