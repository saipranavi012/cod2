document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (currentInput !== '' && previousInput !== '' && operator !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        previousInput = calculate(previousInput, currentInput, operator);
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                    display.textContent = previousInput;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
    
    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        if (op === '+') return (a + b).toString();
        if (op === '-') return (a - b).toString();
        if (op === '*') return (a * b).toString();
        if (op === '/') return (a / b).toString();
        return b;
    }
});
