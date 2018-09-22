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
        document.getElementById('display').innerText = document.getElementById('display').innerText + te;
    }
  }
}

document.getElementById('on').addEventListener('click', function(){
  document.getElementById('display').innerText = '0';
  total = 0;
});

var total = 0;
var calculo;
var calculonew;
var operacion = "";
document.getElementById('igual').addEventListener('click', function(){
  if (operacion != ""){
    if (document.getElementById('display').innerText != ""){
      if (operacion == "+"){
          if (calculonew == ""){
            calculonew  = document.getElementById('display').innerText;
            total = total +  Number(calculo) + Number(calculonew);
            document.getElementById('display').innerText = total;
          }else {
            total = total +  Number(calculonew);
            document.getElementById('display').innerText = total;
          }
      }
    }
  }
});
document.getElementById('mas').addEventListener('click', function(){
  if (document.getElementById('display').innerText != ""){
    operacion = "+";
    calculonew = "";
    calculo = document.getElementById('display').innerText;
    document.getElementById('display').innerText = '';
  }
});
