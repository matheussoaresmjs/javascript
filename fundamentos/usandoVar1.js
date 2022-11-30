//**EVITAR VARIAVEIS GLOBAIS, POIS TORNA O CÓDIGO MENOS CONFIÁVEL E SUCETIVEL A BUGGS */
{
    {
        {
            {
                var sera = 'Será???' //variavel global(fora de uma função)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //variavel local(Dentro de uma função)
    console.log(local)
}

teste()
console.log()
