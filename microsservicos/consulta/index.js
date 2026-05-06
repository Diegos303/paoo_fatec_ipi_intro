const express = require('express')
const app = express()
//middleware
app.use(express.json())




const baseConsolidada = {}

//mapa de funções
//para cada tipo de evento possivel
const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []

        observacoes.push(observacao)

        baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes

    }
}



app.get('/lembretes', (req, res) => {
    res.json(baseConsolidada)

})

/*
   {
    1: {
        id:1.
        texto: 'Fazer café'
    }
   } 
*/



app.post("/eventos", (req,res) => {
    const evento = req.body
    funcoes[evento.tipo](evento.dados)
    res.end()
})

const port = 6000
app.listen(port, () => {console.log(`consulta. Porta ${port}.`)})
