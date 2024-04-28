// Escopo global
let toastBox = document.getElementById('toastBox');
let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Pedido foi enviado!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Erro, Arrume o erro!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Input inválido, tente novamente!';

// criando elemento toast(div), que ganha class 'toast', com texto 'sucess' e adiciona uma 'toastBox'
function showToast(msg){
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  // SE mensagem inclui 'erro', aplica class 'erro'
  if(msg.includes('Erro')){
    toast.classList.add('erro');
  }
  // SE mensagem inclui 'Invalid', aplica class 'invalid'
  if(msg.includes('Input')){
    toast.classList.add('invalido');
  }
  
  // Remove o card depois de 6s
  setTimeout(()=> {
    toast.remove();
  },5000)
}