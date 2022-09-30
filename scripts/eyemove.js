const eyes = document.querySelectorAll('.eye');
const anchor = document.getElementById('cat');
const rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.bottom + rect.height / 2;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    eyes.forEach(eye => {
        eye.style.transform = 'rotate(' + (angleDeg - 90) + 'deg)';
    })
})

function angle(cursorX, cursorY, eyeX, eyeY){
    const dX = eyeX - cursorX;
    const dY = eyeY - cursorY;

    const rad = Math.atan2(dY, dX);
    const degree = rad * 180 / Math.PI;
    return degree;
}