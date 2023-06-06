//timeout = Conta o determinado tempo para a função
//setInterval = define um intervalo 
var quadros = [
    /*0*/ "./img/parado.png",  
    /*1*/ "./img/direita.png",
    /*2*/ "./img/esquerda.png"   
    ];
var imgUrso = document.getElementById("img-urso");
var margem = 420;
var animaUrso = "";
var direction = "frente";
var movimento;


setTimeout(function(){ //quando coloca function é não coloca nome é pra rodar na hora
    animaUrso = setInterval(trocaQuadro, 150);
} ,3000)

function trocaQuadro(){  
    movimento = true;

    if(imgUrso.src.indexOf("direita.png") >=0){
        imgUrso.src = quadros[2];
    }else {
        imgUrso.src = quadros[1];
    }

    if(direction == "frente"){//andar pra frente
        margem += 10;
        if(margem >= window.innerWidth -170){ //volta
            direction = "tras";
            imgUrso.style = "transform: scaleX(-1)"
        }
     }else {//andar pra trás
        margem -= 10;
     }  

     if(margem <= 380){
        direction = "frente"
        imgUrso.style = "transform: scaleX(1)";
     
     }
    
    imgUrso.style.marginLeft = margem + "px";
  
  }

  function pararUrso(){
    let button = document.getElementById("button")
    let divTempo = document.getElementById("divTempo");


    if(divTempo.innerHTML == 0){
        if(movimento){
        clearInterval(animaUrso);
        imgUrso.src = quadros[0];
        movimento = false;
        button.innerHTML = "Andar Urso";
        }  else{
        animaUrso = setInterval(trocaQuadro,50)
        button.innerHTML = "Parar urso";
        }

    }
    }
  

   
    



    

        
    
    


               



