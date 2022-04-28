let modal = document.querySelector('.modal');
let openHolder = document.querySelector('.btn-holder');
let openModal = document.getElementById('btn-open');
let closeModal = document.getElementById('btn-close');

openModal.onclick = () => {
    modal.classList.add('active');
    openHolder.classList.add('hidden');
}

closeModal.onclick = () => {
    modal.classList.remove('active');
    openHolder.classList.remove('hidden');
}

let color = document.querySelector('.btn-traffic');
let redColor = document.getElementById('light-red');
let yellowColor = document.getElementById('light-yellow');
let greenColor = document.getElementById('light-green');

color.onclick = function () {
    if (redColor.classList.contains('active')) {
        redColor.classList.remove('active')
        yellowColor.classList.add('active');
    } else if (yellowColor.classList.contains('active')) {
        yellowColor.classList.remove('active');
        greenColor.classList.add('active');
    } else if (greenColor.classList.contains('active')) {
        greenColor.classList.remove('active');
        redColor.classList.add('active');
    }
}

