var numero = 1 // variavel global
{
    var numero = 2 // variavel local
    console.log('dentro =', numero) //impressão local
}
console.log('fora = ', numero) //impressão global
//teste de badinho
{
    var numero = 3
    console.log('Extra = ', numero)
}