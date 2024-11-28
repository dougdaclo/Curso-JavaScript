function calcular() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    
 if (num.value > 9 || num < 1) {
        window.alert('Digite um número de 1 a 9 para calcular a tabuada')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c=1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n}x${c}=${n*c}`
            //item.value = `tab${c}`
            tab.appendChild(item)  
        }
    }
}