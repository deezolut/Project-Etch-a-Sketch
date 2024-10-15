const container = document.querySelector('#container');
const userClickedButton = document.querySelector('button');

userClickedButton.addEventListener('click', changeGrid);


function changeGrid() {
    try {
        while (container.children) {
            container.removeChild(container.firstElementChild);
        }    
    }
    catch {}
    finally {
        let userInput = +prompt('Enter an integer between 1 and 100');
        if (!Number.isInteger(userInput) || isNaN(userInput)) {
            alert('Invalid answer');
            return;
        }
        
        const grid = userInput*userInput;
        let num = 100/userInput; // This makes sure that rows = columns based on user's input
        
        for (let i = 0; i < grid; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridBox');


            function randomColor() {
                let color = Math.floor(Math.random() * 255);
                return color;
            }
            
    
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            })
            newDiv.style.flex = `1 1 calc(${num}% - 2px)`;
            container.appendChild(newDiv); 
        }
    }
}