const audio = new Audio('meow.mp3');

function playAudio() {
    audio.play();
    document.body.removeEventListener('click', playAudio);
}

const patternText = " МЯУ ";
const patternWidth = 60;
const patternHeight = 40;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const rowCount = Math.ceil(screenHeight / patternHeight);
const colCount = Math.ceil(screenWidth / patternWidth);

for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
        const pattern = document.createElement('div');
        pattern.classList.add('pattern');
        pattern.textContent = patternText;
        pattern.style.top = i * patternHeight + 'px';
        pattern.style.left = j * patternWidth + 'px';
        document.body.appendChild(pattern);
    }
}
