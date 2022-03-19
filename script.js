function Add() {

  // pegar url da img 
  var imgDoGame = document.getElementById("addgame").value;
  // pegar nome do game
  var nomeDoGame = document.getElementById("nomegame").value;

  // verificar formato da img
  if (imgDoGame.endsWith(".jpg")) {

      //verificar titulo
      if (nomeDoGame == "") {

          //erro titulo
          alert("Coloque um titulo!")

          //img ok - titulo ok - rodar funçoes    
      } else {
        img(imgDoGame);
        titulo(nomeDoGame);
      }

  //erro img    
  } else {

      alert("Esse formato de imagem não e valido!")

  }

  //input vazio depois de add
  document.getElementById("addgame").value = ""
  document.getElementById("nomegame").value = ""

}


// imprimir img
function img(gameImage) {

  var imagemDoGame = "<img src=" + gameImage + ">";

  imprimirGame.innerHTML = imprimirGame.innerHTML + imagemDoGame;

}

//imprimir titulo
function titulo(gameNome) {

  var tituloDoGame = "<p>" + gameNome + "</p>";

  imprimirNome.innerHTML = imprimirNome.innerHTML + tituloDoGame;
}