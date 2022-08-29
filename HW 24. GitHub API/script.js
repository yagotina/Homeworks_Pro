const searchForm = document.getElementById('searchForm');
const searchField = document.getElementById('searchField');
const searchError = document.getElementById('searchError');
const usersBlock = document.getElementById('users');

const API = 'https://api.github.com/users/';

function controller(path) {
    let URL = API + path;
    return fetch(URL);
};

function createCard(user, username) {
    const userCard = document.createElement('div');
    const userLink = document.createElement('a');
    const userAvatar = document.createElement('img');
    const userInfo = document.createElement('ul');
    
    const USER_INFO = [
        {
            name: user.name,
        },
        {
            name: 'Repositories',
            num: user.public_repos,
        },
        {
            name: 'Followers',
            num: user.followers,
        },
        {
            name: 'Following',
            num: user.following,
        },
    ];

    USER_INFO.forEach(info => {
        const infoItem = document.createElement('li');

        infoItem.innerText = 'num' in info ? 
        `${info.name}: ${info.num}` : `${info.name || username}`;

        userInfo.append(infoItem);
    });

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

async function renderCard(response, username) {
    let user = await response.json();
    let userId = document.getElementById(username);

    if(userId) userId.remove(); 
    createCard(user, username);

    searchError.classList.remove('visible');
};

function renderError(username) {
    searchError.innerText = `User "${username}" does not exist! Please, try again.`
    searchError.classList.add('visible');
};

searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    let username = searchField.value.toLowerCase().replaceAll(' ', '');
    let response = await controller(username);

    response.ok ? renderCard(response, username) : renderError(username);
});