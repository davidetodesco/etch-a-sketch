const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = '37.5px'
  square.style.height = '37.5px'
  container.appendChild(square);
}