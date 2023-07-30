let runningTotal = 0;
let buffer = "0";
let prevousOperator;

const answerScreen = document.querySelector('.screen');

const buttonClick = value => {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    answerScreen.innerText = buffer;
}

const handleSymbol = symbol => {
    switch (symbol) {
        case 'C':
            buffer = 0;
            runningTotal = 0;
            break;
        case '=':
            if (prevousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            prevousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length ===1 ) {
                buffer = '0';
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':

        default:

            break;
    }
};