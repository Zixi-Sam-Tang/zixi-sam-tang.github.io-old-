const eyes = document.querySelectorAll('.eye');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');

//tracks the mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    eyes.forEach(eye => {
        const eyeX = eye.x + eye.clientWidth / 2;
        const eyeY = eye.y + eye.clientHeight / 2;
        // console.log({eye, eyeX, eyeY});
        const angleDeg = angle(mouseX, mouseY, eyeX, eyeY)
        eye.style.transform = 'rotate(' + (angleDeg - 100) + 'deg)';
    })
})

// finds the angle between the center of the eye and the cursor
function angle(cursorX, cursorY, eyeX, eyeY) {
    const dX = eyeX - cursorX;
    const dY = eyeY - cursorY;

    const rad = Math.atan2(dY, dX);
    const degree = rad * 180 / Math.PI;
    return degree;
}