document.body.style.cssText += "font-size: 20pt; font-weight: bold;";

var carros = [];
var modelo = document.getElementById("modeloCarro")
var cor = document.getElementById("selectCor");
var fabricante = document.getElementById("fabricante");


//Botão Cadastrar
$('#btnCadastar').click(function(){

    $('#selectCor').change()

    if(!validaCor()
    ){return
       
    } 
    carros.push([
        modelo.value,
        fabricante.value,
        cor.value  ])

      
  document.getElementById('formulario').reset()
    
})

//Botão Veiculos Cadastrados 
$('#btnVeiculos').click(function(){
    if(carros.length < 1){
        cards = 
        "<div class='divc' >" +
        '<h2> Não existem carros cadastrados </h2>' +
        "</div>"

    }else{
        let cards = "";

        for(let i in carros){//iterator
            let classe = carros[i][2];

            cards +=
            '<div id="divcard" class= "card '+ classe +'" >'  +
            "Modelo: <span class='inputspan'> "         + carros[i][0]   + "</span><br>" +
            "Fabricante: <span class='inputspan'>"      + carros[i][1] + "</span><br>" +
            "Cor: <span class='inputspan'> "            + carros[i][2]   + "</span><br>" +
            
"</div>";
        
            document.getElementById('resultados').innerHTML = cards;
   
        }
    }

    

    
})
    

function validaCor(){
    switch(cor.value){
        case "escolha":
        return false;
    
    case "preto":
        return true;

    case "branco":
        return true;

    case "cinza":
        return true;

    case "vermelho":
        return true;

    case "azul":
        return true;
    
}
}


