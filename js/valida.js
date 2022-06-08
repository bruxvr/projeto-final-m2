console.log('oi')

const btn = document.getElementById('btnEnviar');
btn.addEventListener('click', function (e){
    e.preventDefault

    let name = document.querySelector('#Oemail');
    let password = document.querySelector('#password');
    let inputEmail = name.value;
    let inputPassword = password.value;
    console.log(`${inputEmail} ${inputPassword}`);
    let validou1 = 0
    let validou2 = 1

for (let i = 0 ; i < inputEmail.length ; i++){

    if (inputEmail[i] == '@' ){
    validou1 = 2
    } else if (inputEmail[i] == '.' ){
    validou2 = 2
    }
}
if (validou1 == validou2){
    alert('Login efetuado com sucesso.')
}
else{
    alert('Dados inválidos.')
}
})

// codigo deu erro com so uma funcao, dividi em 2 funcoes
// so colocar a referencia da main
function goo(){
    window.location.href = "http://www.google.com/";
}
function face(){
    window.location.href = "http://www.facebook.com/";
}

// VALIDADOR DE SENHA

const senha = document.getElementById('#senha').value()
const valSenha = document.getElementById('#valSenha').value()

if (senha === valSenha) {
    return true
} else {
    return alert('As senhas devem coincidir!')
}





