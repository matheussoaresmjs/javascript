const prod1 = {} //Criando uma tabela
prod1.nome = 'Celular Ultra Mega' //adicionando nome a categoria 'nome'
prod1.preco = 4998.90 //adicionando valor a categoria 'preco'

prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1) //imprimindo a tabela



const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{"nome": "Camisa Polo", "preco": 79.90}' //JSON = é basicamente um formato de código em texto


console.log(prod2)