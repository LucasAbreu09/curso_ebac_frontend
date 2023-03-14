const from = document.getElementById('form_deposito');
const nomeBeneficiario = document.getElementById('nome_beneficiarios');
let formEhvalido = false

function validaNome(nomeCompleto){
    const nomeComoArry = nomeCompleto.split(' ');
    return nomeComoArry.length >= 2;
}

from.addEventListener('submit', function(e){
    
    e.preventDefault();
   
    const numeroContaBeneficiario = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const mesagemSucesso = `montante de:  <b>${valorDeposito.value}</b>  depositado para o cliente:  <b>${nomeBeneficiario.value}</b> -  conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEhvalido = validaNome(nomeBeneficiario.value)
    if (formEhvalido) {
        const containerMensagemSucesso = document.querySelector('.success_message')
        containerMensagemSucesso.innerHTML = mesagemSucesso;
        containerMensagemSucesso.style.display = 'block'

        nomeBeneficiario.value ='';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else{
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error_message').style.display = 'block'
    }
});

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEhvalido = validaNome(e.target.value)

    if (!formEhvalido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error_message').style.display = 'block'
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error_message').style.display = 'none'
    }
})

