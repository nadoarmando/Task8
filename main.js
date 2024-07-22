const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const background = document.getElementById('background');

function setGradient()
{
    background.style.background = `linear-gradient(to right , ${color1.value} , ${color2.value})`;
}

color2.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

setGradient();
