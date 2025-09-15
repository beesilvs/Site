const increaseBtn = document.getElementById('increase-font');
const decreaseBtn = document.getElementById('decrease-font');
const contrastBtn = document.getElementById('toggle-contrast');

let fontSize = 16; // tamanho base da fonte

increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

decreaseBtn.addEventListener('click', () => {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + 'px';
});

contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});
