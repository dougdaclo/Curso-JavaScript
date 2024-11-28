function limpar(){
    document.getElementById('txtinicio').value = ""
    document.getElementById('txtfim').value = ""
    document.getElementById('cont').value = ""
    document.getElementById('res').innerHTML = ""

}

function contar(){
    let inicio = Number(document.getElementById('txtinicio').value)
    let fim = Number(document.getElementById('txtfim').value)
    let cont = Number(document.getElementById('cont').value)
    let resultado = document.getElementById('res')

    if (isNaN(inicio) || isNaN(fim) || isNaN(cont) || cont <= 0) {
        resultado.innerHTML = ('Por favor, insira valores válidos e um salto maior que 0')
        return
    }

    resultado.innerHTML = "Contando: ";

    if (inicio < fim) {
        
    for (let i = inicio; i <= fim; i += cont){
        resultado.innerHTML += (`${i} ✅`)
    }
    
} else {
    for (let i = inicio; i >= fim; i -= cont)
        resultado.innerHTML += (`${i} ✅`)
}
resultado.innerHTML += "🏁"

}