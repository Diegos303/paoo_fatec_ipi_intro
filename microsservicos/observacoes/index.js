const {v4: uuidv4} = require('uuid')
const express = require('express')
const app = express()

app.use(express.json()) //função middleware
const observacoesPorLembretes = {}
/*
    {
     1: [
    {
        id:10000,
        texto: 'comprar café',
        idLembrete: 1
     
     },
     {id: ....,texto: ...., idLembrete: .....}
    ],
    2: []
}





*/


//post 
// /lembretes/1233/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembretes[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembretes[req.params.id] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)
})

//fazer o endpoint get
app.get('/lembretes/:id/observacoes', (req, res) => {
    //devolver a lista de observações do lembrete cujo id se encontra na path 
    //ou uma lista vazia 
    
    res.json(observacoesPorLembretes[req.params.id] || [])


})

//subir esse mss na porta 5000
const port = 5000
app.listen(port, ()=> {
    console.log(`Observações. Porta ${port}.`)
})


