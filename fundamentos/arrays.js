const valores = [7.7, 8.9, 6.3, 9.2] //é importante declarara arrays como "const" para evitar bugs
console.log(valores[0], valores[3])
console.log(valores[4]) // Quando tentar acessar um indice que não existe, apresenta "undefined"

valores[4] = 10 // atribuindo casas(tinha 3) e valor a um array
console.log(valores)
console.log(valores.length) //length diz quantos elementos existem no array

valores.push({id: 3}, false, null, 'teste') //push = para adicionar valores no array
console.log(valores)

console.log(valores.pop()) //pop = vai retirar o ultimo valor do array
delete valores[0] //delete = vai tirar o primeiro elemento do array
console.log(valores) 

console.log(typeof valores) // mostra que array é objeto? 