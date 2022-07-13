const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos : ${e.offsetX} y pos : ${e.offsetY}`
});