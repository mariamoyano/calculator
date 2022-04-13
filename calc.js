let display = document.getElementById('display');
let digits = Array.from(document.getElementsByClassName('button'));

digits.map(button => {
    button.addEventListener('click', (click) => {
        switch (click.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            case 'x':
                click.target.innerText = '*';
            default:
                display.innerText += click.target.innerText;
        }
    });
});