/*
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
*/

function adicionar() {
    let num = document.getElementById('num')
    let n = Number(num.value);

    if (n > 100 || n < 1 || num.value.trim() === '') {
        window.alert('Digite um número válido entre 1 e 100 para adicionar a lista')
    } else {

        if (txtlista.options[0] && txtlista.options[0].value === 'placeholder') {
            txtlista.options[0].remove();
        }
        
        // Verifica se o número já existe no select
        let jaAdicionado = false;
        for (let i = 0; i < txtlista.options.length; i++) {
            if (Number(txtlista.options[i].value) === n) {
                jaAdicionado = true;
                break;
            }
        }
    
        if (jaAdicionado) {
            window.alert(`O número ${n} já foi adicionado!`);
        } else {
            // Adiciona o número na lista
            
            let item = document.createElement('option');
            item.text = `Valor ${n} adicionado`;
            item.value = n; // Adiciona o valor como identificador
            txtlista.appendChild(item);
            

            num.value = ''; // Limpa o campo de input
            num.focus(); // Retorna o foco ao campo de input
        }
    }
}

function finalizar(){

    

    let res = document.getElementById('res')
    let txtlista = document.getElementById('txtlista')


    let maior = Number(txtlista.options[0].value);
    let menor = Number(txtlista.options[0].value);
    for (let i = 1; i < txtlista.options.length; i++) {
        let valorAtual = Number(txtlista.options[i].value);
        if (valorAtual > maior) {
            maior = valorAtual;
        }
        if (valorAtual < menor) {
            menor = valorAtual
        }
    }


    let media = Array.from(txtlista.options).reduce((soma, option) => soma + Number(option.value), 0) / txtlista.options.length;
    let soma = Array.from(txtlista.options).reduce((soma, option) => soma + Number(option.value), 0);

    
    res.innerHTML = `<p>Total de elementos cadastrados: ${txtlista.options.length}</p>`
    res.innerHTML += `<p>O maior valor cadastrado foi: ${maior}</p>`
    res.innerHTML += `<p>O menor valor cadastrado foi: ${menor}</p>`
    res.innerHTML += `<p>A média dos números cadastrados foi: ${media.toFixed(1)}</p>`
    res.innerHTML += `<p>A soma dos valores cadastrados: ${soma.toFixed(1)}</p>`
}
