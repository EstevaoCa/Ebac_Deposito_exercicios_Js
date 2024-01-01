const form = document.getElementById('form-saque');
const saldoContaInput = document.getElementById('saldo-conta-input');
const valorSaqueInput = document.getElementById('valor-saque-input');
const nomeBeneficiarioInput = document.getElementById('nome-beneficiario-input');
let formularioValido = false;

function validarNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}

function validarSaque(saldo, saque) {
  return parseFloat(saldo) >= parseFloat(saque);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensagemSucesso = `Saque de: <b>${valorSaqueInput.value}</b> realizado com sucesso. Saldo atual: <b>${saldoContaInput.value - valorSaqueInput.value}</b>;`;

  formularioValido = validarNome(nomeBeneficiarioInput.value);
  const saqueValido = validarSaque(saldoContaInput.value, valorSaqueInput.value);

  if (formularioValido && saqueValido) {
    const mensagemSucessoContainer = document.querySelector('.success-message');
    mensagemSucessoContainer.innerHTML = mensagemSucesso;
    mensagemSucessoContainer.style.display = 'block';

    saldoContaInput.value = '';
    valorSaqueInput.value = '';
    nomeBeneficiarioInput.value = '';
  } else {
    if (!formularioValido) {
      nomeBeneficiarioInput.classList.add('error');
    } else {
      nomeBeneficiarioInput.classList.remove('error');
    }

    saldoContaInput.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  }
});

nomeBeneficiarioInput.addEventListener('keyup', function(e) {
  formularioValido = validarNome(nomeBeneficiarioInput.value);

  if (!formularioValido) {
    nomeBeneficiarioInput.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBeneficiarioInput.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});

valorSaqueInput.addEventListener('input', function(e) {
  valorSaqueInput.value = formatarNumero(valorSaqueInput.value);
});

saldoContaInput.addEventListener('input', function(e) {
  saldoContaInput.value = formatarNumero(saldoContaInput.value);
});
