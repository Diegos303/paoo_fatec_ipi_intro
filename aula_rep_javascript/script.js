const fs = require('fs')

const abrirArquivo = function(nomeArquivo) {

    const exibirConteudo = function(erro, conteudo) {

        if (erro) {
            console.log(`Deu erro: ${erro}`)
        } 
        else {
            const texto = conteudo.toString()
            console.log(texto)

            const dobro = Number(texto) * 2
            console.log(`Dobro: ${dobro}`)

            const finalizar = function(erro) {
                if (erro) {
                    console.log('Deu erro tentando salvar o dobro')
                } else {
                    console.log('Salvou o dobro com sucesso')
                }
            }

            fs.writeFile('dobro.txt', dobro.toString(), finalizar)

            console.log('C')
        }

        console.log("A")
    }

    fs.readFile(nomeArquivo, exibirConteudo)

    console.log("B")
}

abrirArquivo('arquivo.txt')

// function demorada(tempo) {
//     console.log(`Demorada: ${tempo}ms`)
//     const atualMaisTempo = new Date().getTime() + tempo

//     while(new Date().getTime() <= atualMaisTempo);

//     const d = 8 + 4
//     console.log(`d: ${d}`)
// }

// setTimeout(() => demorada(2000), 2000)
// setTimeout(() => demorada(1000), 10000)

// console.log('Chegou ao fim do script principal')


// setTimeout(() => {
//     console.log("dentro de timeout")
// },0)

// const a = new Date().getTime() + 1000
// console.log('fora da timeout')