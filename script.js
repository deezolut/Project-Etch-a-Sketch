let elementsCount = 16*16;
const container = document.querySelector('#container');

for (let i = 0; i < elementsCount; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridBox')
    container.appendChild(newDiv); 
}
