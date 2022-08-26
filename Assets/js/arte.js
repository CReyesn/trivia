function getRandomInt(max) {
    return Math.floor((Math.random() * max)+1);
  }

 // alert(getRandomInt(5)) entrega 1,2,3,4 o 5

 function uno(){
    var miParrafo=document.getElementById("parrafo")
    miParrafo.innerHTML="¿Cómo se llama este pintor que se cortó la oreja?"
 }
 


 x=getRandomInt(1)


 switch(x){
    case 1: uno()

 }