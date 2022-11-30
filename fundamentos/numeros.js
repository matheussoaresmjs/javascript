const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //  isInteger() determina se o valor passado é um inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  //to.Fixed() - escolhe quantas casas aparecem depois do ponto/virgula
console.log(media.toString(2)) //O método toString() retorna uma string representando o objeto. (2) binário
console.log(typeof media)