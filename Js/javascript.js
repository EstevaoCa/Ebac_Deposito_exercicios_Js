const form = document.getElementById('form-deposito');
const saldoConta = document.getElementById('saldo-conta');
const valorSaque = document.getElementById('valor-saque');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validarNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}

function validarSaque(saldo, saque) {
  return parseFloat(saldo) >= parseFloat(saque);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensagemSucesso = `Saque de: <b>${valorSaque.value}</b> realizado com sucesso. Saldo atual: <b>${saldoConta.value - valorSaque.value}</b>;`;

  formEValido = validarNome(nomeBeneficiario.value);
  const saqueValido = validarSaque(saldoConta.value, valorSaque.value);

  if (formEValido && saqueValido) {
    const conteinerMensagemSucesso = document.querySelector('.success-message');
    conteinerMensagemSucesso.innerHTML = mensagemSucesso;
    conteinerMensagemSucesso.style.display = 'block';

    saldoConta.value = '';
    valorSaque.value = '';
    nomeBeneficiario.value = '';
  } else {
    if (!formEValido) {
      nomeBeneficiario.classList.add('error');
    } else {
      nomeBeneficiario.classList.remove('error');
    }

    saldoConta.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
  formEValido = validarNome(nomeBeneficiario.value);

  if (!formEValido) {
    nomeBeneficiario.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBeneficiario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});

saldoConta.addEventListener('keyup', function(e) {
  formEValido = validarNome(nomeBeneficiario.value);

  if (!formEValido) {
    nomeBeneficiario.classList.add('error');
  } else {
    nomeBeneficiario.classList.remove('error');
  }

  document.querySelector('.error-message').style.display = 'none';
});
