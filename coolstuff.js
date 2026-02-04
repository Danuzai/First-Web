const coolstuff = document.querySelector('img[alt="lil"]');
let speed = 0.5;
let currentspeed = 0.5;
let animationframe;

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function animate() {
    currentspeed = lerp(currentspeed, speed, 0.1);
    coolstuff.style.transform += "rotate(" + currentspeed + "deg) ";
    animationframe = requestAnimationFrame(animate);
}

coolstuff.addEventListener('click', () => {
    speed *=2;
});
animate();