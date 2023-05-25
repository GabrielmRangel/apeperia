var new0 = document.getElementById('new0');
var new1 = document.getElementById('new1');
var new2 = document.getElementById('new2');
var noticias = document.querySelectorAll('.listaDeArtigos-item');
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

new0.style.display = "block";

var indicadorSliderAtual = document.createElement('span');
indicadorSliderAtual.classList.add('escondeVisualmente');
indicadorSliderAtual.id = 'escondeVisualmente';
indicadorSliderAtual.textContent = "(Slide Atual)";

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelector('.escondeVisualmente').remove();

    // btn.href = 'javascript:void(0)';

    noticias.forEach(function(noticia){
      noticia.style.display = 'none';

      if(this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')){
        noticia.style.display = 'block';
      }
    }.bind(this));

    this.append(indicadorSliderAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})