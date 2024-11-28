let num = [5, 8, 2, 9, 3]
num[3] = 6
num[5] = 7 //colocar o valor na posição que está na chave
num.push(1) //coloca esse valor no final
num.sort() //coloca os vetores em ordem 
console.log(`O vetor tem ${num}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)