const form = document.getElementById('form-deposito');
const nomeBenefeciario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validarNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}


form.addEventListener('submit', function(e){
  e.preventDefault();
 
  
  const numeroContaBeneficiario = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');
  const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositou para o cliente <b>${nomeBenefeciario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>;`

  formEValido = validarNome(nomeBenefeciario.value);
  
  if (formEValido){
    const conteinerMensagemSucesso = document.querySelector('.success-message');
     conteinerMensagemSucesso.innerHTML = mensagemSucesso;
     conteinerMensagemSucesso.style.display = 'block';
     
     
     nomeBenefeciario.value = '';
     numeroContaBeneficiario.value = '';
     valorDeposito.value = '';
  } else {
    nomeBenefeciario.style.border = '1px solid red'
    document.querySelector('.error-message').style.display = 'block'
  }
  
})
nomeBenefeciario.addEventListener('keyup', function (e) {
  console.log(e.target.value);
  formEValido = validarNome(e.target.value);
  
  if (!formEValido){
    nomeBenefeciario.classList.add('error')
   // nomeBenefeciario.style.border = '1px solid red'
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBenefeciario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
})