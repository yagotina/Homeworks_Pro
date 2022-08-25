const figure = document.querySelector('.figure');
const selectShape = document.getElementById('selectShape');
const inputColor = document.getElementById('inputColor');

selectShape.addEventListener('change', () => {
    let prevClass = figure.classList[figure.classList.length-1];
    figure.classList.replace(prevClass, selectShape.value);
});

inputColor.addEventListener('change', () => figure.style.background = inputColor.value);