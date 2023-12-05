const form = document.getElementById('form');
const iptOne = document.getElementById('ipt-numberOne');
const iptTwo = document.getElementById('ipt-numberTwo');
let formIsValid = false;

function numberIsValid(number) {
    return iptOne.value < number;
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const messageSucess = `Formulário preenchido corretamente. Campo 1: ${iptOne.value}. Campo 2: ${iptTwo.value}`;
    const messageError = `Formulário prenchido incorretamente. O segundo campo deve ser maior que o primeiro`;
    formIsValid = numberIsValid(iptTwo.value);

    if(formIsValid) {

        alert(messageSucess);

        iptOne.value = '';
        iptTwo.value = '';

    } else {
        
        iptTwo.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        alert(messageError);
    }

});

iptTwo.addEventListener('keyup', function(e) {

    console.log(e.target.value);
    formIsValid = numberIsValid(e.target.value);

    if(!formIsValid) {
        iptTwo.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        iptTwo.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})