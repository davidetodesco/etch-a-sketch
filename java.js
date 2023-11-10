const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {
  const squares = document.createElement('div');
  squares.classList.add('square');
  squares.style.width = '37.5px';
  squares.style.height = '37.5px';
  container.appendChild(squares);
}

function getRandom () {
  Math.floor((Math.random() * 255)+1)
}

function getNewBg() {
  let a = getRandom()
  let b = getRandom()
  let c = getRandom()
  squares.style.backgroundColor = (a, b, c)
}

let singleSquares = document.querySelectorAll('.square') 

singleSquares.forEach((square) => {
  const singSquare = square;
  singSquare.addEventListener('mouseenter',(x) =>{
    x.target.style.backgroundColor = 'black'
  } )
})

const button = document.querySelector('.erase')

button.addEventListener('click', () => {
  squares.target.style.backgroundColor = 'white'
} )