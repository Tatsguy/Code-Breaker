//Definimos las variables que ocuparemos mas adelante
const btnCtrl = document.getElementById('btnCtrl')
const txtNum = document.getElementById('txtNum')
const titPista = document.getElementById('resTitle')
const infPista = document.getElementById('resInfo')
const table= document.getElementById('intentos')

//Se habilitan los input
function iniciarJuego() {
    ranNum = generarAleatorio()
    console.log(ranNum)
    txtNum.disabled=false
    btnCtrl.disabled=false
    txtNum.value=''
    titPista.innerText ='',infPista.innerText = '',table.innerHTML=''
    document.getElementById('start').innerText='Reiniciar Juego'
}

//Se genera un numero aleatorio de 4 digitos que no se repiten
function generarAleatorio() {
    numAle = '',i = 0
    while (i < 4) {
        digito = Math.floor(Math.random() * 9) + 1;
        //Solo se agrega el numero si no ha sido agregado anteriormente
        if (!numAle.includes(digito)){
            numAle += digito
            i++
        }
    }
    return numAle;
}

//Se verifica que los numeros coincidan
function test() {
    pista='',guiones=''
    userInput = txtNum.value
    //Se evalua cada uno de los digitos
    for (let index = 0; index < 4; index++) {
        if(ranNum.includes(userInput[index])){
            if(ranNum[index]==userInput[index])
                pista += '*'
            else
                guiones += '-'
        }
    }
    //Note que en la prueba siempre agrego los asteriscos al inicio aunque el orden fuera inverso
    //Por lo que supuse que es para complicar un poco mas las cosas
    pista+=guiones
    if(pista!='****'){
        titPista.innerHTML='Lastima'
        infPista.innerHTML='Intenta otra vez'
        table.innerHTML+='<tr><td>'+userInput+'</td>'+'<td>'+pista+'</td></tr>'
    }else{
        titPista.innerHTML='Felicidades'
        infPista.innerHTML='Adivinaste el numero'
        btnCtrl.disabled=true
    }
}
