const express = require('express')
const router = require('./src/routes/cliente.js')
const retour = require('./src/routes/cachorro.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)
app.use(retour)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
