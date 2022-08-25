let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
    },
    bankData = {
        'USD': {
            max: 3000,
            min: 100,
            img: '💵'
        },
        'EUR': {
            max: 1000,
            min: 50,
            img: '💶'
        },
        'UAH': {
            max: 0,
            min: 0,
            img: '💴'
        },
        'GBP': {
            max: 10000,
            min: 100,
            img: '💷'
        }
    };

let setAmount = () => prompt('Введите сумму снятия');

function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
        confirm('Посмотреть баланс на карте?') 
        ? resolve(userData) 
        : reject({userData: userData, bankData: bankData});
    })
};

function setCurrency(obj) {
    let currency;
    do {
        let currencyList = Object.keys(obj).join(', ');
        currency = prompt(`Введите название валюты в формате ${currencyList}`);
    } while (!obj[currency]);
    return currency;
};

getMoney(userData, bankData)
    .then(
        userData => setCurrency(userData),

        data => {
            let currency = setCurrency(data.userData)

            while(!bankData[currency] || bankData[currency].max === 0) {
                console.log(`Валюта ${currency} отсутсвует в этом банкомате, выберете другую валюту`);
                currency = setCurrency(data.userData);
            };

            return Promise.reject(currency);
        }
    )
    .then(
        currency => console.log(`Баланс составляет: ${userData[currency]} ${currency}`),

        currency => {
            let amount = setAmount();

            while(amount > bankData[currency].max) {
                console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bankData[currency].max}`);
                amount = setAmount();
            }
            while(amount < bankData[currency].min) {
                console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[currency].min}`);
                amount = setAmount();
            }
            while(amount > userData[currency]) {
                console.log(`На счету недостаточно средств. Попробуйте ввести другую сумму`);
                amount = setAmount();
            }
            return Promise.reject({amount, currency});
        }
    )
    .catch(data => console.log(`Возьмите Ваши ${data.amount} ${data.currency} ${bankData[data.currency].img}`))
    .finally(console.log('Спасибо, хорошего дня 😊'));