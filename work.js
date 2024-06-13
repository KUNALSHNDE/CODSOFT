const display = document.querySelector('input[name="display"]');

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        switch (buttonText) {
            case 'AC':
                display.value = '';
                break;
            case 'DE':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    const evaluatedValue = display.value.replace(/x/g, '*').replace(/÷/g, '/');
                    display.value = eval(evaluatedValue);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            case 'x':
                display.value += 'x';
                break;
            case '÷':
                display.value += '÷';
                break;
            default:
                display.value += buttonText;
        }
    });
});
