var p1 = "x"
var p2 = "o"
var vez = p1;
var morreu = false;

Mostrar();
iniciar();

function Mostrar(){

  if(morreu){return;}

  if(vez == p1){
    var p = document.querySelectorAll("div#Mostrador img")[0]; 
    p.setAttribute("src", "X.png")
  }else{
    var p = document.querySelectorAll("div#Mostrador img")[0]; 
    p.setAttribute("src", "O.png")
  }

}

function iniciar(){
  var esp = document.getElementsByClassName("espaço")
  for (var i = 0; i < esp.length; i++) {
    
    esp[i].addEventListener("click", function(){

      if(morreu){return;}

      if(this.getElementsByTagName('img'). length == 0){

        if(vez == p1){
          this.innerHTML = "<img  src='X.png' width='40px' height='40px'>"
          this.setAttribute("jogada", p2)
          vez = p2
        }else{
          this.innerHTML = "<img  src='O.png' width='40px' height='40px'>"
          this.setAttribute("jogada", p1)
          vez = p1
        }
        Mostrar();
      }
    })
    
  }
}