//VARIÁVEIS GLOBAIS

var visor = document.getElementById("visor");
var historico = document.getElementById("historico")
var operador = "";
var valor1 = 0;


function btnNum(valor){
    if(visor.value.length < 18){
        if(valor === ','){
            if(visor.value.indexOf(',') < 0){ //tratei a virgula
                  if(visor.value == ""){
                    visor.value = "0,";
                  }  else {
                    visor.value += ",";
                  }
                
            }
        } else if(valor == 0){ // tratei o zero
            if(visor.value != "0"){
                visor.value += 0;
            }
    
            }else if(visor.value == "0"){
                visor.value = valor;
            
            } else {
                visor.value += valor;
            }
                    
            }
    }
        
function btnOp(op){
    operador = op;
    valor1 = Number(getVisor());
   
    historico.innerHTML += visor.value + " " + operador;

    visor.value = "";

}


function btnIgual(){
    let valor2 = Number(getVisor());
    let total = 0;
    historico.innerHTML += " " + visor.value + " = ";


    switch(operador){
        case "+":
           total = valor1 + valor2;
            break;//parar a condição
        case "-":
            total = valor1 - valor2;
            break;
        case "x":
            total= valor1 * valor2;
            break;
        case "/":
            if(valor2 ==0){
               total = "Não dividir por 0!";
            }else{
                total = valor1 / valor2;
            }
            }    
            setvisor(total);
            historico.innerHTML += visor.value + "</br>";
    }

    function getVisor(){
        let valor;

        if(visor.value.indexOf(",") >= 0){
            valor = visor.value.replace(",","."); //Replace = substituir

        } else {
            valor = visor.value;
        }

        return valor;
    }

    function setvisor(valor){
        valor = valor.toString(); //toString = Transforma número em texto
        
        if(valor.indexOf(".") >= 0){
            valor = valor.replace(".",",");
       }

       visor.value = valor;

  
    }
    
    function btnCe(){
        visor.value = 0;
    }
    
    function btnC(){
        visor.value = 0;
        operador = "";
        valor1 = 0;
    }

    function inverteSinal(){
        setvisor(getVisor() * (-1));
    }
        
    function backSpace() {
        let visorText = visor.value;
        visor.value = visorText.substring(0,visorText.length-1);
        
    }
    
    function deletar(){
        historico.innerHTML = "";
    }

     

     
        
