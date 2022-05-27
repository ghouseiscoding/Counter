const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const clearBtn = document.querySelector('#clear')
const counterEl = document.getElementById('counter');

let counter = 0;

function incrementCounter(){
    counter++
    counterEl.innerText = counter ; 
}

function decrementCounter(){
    counter--
    counterEl.innerText = counter ; 
}

function clearCounter(){
    counter = 0;
    counterEl.innerText = counter;
}

incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
clearBtn.addEventListener('click', clearCounter)