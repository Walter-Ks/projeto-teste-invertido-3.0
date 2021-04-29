


const calcular = document.getElementById('calcular');



function calculando() {
     input1 = document.getElementById('inp1').value;
     input2 = document.getElementById('inp2').value;
     input3 = document.getElementById('inp3').value;
     resultado = document.getElementById('resultado')


    

    if(input1 !== '' && input2 !== '' && input3 !== ''){
    const conta = (((input2 - input1) / input3) / 0.01747).toFixed(2);

    resultado.textContent = conta;
    }else{
        resultado.textContent = "Opsss, faltou informação :| "
    }

}

function op1(){
    const caixa = document.getElementById('check');
    caixa.innerText = "opção 1 selecionada"
    
}

function op2(){
    const caixa = document.getElementById('check');
    caixa.innerText = "opção 2 selecionada";
    
}

function op3(){
    const caixa = document.getElementById('check');
    caixa.innerText = "opção 3 selecionada"
    
}
function op4(){
    const caixa = document.getElementById('check');
    caixa.innerText = "opção 4 selecionada"
    
}




calcular.addEventListener('click',calculando);

