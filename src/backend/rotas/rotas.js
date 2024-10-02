const express = require("express");
const rotas  = express.Router();
const {verificar} = require("../controles/controles.js")

rotas.get('/login',(req,res)=> {
    res.status(200).render('TelaLogin')
})

rotas.post('/login', verificar)

rotas.get('/logado', (req,res) => {
    res.status(200).send('LOGADO')
})

module.exports = rotas