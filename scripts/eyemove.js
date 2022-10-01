const eyes = document.querySelectorAll('.eye');
var anchor = document.getElementById('cat');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');
const eye3 = document.getElementById('eye3');
var rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.bottom + rect.height / 2;

var catX = rect.left + rect.width / 5;
var catY = rect.bottom + rect.height / 3;
eye1.style.top = (catY - 5) + 'px';
eye1.style.left = (catX - 140) + 'px';
eye3.style.top = (catY) + 'px';
eye3.style.left = (catX) + 'px';
eye3.style.border = 'solid';

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    eyes.forEach(eye => {
        eye.style.transform = 'rotate(' + (angleDeg - 100) + 'deg)';
    })
})

window.addEventListener('resize', (e) => {
    rect = anchor.getBoundingClientRect();
    catX = rect.left + rect.width / 5;
    catY = rect.top + rect.height / 3;
    
    eye3.style.top = (catY) + 'px';
    eye3.style.left = (catX) + 'px';
    eye1.style.top = (catY - 80) + 'px';
    eye1.style.left = (catX - 10) + 'px';
    eye2.style.top = (catY - 748) + 'px';
    eye2.style.left = (catX - 8) + 'px';
    console.log(catY);
    console.log(rect);
})

function angle(cursorX, cursorY, eyeX, eyeY){
    const dX = eyeX - cursorX;
    const dY = eyeY - cursorY;

    const rad = Math.atan2(dY, dX);
    const degree = rad * 180 / Math.PI;
    return degree;
}