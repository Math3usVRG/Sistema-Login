const jwt = require("jsonwebtoken")
const db  = require("../db.js")
require("dotenv").config()

const setCookie =  async (res,token) => {
    return res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 10*60*1000
    })
}

const criarToken = (dado) => {
    const nome = dado.nome
    const tipo = dado.tipo
    const token = jwt.sign({nome,tipo},process.env.SECRET,{
        expiresIn: 600
        })
     return token
}


const verificar = (req,res) => {
    const nome  = req.body.login
    const senha = req.body.senha

    try {
        const usuario = db.filter(i => i.nome === nome)[0]
        if(usuario){
            console.log("aaa")
            if(usuario.senha == senha){
                const tokenAcesso = criarToken(usuario)
                setCookie(res,tokenAcesso)
                return res.status(200).json({nome: nome})
            } else {
                return res.status(400).json({ msg: 'Não informou a password' }) 
            }
        } else {
            return res.status(400).json({ msg: 'Não informou o username' })
        }   
    } catch(error) {
        return res.status(500).json({ msg: 'Erro no servidor' })
    }
}



module.exports = {verificar}