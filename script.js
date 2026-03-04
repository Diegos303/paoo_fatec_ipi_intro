//funções
//arrow function
const dobrar = n => (2 * n)
console.log(dobrar(6))
const triplicar = (n) => {
  console.log("Vamos calcular o tripo de " +n)
  return 3 * n;
}
//escreva uma função que decida se um valor é par ou não
const par = (numero)=> numero %2 === 0
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