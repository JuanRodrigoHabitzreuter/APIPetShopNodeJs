const express = require('express')
//apenas uma rota//
const router = require('./src/routes/router.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)
// app.use(retour)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
