//5 * 4 * 3 * 2 * 1

const fatorial = n => {
    if (n < 0) {
        return Promise.reject('Valor não pode ser negativo ')
    }
    let res = 1
    
    for(let i = 2; i<= n;i++) {
        res = res * i 
    }
    return Promise.resolve(res)    
    
}

//uma função para chamar com then/catch
function chamadaComThenCath() {
    fatorial(5)
    .then((res) => console.log(`Resultado: ${res}`))
    .catch((erro) = console.log(`erro. ${erro}`))

    fatorial(-5)
    .then((res) => console.log(`resultado: ${res}`))
    .catch(erro => console.log(`erro ${erro}`))
}

//uma função para chamar com async/await
const chamadaAsyncAwait = async () => {

    try {
        const f2 = await fatorial(-5)
        console.log(f2)
    }
    catch(erro) {
        console.log(`Erro: ${erro}`)

    }
    try {
        const f1 = await fatorial(5)
        console.log(f1)
    }
      catch(erro) {
        console.log(`Erro: ${erro}`)

    }

}
chamadaAsyncAwait()


// async function hello(nome) {
//     return `'Oi', ${nome}`

// }
// const texto = hello('Ana')
// UmaPromise.then((texto => console.log(`${texto}`)))



