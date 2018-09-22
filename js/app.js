var num = document.getElementsByClassName("n");
    for (var i = 0; i < num.length; i++) {
          num[i].addEventListener("click",function() {
             escibir(this.id);
          });
    }
    
function escibir(te){
  if (document.getElementById('display').innerText.length < 8){
    if (document.getElementById('display').innerText == "0"){
        document.getElementById('display').innerText = te;
    }else{
      if (igual == true){
            total = 0.00;
            operacion = "";
            igual = false;
            document.getElementById('display').innerText =  te;
      }else {
              document.getElementById('display').innerText = document.getElementById('display').innerText + te;
      }
    }
  }
}

document.getElementById('on').addEventListener('click', function(){
  document.getElementById('display').innerText = '0';
  total = 0;
  igual = false;
   operacion = "";
});

var total = 0;
var calculo;
var calculonew;
var operacion = "";
var igual = false;
document.getElementById('igual').addEventListener('click', function(){
  if (operacion != ""){
    if (document.getElementById('display').innerText != ""){
      if (operacion == "+"){
          if (calculonew == ""){
            calculonew  = document.getElementById('display').innerText;
            total = Number(calculo) + Number(calculonew);
            document.getElementById('display').innerText = total;
          }else {
            total = total +  Number(calculonew);
            document.getElementById('display').innerText = total;
          }
          igual = true;
      }else if (operacion == "-") {
          if (calculonew == ""){
            calculonew  = document.getElementById('display').innerText;
            total = Number(calculo) - Number(calculonew);
            document.getElementById('display').innerText = total;
          }else {
            total = total -  Number(calculonew);
            document.getElementById('display').innerText = total;
          }
            igual = true;
      }else if (operacion == "*") {
          if (calculonew == ""){
            calculonew  = document.getElementById('display').innerText;
            total = Number(calculo) * Number(calculonew);
            document.getElementById('display').innerText = total;
          }else {
            total = total *  Number(calculonew);
            document.getElementById('display').innerText = total;
          }
            igual = true;
      }else if (operacion == "/") {
          if (calculonew == ""){
            calculonew  = document.getElementById('display').innerText;
            total = Number(calculo) / Number(calculonew);
            document.getElementById('display').innerText = total;
          }else {
            total = total /  Number(calculonew);
            document.getElementById('display').innerText = total;
          }
            igual = true;
      }

      if (document.getElementById('display').innerText.length > 8 ){
        var cadena = document.getElementById('display').innerText;
        document.getElementById('display').innerText = cadena.substr(0, 8);
      }
    }
  }
});

function datoscalculadora(oper){
  if (document.getElementById('display').innerText != ""){
    operacion = oper;
    calculonew = "";
    calculo = document.getElementById('display').innerText;
    document.getElementById('display').innerText = '';
  }
   if (igual == true){
     igual = false;
   }
}

document.getElementById('mas').addEventListener('click', function(){
  datoscalculadora("+");
});

document.getElementById('menos').addEventListener('click', function(){
  datoscalculadora("-");
});

document.getElementById('por').addEventListener('click', function(){
  datoscalculadora("*");
});
document.getElementById('dividido').addEventListener('click', function(){
  datoscalculadora("/");
});


document.getElementById('sign').addEventListener('click', function(){
  if (document.getElementById('display').innerText != ""){
      document.getElementById('display').innerText = (-1) * Number(document.getElementById('display').innerText);
  }
});

document.getElementById('punto').addEventListener('click', function(){
  if (document.getElementById('display').innerText.length < 8){
    if (document.getElementById('display').innerText == "0"){
        document.getElementById('display').innerText = document.getElementById('display').innerText + ".";
    }else{
      var buscar = document.getElementById('display').innerText;
      if (buscar.indexOf(".") == -1){
        document.getElementById('display').innerText = document.getElementById('display').innerText + ".";
      }
    }
  }
});

var tcl = document.getElementsByClassName("tecla");
    for (var i=0; i< tcl.length; i++) {
        tcl[i].addEventListener("mousedown",function() {
           this.style.transform = "scale(1.1, 1.1)";
        });
        tcl[i].addEventListener("mouseup",function() {
          this.style.transform = "scale(1, 1)";
        });
    }
