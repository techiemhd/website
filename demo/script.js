const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
