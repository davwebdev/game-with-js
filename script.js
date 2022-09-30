// const board = document.querySelector('#board');
// const squareNumbers = 750;
// const colors = ['#7FFF00','#DEB887','#00FFFF','#006400','#483D8B','#FFD700','#FF00FF','#ADFF2F','#F0FFF0','#ADD8E6','#00FF00','#800000','#0000CD','#FF4500','#FFFAFA','#4682B4','#008080'];


// for (let i = 0; i < squareNumbers; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.addEventListener('mouseover',() => setColor(square));
//     square.addEventListener('mouseleave',() => removeColor(square));
//     board.appendChild(square)
// }

// function setColor(element) {
//     const color = getRandomColor();
//     element.style.backgroundColor = color;
//     element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`;
// }

// function removeColor(element) {
//     const color = 'grey';
//     element.style.backgroundColor = color;
//     element.style.boxShadow = `0 0 2px black`;
// }

// function getRandomColor() {
//     let index = Math.floor(Math.random()*colors.length)
//     return colors[index];
// };







const board = document.querySelector('#board');
const squareNumbers = 750;
const colors = ['#7FFF00','#DEB887','#00FFFF','#006400','#483D8B','#FFD700','#FF00FF','#ADFF2F','#F0FFF0','#ADD8E6','#00FF00','#800000','#0000CD','#FF4500','#FFFAFA','#4682B4','#008080'];

for (let i = 0; i < squareNumbers; i++) {
    const square = document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`;
}

function removeColor(element) {
    const color = 'grey';
    element.style.backgroundColor = color;
    element.style.boxShadow = '0 0 2px black';
}

function getRandomColor() {
    let index = Math.floor(Math.random()*colors.length);
    return colors[index];
}