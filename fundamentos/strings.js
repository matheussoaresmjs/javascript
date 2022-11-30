const escola = "Cod3r"

console.log(escola.charAt(4)) //char.At(4) o numero indica a posição na letra
console.log(escola.charAt(5)) //char.At(5) JS não retorna valor ou resultado de erro mesmo não contendo erro no resultado
console.log(escola.charCodeAt(3)) //charCodeAt(3), ta pegando o 3 e associando a referencia com a tabela ask(unicodetable)
console.log(escola.indexOf('3')) //indexOf('3) procura uma informação string escrita, no caso.. "Existe nome "3"?"

console.log(escola.substring(0)) //substring() "a partir de" imprime as informações da string, o numero indica onde começar.
console.log(escola.substring(0, 3)) //substring(0, 3) indica o inicio e o fim sem imprimir o "fim" (Vá ao indice 0 e me dê três caracteres)

console.log('Escola '.concat(escola).concat("!")) // concat() é para concatenação ou juntar duas string
console.log('Escola '+ escola + "!") // outra forma do comando de cima

console.log(escola.replace(3, 'e')) // replace() pegou o "3" e substitui com o "e"

console.log('Ana,Maria,Pedro'.split(',')) //split() escolhe um separador "," e gerar um array. Ele vai quebrar a partir da virgula(",")





