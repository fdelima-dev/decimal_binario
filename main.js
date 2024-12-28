function decimalParaBinario(decimal){
    if(decimal === 0){
        return "0";
    }
    let negative = false;
    if(decimal < 0){
        negative = true;
        decimal = Math.abs(decimal)
    }
    let binario = ""
    while(decimal > 0){
        binario = (decimal % 2) + binario
        decimal = Math.floor(decimal / 2)
    }
    if(negative){
        binario = "-" + binario;
    }
    return binario;
}
function mostrarBinario(){
    const numeroDecimal = document.getElementById('numeroDecimal').value;
    const resultado = decimalParaBinario(parseInt(numeroDecimal))

    document.getElementById('resultado').textContent = `Resultado ${resultado}`
}