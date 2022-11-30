//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // resultado será not a namber(NaN), pois não tem valor atribuido a segunda posição
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // pegará somente os dois primeiros valores. O resto será ignorado
// obs: função é uma ótima prática para evitar bugs

// Funcao com retorno
function soma(a, b = 1){ // se "b" não receber valor, será atribuido o "1"
    return a + b
}

console.log(soma(2, 3)) // 2 foi atribuido ao "a", 3 foi atribuido ao "b"
console.log(soma(2)) // 2 foi atribuido ao "a", logo o "b" pegará atribuição pelo 1
