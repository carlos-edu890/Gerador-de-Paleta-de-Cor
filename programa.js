document.addEventListener("DOMContentLoaded", () => {
  let nameColor = document.querySelectorAll('.cor span');
  let cores = document.querySelectorAll('.paletes');
  let botao = document.querySelector('#botao input');
  let myDiv = document.querySelectorAll('.cor');

  function gerarCor(){
    let mudar = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,0);
    return `#${mudar}`;
  }

  function botaoCor(){
    let cor = [];
    for(let i = 0; i < 10; i++){
      cores[i].style.backgroundColor = gerarCor();
      cor[i] = gerarCor();
      nameColor[i].innerHTML = cor[i].toUpperCase();
    }
  }

  function copiarCor(event) {
    let index = Array.from(myDiv).indexOf(event.currentTarget);
    if(index !== -1){
      navigator.clipboard.writeText(nameColor[index].innerHTML);
      let copiado = nameColor[index].innerHTML;
      nameColor[index].innerHTML = "Copied!";
      setTimeout(() => nameColor[index].innerHTML = `${copiado}`, 1000);
    }
    
  }

  botao.addEventListener("click", botaoCor);

  myDiv.forEach(div => {
    div.addEventListener("click", copiarCor);
  });

  botaoCor();
});