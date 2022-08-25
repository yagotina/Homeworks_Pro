do {
    operator = prompt('Какое действие вы хотите выполнить? Выберете + - / *');
} while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*');
console.log(`Оператор: ${operator}`);

do {
    num = +prompt('Сколько операндов вы хотите использовать? Выберете от 1 до 7');
} while (!num || num < 1 || num > 7);
console.log(`Количество операндов: ${num}`);

result = 0;
for (i = 1; i <= num; i++) {
    do {
        operand = +prompt(`Введите ${i}-й операнд`);
    } while (!operand || isNaN(operand));
    console.log(`${i}-й операнд: ${operand}`);
    if(operator === '+') {
        result += operand; 
    } else if(operator === '-') {
        i === 1 ? result = operand : result -= operand;
    } else if(operator === '*') {
        i === 1 ? result = operand : result *= operand;
    } else if(operator === '/') {
        i === 1 ? result = operand : result /= operand;
    }
}
console.log(`Результат: ${result}`);