let operandoa;
let operandob;
let operacion;

function init(){
    //letiables
    let igual = document.getElementById('igual');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');    
    let uoperandoa = document.getElementById('uoperandoa');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let raizCuad = document.getElementById('raizCuad');
    let porcentaje = document.getElementById('porcentaje');
    let sin = document.getElementById('sin');
    let cos = document.getElementById('cos');
    let tg = document.getElementById('tg');
    

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";        
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";                
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";        
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";        
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";        
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";        
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";        
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";        
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";        
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";        
    }
    reset.onclick = function(e){
        resetear();        
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();        
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();        
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();        
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();        
    }
    porcentaje.onclick = function(e){
        operandoa = resultado.textContent;
        operacion= "%";
        limpiar();
    }
    sin.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "sin";
        limpiar();
    }
    cos.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "cos";
        limpiar();
    }
    tg.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "tg";
        limpiar();
    }
    raizCuad.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "√";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;        
        resolver();        
    }
    
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

// function porcentaje(operandoa, operandob, operc){
//     let operandoa = 0;
//     let operandob = 0;
//     let operc = 100;
//     if(resta){
//         operandoa - (operandob * operandoa / operc)
//     }else if(suma){
//         operandoa + (operandob * operandoa / operc)
//     }
// }

function resolver(){
    let res = 0;
    let operc = 100;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat (operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat (operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat (operandob);
            break;
        
        case "/":
            res= parseFloat (operandoa) / parseFloat (operandob);
            break;  

        case "%":
            res= (parseFloat(operandoa) * parseFloat (operandob)) / parseFloat (operc);  
            break; 

        case "sin":
            res= Math.sin(parseFloat(operandoa));
            break;

        case "cos":
            res= Math.cos(parseFloat(operandoa));
            break;

        case "tg":
            res = Math.tan(parseFloat(operandoa));
            break;

        case "√":
            res = Math.sqrt(parseFloat(operandoa));
            break;
            
    }
    resetear();
    resultado.textContent = res;
}