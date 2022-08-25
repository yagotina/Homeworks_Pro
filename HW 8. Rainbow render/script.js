// Дано:
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

// // 1. Объединить массивы destination, native, hero в общий массив rainbow.
// rainbow = destination.concat(native, hero);

// // 2. Сделать реверс элементов полученного массива rainbow.
// rainbow.reverse();

// // 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
// rainbow[0] = 'Richard';
// rainbow.splice(3, 0, 'Gave','Battle');
// rainbow[6] = 'Vain';

// rainbow = []

// rainbo = hero.concat(native);

// console.log(rainbo);

// rainbow = rainbo.concat(destination);

// console.log(rainbow);

rainbow = destination.concat(native, hero);

console.log(rainbow);


rainbow.reverse();

console.log(rainbow);

rainbow.shift();


console.log(rainbow);

rainbow.shift();


console.log(rainbow);

rainbow.unshift('Richard');

console.log(rainbow);


rainbow.pop()

console.log(rainbow);

rainbow.push('Gave','Battle','In','Vain')

console.log(rainbow);


//4. Вывести элементы полученного массива в html в виде
background = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors = [];

for(i = 0; i < rainbow.length; i++) {
    colors.push(`
        <div>
            <div class="circle" style="background: ${background[i]}"></div>
            <div>${rainbow[i]}</div>
        </div>
    `);
}
document.write(`<div class="container">${colors.join('')}</div>`);