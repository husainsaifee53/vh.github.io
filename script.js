document.getElementById('startBtn').addEventListener('click', () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    let wish = `Happy Birthday, ${randomName()}! 🎂`;
    document.getElementById('wish').innerText = wish;
});

function randomName() {
    let names = ['name'];
    return names[Math.floor(Math.random() * names.length)];
}
