
// Grab elements
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');

let prevNum = 0;
let answer = 0;
let funcPressed = false;
let equalsPressed = true;
let whichFunc = '';

// Click events
for (let i = 0; i < number.length; i++) {
    const id = number[i].id;
    number[i].addEventListener("click", () => numPress(number[i].id))
};

for (let i = 0; i < operator.length; i++) {
    const id = operator[i].id;
    operator[i].addEventListener("click", () => operate(operator[i].id))
};


// Functions
function numPress(id) {
    if (screen.innerHTML == 0 || screen.innerHTML == 'NaN' || funcPressed === true) {
        screen.innerHTML = '';
        funcPressed = false;
    }
    if (id === "." && screen.innerHTML.includes(".")) {
    }
    if (screen.innerHTML.length > 11) {
    }
    else {
        screen.innerHTML += id;
    }
}

function operate(id) {

    // Clear Function
    if (id === 'clear') {
        screen.innerHTML = 0;
        whichFunc = '';
        prevNum = 0;
        nextNum = 0;
    }

    // Negative Function
    if (id === 'neg') {
        if (screen.innerHTML == 0) {}
        else if (screen.innerHTML.includes('-')) {
            screen.innerHTML = screen.innerHTML.replace('-','');
        }
        else {
            prevNum = screen.innerHTML;
            screen.innerHTML = '-' + prevNum;
        }
    }

    // Square Root Function
    if (id === 'sqrt') {
        screen.innerHTML = Math.sqrt(screen.innerHTML).toPrecision(8);
    }

    // Percent Function
    if (id === 'perc') {
        screen.innerHTML = screen.innerHTML * 0.01;
    }

    // Arithmetic Functions
    if (id === 'divide' || id === 'multiply' || id ==='subtract' || id === 'add') {
        if (equalsPressed === false) {
            operate('equals');
        }
        equalsPressed = false;
        funcPressed = true;
        prevNum = screen.innerHTML;
        whichFunc = id;
    }

    // Calculate Function
    if (id === 'equals') {
        if (whichFunc === 'divide') {
            nextNum = screen.innerHTML;
            answer = prevNum / nextNum;
        }
        else if (whichFunc === 'multiply') {
            nextNum = screen.innerHTML;
            answer = prevNum * nextNum;
        }
        else if (whichFunc === 'subtract') {
            nextNum = screen.innerHTML;
            answer = prevNum - nextNum;
        }
        else if (whichFunc === 'add') {
            nextNum = screen.innerHTML;
            answer = +prevNum + +nextNum;
        }
        if (whichFunc != '') {
            if (toString(answer).length > 11) {
                screen.innerHTML = answer.toPrecision(8);
            }
            else {
                screen.innerHTML = answer;
            }
        }
        equalsPressed = true;
        whichFunc = '';
    }

}





