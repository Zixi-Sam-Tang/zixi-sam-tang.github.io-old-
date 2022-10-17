const eyes = document.querySelectorAll('.eye');
var anchor = document.getElementById('cat');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');
var anchorX = anchor.x + anchor.clientWidth / 10;
var anchorY = anchor.y + anchor.clientHeight / 2.2;

//tracks the mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    /*const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)*/

    eyes.forEach(eye => {
        const eyeX = eye.x + eye.clientWidth / 2;
        const eyeY = eye.y + eye.clientHeight / 2;
        const angleDeg = angle(mouseX, mouseY, eyeX, eyeY)
        eye.style.transform = 'rotate(' + (angleDeg - 100) + 'deg)';
    })
})

//moves the eyes to the eyesockets after window resize event
// window.addEventListener('resize', (e) => {
//     setTimeout(() => {
//         anchorX = anchor.x + anchor.clientWidth / 10;
//         anchorY = anchor.y + anchor.clientHeight / 2.2;

//         eye1.style.top = (anchorY - 34) / 16 + 'rem';
//         eye1.style.left = (anchorX - 40) / 16 + 'rem';
//         eye2.style.top = (anchorY - 16) / 16 + 'rem';
//         eye2.style.left = (anchorX + 82) / 16 + 'rem';
//     }, 500)
    
// })

//finds the angle between the center of the eye and the cursor
function angle(cursorX, cursorY, eyeX, eyeY){
    const dX = eyeX - cursorX;
    const dY = eyeY - cursorY;

    const rad = Math.atan2(dY, dX);
    const degree = rad * 180 / Math.PI;
    return degree;
}