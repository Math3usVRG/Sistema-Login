const express = require('express')
const cookie  = require('cookie-parser')
const rotas = require("./rotas/rotas.js")

const port = 3000
const app  = express()
const path = require('path')

app.use(express.json())
app.use(cookie())
app.use(express.static(path.join(__dirname, '../frontend')))

app.engine('html',require('ejs').renderFile)
app.set('view engine','html')
app.set('views', path.join( __dirname, "../frontend/views"))

app.use('/',rotas)

app.listen(port,() => {
    console.log("Servidor rodando")
})