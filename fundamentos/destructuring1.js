// NOVO RECURSO DO ES2015 (ECMANSCRIPT)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: { 
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // removendo nome e idade da variavel "pessoa"
console.log(nome, idade) // imprimindo os dados removidos

const { nome: n, idade: i } = pessoa // removendo e atribuindo nome/letra de variável
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // tirando nome que não foi atribuido = vai retonar undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa // removendo dentro de chave
console.log(logradouro, numero, cep) 

// acessar dado aninhado que não esteja definido, resultará em erro