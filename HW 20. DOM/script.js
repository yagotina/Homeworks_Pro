const list = document.querySelector('.root');

function setClassName(level, element) {
    level--;

    if(level > 0) {
        [...element.children].forEach(child => setClassName(level, child));
    } else {
        element.firstElementChild.classList.add('firstItem');
        element.lastElementChild.classList.add('lastItem');
    }
};

setClassName(1, list);
