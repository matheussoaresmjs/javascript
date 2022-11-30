const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
    Olá 
    ${nome}!` // $ interpola(consegue fazer quebra de linha em string)
            //É utilizado crase ao inves de aspas simples (shit+acentuação)

console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)


const up = texto => texto.toUpperCase() //Esse bloco atribui uma função a uma constante, no caso aqui, capslock
console.log(`Ei... ${up('cuidado')}!`)