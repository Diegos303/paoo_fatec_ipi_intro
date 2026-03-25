// //1+2 + ... + n
// const calculoDemorado = (n) => {
//   let cont = 0;
//   for(let i = 0; i<=n;i++) {
//     cont += i
//   }
//   return cont
// }
//se n <= 0, então rejeitar dizendo apenas valores positivos"
//caso contrário, fazer a conta e devolver o resultado
// const calculoRapidinho = (n) => {
//   return n > 0 ? Promise.resolve((n/2) * (n+1)) : Promise.reject('Apenas valores positivos')
// }
// calculoRapidinho.then(-10).then(res => {console,log(`Resultado: ${res}`)})
// .catch(err => console.log(`Erro: ${err}`))


// const calculoDemorad = (n) => {
//   return new Promise((resolve, reject) => {
//     if(n <= 0) {
//       reject("apenas valores positivos")
      
//     }else {
//       let ac = 0
//       for(let i =1; i<=n;i++) {
//         ac += i
//       }
//       resolve(ac)

//     }
    
//   } )
// }
// //then/catch
// const promiseResultante = calculoDemorad(1000)
// promiseResultante
// .then((res) => {console.log('Resultado: ' + res)})
// .catch((err) => {console.log('Erro: ' + err)})

// // const resultado = calculoDemorado(1000)
// // console.log(resultado)
// console.log('script principal terminado')




// //promises
// function calculoRapidinho(numero) {
//   return numero >= 0 ? Promise.resolve((numero + 1) * (numero / 2)) : Promise.reject("somente números positivos pro favor")
// } 
// const resultado = calculoRapidinho(100)

// resultado.then((res) => console.log(res)).catch(erro => console.log(erro))

// const resultado2 = calculoRapidinho(-500)
// resultado2.then(res => console.log(res)).catch(erro => console.log(erro))





//somar os valores 1,2, 3....,n sendo um valor passado como parâmetro
//defini-la com o nome calculoDemorado
// const calculoDemorado = (n) => {
//   return new Promise((resolve, reject) => {
//     let res = 0
//     for (let i = 1; i <= n; i++) res += i
//     resolve(res)
//   })
// }

// const resultado = calculoDemorado(100)

// // then e catch
// resultado
//   .then((res) => { console.log(res) })
//   .catch(erro => console.log(`falhou: ${erro}`))

// console.log('fim do script principal')

// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'

// // função callback
// const exibirConteudo = (erro, conteudo) => {
//   console.log('A')
  
//   if (erro) {
//     console.log(`Deu erro: ${erro}`)
//   } else {
//     console.log(conteudo.toString())

//     const dobro = Number(conteudo.toString()) * 2
//     console.log(`Dobro: ${dobro}`)

//     // função callback do writeFile
//     const finalizar = (erro) => {
//       if (erro) {
//         console.log("Deu erro tentando salvar o dobro")
//       } else {
//         console.log("Salvou o dobro com sucesso")
//       }
//       console.log("C")
//     }
//     //const finalizar = (erro) => {
//       // console.log(erro ? "deu erro" : "não deu")
//       // console.log("C")
//       //}

//     // escrita assíncrona
//     fs.writeFile('dobro.txt', dobro.toString(), finalizar)

//     console.log("D")
//   }
// }

// fs.readFile(nomeArquivo, exibirConteudo)

// console.log('B')


//represente uma calculadpra como objeto js, ela somente saber somar e subtrair dois valores
//agende a execução da soma para daqui 5 segundos
//agende a execução da subtração para daqui meio segundp 
//claro, exiba os valores no final
//no formato: 2 + 3 = 5
//1 - 1 = 0

// //por um aluno
// const calc = {
//   soma: (x, y) => x + y,
//   sub: (x, y) => x - y,
// };

// setTimeout(() => {
//   console.log(`2 + 3 = ${calc.soma(2, 3)}`);
// }, 5000);

// setTimeout(() => {
//   console.log(`1 - 1 = ${calc.sub(1, 1)}`);
// }, 500);

// //por mim
// const calculadora = {
//   soma: function(a, b) {
//     const resultado = a + b;
//     console.log(`${a} + ${b} = ${resultado}`);
//   },

//   sub: function(a, b) {
//     const resultado = a - b;
//     console.log(`${a} - ${b} = ${resultado}`);
//   }
// };

// setTimeout(() => {calculadora.sub(1, 1);}, 500);

// setTimeout(() => {calculadora.soma(2, 3);}, 5000);



// function demorada(tempo) {
//   const atualMaisTempo = new Date().getTime() + tempo

//   while(new Date().getTime() <= atualMaisTempo);

//   const d = 8 + 4
//   console.log(`Tempo: ${tempo}`)

//   return d
// }

// setTimeout(() => {demorada(1000)},2000)

// setTimeout(() => {demorada(2000)},1000)


// setTimeout(() => {
//   console.log("Executada pela seltTimeout....")
// }, 0)

// const a = new Date().getTime() + 5000
// while(new Date().getTime() <= a);
// console.log("Terminando p script principal")

// const a = 7 + 1 * 4
// const b = 8 * 1
// setTimeout(() => {
//   const d = demorada()
  
// }, 1000)

// const e = a + b
// console.log(`e: ${e}`)
// const a = 7 + 6
// const b = 7 + 1

// const d = demorada()
// const e = 2 + b + a

// console.log(`e: ${e}`)



// const a = 2 + 7
// const b  = 6 + 5
// console.log(a+b)




// console.log("eu primeiro")
// console.log("agora eu")
// console.log("Sempre vou ser a ultima")




//objetos javascript
//uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 20
//uma concessionaria tem CNPJ e um endereço. Ela possui alguns carros em estoque.Cada carro 
//tem marca, modelo e ano de fabricação.
// let = calculadora = {
//   somar: (a,b ) => a+b,
//   subtrair: function(a,b) {return a -b}
// }

// let res1 = calculadora.somar(1,2)
// console.log(res1)
// console.log(calculadora.subtrair(2,1))
// console.log(calculadora('subtrair'(2,1)))
// let concessionaria = {
//   cnpj: '00.000.0000/0001-00',
//   endereco: {
//     logradouro: 'Avenida B',
//     numero: 1,
//     bairro: 'Vila J'
//   },
//   veiculos: [
//     {
//       marca: 'Ford',
//       modelo: 'Fiesta',
//       ano: 2000,
//       proprietarios: [
//         {
//           nome: 'Joao',
//           telefone: 32131244
//         },
//         {
//           nome: 'Kaue',
//           telefone: 83888
//         }
//       ]
//     },
//     {
//       marca: 'Honda',
//       modelo: 'HR-V',
//       ano: 2020,
//       proprietarios: [
//         {
//           nome: 'Ana',
//           telefone: 38284490
//         }
//       ]
//     }
//   ]
// }




//uma pessoa se chama Maria, tem 21 anos e mora na rua B, numero 20
// let pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 20,
//     bairro: 'vila j'
//   }
// }
// console.log(`${pessoa.nome}mora na ${pessoa.endereco.logradouro} `)
// console.log(`${pessoa['nome']} tem ${pessoa['idade']} anos. Ela mora na ${pessoa.endereco['logradouro']}`),
// numero ${pessoa['enedereco'].numero}.)
  
// //Uma pessoa cujo nome é joao e tem 17 anos 
// let pessoa = {
//   nome: 'joao',
//   idade: 17
// }
// //closure
// function eAgora() {
//   let cont = 1
//   function f1() {
//     console.log(cont)
//   }
//   cont++
//   function f2() {
//     console.log(cont)
//   }
//   cont++
//   return(f1,f2 )
// }
// let res = eAgora()
// res.f1()
// res.f2()
// function saudacoesFactory(saudacao,nome) {
//   return function() {
//     console.log(`${saudacao}, ${nome}`)
//   }
// }
// let olaJoao = saudacoesFactory('oi ', 'joao')
// let tchauJoao =saudacoesFactory('tchau' , 'joao')
// olaJoao()
// tchauJoao()
// function f() {
//   let nome = 'joao'
//   function g() {
//     console.log(nome)
    
//   }
//   g()
// }
// f()
// let umaFuncao = function() {
//   console.log("Fui armazenada numa variável ")
// }
// umaFuncao()

// function f (funcao) {
//   funcao()
// }
// f(umaFuncao)

// function g() {
//   function outrafuncao() {
//     console.log("fui criada pela g")
//     return () => console.log("E agora?")
//   }
//   return outrafuncao
// }
// f(g()())
// const gResult = g()
// gResult()
// g() ()
// g()()()

// const valores = [1,2,3,4]
// const soma = valores.reduce((ac,v) =>{return ac +v})
// console.log(soma)

// const nomes = ['nico yazawa','rias gremory','subaru','hatsune miku','Ana']
// const algumComecaComA = nomes.some(n=> n.startsWith('A'))
// console.log(algumComecaComA)
// const todosComecamComA = nomes.every(n=>n.startsWith('A'))
// console.log(todosComecamComA)



//reescrever a linha 3 usando todo syntax sugar que as arrow functions oferecem
// const apenasComA = nomes.filter((n) => {return n.startsWith('A')})
// console.log(apenasComA)
//[A,A,R,A,C]
// const res = nomes.map(nome => nome.charAt(0))
// console.log(res)
// const apenasComA = nomes.filter(n=>n.startsWith('Y'))
// console.log(apenasComA)
//funções
//arrow function
// const dobrar = n => (2 * n)
// console.log(dobrar(6))
// const triplicar = (n) => {
//   console.log("Vamos calcular o tripo de " +n)
//   return 3 * n;
// }
// //escreva uma função que decida se um valor é par ou não
// const par = (numero)=> numero %2 === 0
// const hello  = (nome) => {console.log('Oi, ' + nome)}
// hello('ana')
// const hello  = () => {console.log('Oi ')}
// hello()
// const dobrar = function(n) {
//   return 2 * n
// }
// console.log(dobrar(2))
// console.log(dobrar(undefined))

// console.log(triplicar(4))
// console.log(triplicar(undefined))

// const triplicar = function (n=5 ) {
//   return 3 * n
// }
// const  resultado = triplicar(10)
// console.log(resultado)
// console.log(triplicar(undefined))

// const produto = function (a,b) {
//   console.log(a*b)
// }
// produto

// const triplicar = function (n=5) {
//   return 3 * n
// }
// function somar (a,b) {
//   return a + b

// }
// console.log(somar(2,3))

//functions e arrow functions
// function hello() {
//   console.log('Oi')
// }
// hello()
// function hello (nome) {
//   console.log('Oi,'  + nome)
// }
// hello('Ana')




// v1 = []
// console.log(v1.length) // 0

// v1[0] = 3.4
// console.log(v1.length) // 1

// v1[10] = 'abc'
// console.log(v1.length) // 11

// console.log(v1)

// for(let i = 0;i< v1.length;i++) {
//    console.log(v1[i])
// }

// comparação por igualdade 
// java ==, python: ==
// javascript: == ou ===(usamos apenas esse)
//null e undefined
//exemplos:
//a=null
//b=undefined
// lista = []
// lista2 = lista
// console.log(lista2 == lista)
// console.log(false == [])
// console.log(null==undefined) : true
// console.log(null == null) : true
// console.log(1 === [1]) 
// console.log(true == 1) :true
// console.log(1 === '1') : false
// console.log(1 == '1') : true
// console.log(1 === 1) : true 
// console.log(1 == 1):true
//coerção explicita
//const n1 = 2
//const n2 = '3'
//const n3 = n1 +Number(n2)
//console.log(`$${n1} + ${n2} = ${n3}`)
//coerção implicita
//const n1 = 2
//const n2 = '3'
//const n3 = n1 + n2
//console.log(`${n1} + ${n2} = ${n3}´)

//declaração de variáveis
//const,let e var
//null undefined
//tipos
//js `dinamicamente tipa
//let a = 2
//console.log(typeof(a))
//a = true 
//console.log(typeof(a))

//s = "abc"
//String s = "abc";

//listaDeLista[ [], [] , [],2]

//var idade = 18;
//var nome = 'Maria'

//console.log(`oi, ${nome}`)

//if (idade >= 18) {
    //console.log(`parabéns, ${nome}. Você pode dirigir.`)
  //  var nome = 'Maria'
//}

//console.log("até mais, " + nome + '.')     

//var linguagem = 'javascript'
//console.log(`aprendendo ${linguagem}`)
 
//linguagem = 'java'
//console.log(`aprendendo ${linguagem}`)


//console.log('antes do for')
//for (const i = 0;i<10;i = i+1) {
//    console.log('for com const...')
//}
//console.log('depois do for ')
//let nome = 'Maria'

//console.log(nome)
// nome = `Meu nome é ${nome}.`
//console.log(nome)


//console.log("Hello, JS")