const container = document.querySelector('#container');
const elementsCount = 16*16;
let num = 62/10;

for (let i = 0; i < elementsCount; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridBox');
    newDiv.style.flex = `1 0 calc(${num}% - 2px)`;
    container.appendChild(newDiv); 
}
