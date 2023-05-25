// Variáveis
var btnAbreDialog = document.getElementById('abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.classList.add('apareceBotao');

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  document.getElementById('conteudoForaDialog').inert = true;
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  document.getElementById('conteudoForaDialog').inert = false;  
  btnAbreDialog.focus();   
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);
document.addEventListener('keydown', (evento) => {
  if(evento.key === "Escape"){
    fechandoDialog();
  }
});