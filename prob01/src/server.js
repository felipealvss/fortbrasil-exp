const express = require('express')
const server = express()

const port = 2222

server.use('/', (req, res) => {
    res.send('Servidor iniciado!')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
