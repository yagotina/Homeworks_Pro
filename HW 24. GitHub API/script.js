const searchForm = document.getElementById('searchForm');
const searchField = document.getElementById('searchField');
const searchError = document.getElementById('searchError');
const usersBlock = document.getElementById('users');

const API = 'https://api.github.com/users/';

function renderError(error) {
    searchError.innerText = error;
    searchError.classList.add('visible');
};

async function controller(username) {
    let URL = API + username;

    try {
        let response = await fetch(URL);

        if(response.ok) {
            return await response.json();
        } else {
            await Promise.reject(`User "${username}" does not exist! Please, try again.`);
        };
    } catch (error) {
        renderError(error);
    };
};

function createCard(user, username) {
    const userCard = document.createElement('div');
    const userLink = document.createElement('a');
    const userAvatar = document.createElement('img');
    const userInfo = document.createElement('ul');

    const USER_INFO = {
        name: user.name,
        Repositories: user.public_repos,
        Followers: user.followers,
        Following: user.following,
    };

    for(let key in USER_INFO) {
        const infoItem = document.createElement('li');

        infoItem.innerText = key === 'name' ? 
        `${USER_INFO[key] || username}`
        : `${key}: ${USER_INFO[key]}`; 

        userInfo.append(infoItem);
    };

    userCard.classList.add('users_card', 'user');
    userLink.classList.add('user__link');
    userAvatar.classList.add('user__avatar');
    userInfo.classList.add('user__info');

    userCard.id = username;

    userLink.setAttribute('href', user.html_url);
    userLink.setAttribute('target', '_blank');
    userAvatar.setAttribute('src', user.avatar_url);
    userAvatar.setAttribute('alt', user.login);

    usersBlock.prepend(userCard);
    userCard.append(userLink);
    userCard.append(userInfo);
    userLink.append(userAvatar);
};

function renderCard(user, username) {
    let userId = document.getElementById(username);

    //если такой юзер уже есть в результатах поиска, то он переместится в начало списка результатов
    if(userId) userId.remove(); 
    createCard(user, username);

    searchError.classList.remove('visible');
};

searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    let username = searchField.value.toLowerCase().replaceAll(' ', '');
    let user = await controller(username);

    if(user) renderCard(user, username);
});