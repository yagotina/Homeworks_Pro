//REQUESTS
const API = 'https://6310dae036e6a2a04ef966d3.mockapi.io';

const controller = async (path, method = 'GET', body) => {
    const URL = `${API}${path}`;

    const params = {
        method,
        headers: {'content-type': 'application/json'}
    };

    if(body) params.body = JSON.stringify(body);

    const response = await fetch(URL, params);
    
    if(response.ok) {
        return await response.json();
    } else {
        alert(`Error ${response.status}! ${response.statusText}.`);
    };
};

//RENDER HERO
class Hero {
    constructor(heroObj) {
        for(let key in heroObj) {
            this[key] = heroObj[key];
        };
    }
    
    render() {
        const herosTable = document.getElementById('herosTable');
        const herosTbody = document.getElementById('herosTbody');

        const tr = document.createElement('tr');
        const checkbox = document.createElement('input');
        const button = document.createElement('button');

        herosTable.classList.add('show-table');
        checkbox.classList.add('check-fav');
        button.classList.add('heros__btn');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.favourite; 
        button.innerText = 'Delete';

        checkbox.addEventListener('click', async () =>{
            this.favourite = checkbox.checked;
            let body = Object.assign({}, this);
            delete body.id;
            
            await controller(`/heroes/${this.id}`, 'PUT', body);
        });

        button.addEventListener('click', async () => {
            tr.remove();
            await controller(`/heroes/${this.id}`, 'DELETE');
        });

        const trData = [this.name, this.comics, checkbox, button];

        trData.forEach(data => {
            const td = document.createElement('td');
            td.append(data);
            tr.append(td);
        });

        herosTbody.append(tr);
    }

    static check(herosList, newName) {
        return herosList.some(hero => hero.name.toLowerCase() === newName.toLowerCase());
    }
};

//ADD HERO TO TABLE
const addHeroForm = document.getElementById('addHeroForm');

addHeroForm.addEventListener('submit', async e => {
    e.preventDefault();

    const name = document.getElementById('inputName').value;
    const heros = await controller('/heroes');
    const isHeroExist = Hero.check(heros, name);

    if(isHeroExist) {
        alert(`Hero ${name} is already exist! Try another name.`)
    } else {
        const comics = document.getElementById('selectComics').value;
        const favourite = document.getElementById('inputFavourite').checked;

        const body = {name, comics, favourite};
        const response = await controller('/heroes', 'POST', body);

        if(response) {
            let hero = new Hero(response);
            hero.render();
        };
    };
});

//RENDER COMICS LIST
const selectComics = document.getElementById('selectComics');

async function renderComicsList() {
    const comicsList = await controller('/universes');
    
    comicsList.forEach(comics => {
        const option = document.createElement('option');
        option.setAttribute('value', comics.name)
        option.innerText = comics.name;
        selectComics.append(option);
    });
};

renderComicsList();