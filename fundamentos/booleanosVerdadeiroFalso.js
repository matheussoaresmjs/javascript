let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// ! = negativo/não
// !!true = true
// !!false = false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string com espaço é verdadeiro
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // se o resultado interno for verdadeiro, será verdadeiro, mesmo com as duas esclamações negativas. 

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia é falso
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false)) // se deu falso dentro, vai dar falso no resultado

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa')) //wtf


console.log('Teste...')
let nome = '' // nome está sem valor..
console.log(nome || 'Desconhecido') // logo será impresso o 'Desconhecido'. 
let nom3 = 'Bada'
console.log(nom3 || 'Desconhecido')


