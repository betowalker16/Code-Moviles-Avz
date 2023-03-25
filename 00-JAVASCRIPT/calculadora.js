var op1 = 0;
var op2 = 0;
var resultado = 0;
var punto = true;
var op = true;
var sign = "";
var display = "";

function clearDisplay() {
    document.getElementById('display').value = 0;
    op1 = op2 = res = 0.0;
    punto = op = true;
}

function btnOpera(value) {
    if(op){
        sign = value;
        op1 = Number.parseFloat(document.getElementById('display').value);
        op = false;
        
    }
    document.getElementById('display').value = "0";
    punto = true;
    
}

function btnIgual() {
    if(!op){
        op2 = Number.parseFloat(document.getElementById('display').value);
        switch (sign) {
            case "+": resultado = op1 + op2; break;
            case "-": resultado = op1 - op2; break;
            case "/": resultado = op1 / op2; break;
            case "*": resultado = op1 * op2; break;
        }
        document.getElementById('display').value = resultado;

        punto = op = true;
        op1 = op2 = 0;
    }
}

function btnNumero(value) {
    displaynum = document.getElementById('display').value;
    
    if(displaynum == '0'){
        displaynum = "";
    }

    displaynum = displaynum + value;
    document.getElementById('display').value = displaynum;
}


function btnPunto() {
    if(punto){
        displaynum = document.getElementById('display').value;

        displaynum = displaynum + ".";

        document.getElementById('display').value = displaynum;
        punto = false;
    }
}