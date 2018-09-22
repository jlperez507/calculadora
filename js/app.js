document.getElementById('1').addEventListener('click', function(){
  escibir(1);
});
document.getElementById('2').addEventListener('click', function(){
  escibir(2);
});
document.getElementById('3').addEventListener('click', function(){
  escibir(3);
});
document.getElementById('4').addEventListener('click', function(){
  escibir(4);
});
document.getElementById('5').addEventListener('click', function(){
  escibir(5);
});
document.getElementById('6').addEventListener('click', function(){
  escibir(6);
});
document.getElementById('7').addEventListener('click', function(){
  escibir(7);
});
document.getElementById('8').addEventListener('click', function(){
  escibir(8);
});
document.getElementById('9').addEventListener('click', function(){
  escibir(9);
});
document.getElementById('0').addEventListener('click', function(){
  escibir(0);
});

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
