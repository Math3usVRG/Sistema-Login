const btnEsqueceuSenha = document.getElementById("esqueceu-senha")
const btnVerSenha = document.getElementById("ver-senha")
const inputSenha = document.getElementById("senha")
const caixaAviso = document.getElementById("caixa-aviso")
const btnFecharAviso = document.getElementById("fechar-aviso")
const btnWhatsapp = document.getElementById("abrir-whatsapp")
const loginForm = document.getElementById("login-form")
const btnLogar = document.getElementById("btn-logar")
const avisoErro = document.getElementById("aviso-error")

btnVerSenha.addEventListener("click", function () {
    if(btnVerSenha.checked){
        inputSenha.type = 'text'
    } else {
        inputSenha.type = 'password'
    }
})

btnEsqueceuSenha.addEventListener("click",function () {
    caixaAviso.style.display = 'flex'
})

btnFecharAviso.addEventListener('click',function(){
    caixaAviso.style.display = 'none'
})

btnWhatsapp.addEventListener('click',function(){
    const telefone = "7996344181";
    const mensagem = "Esqueci a senha do meu user no KOTH"
    
   
    window.open(`https://wa.me/${telefone}?text=${mensagem}` )
})


loginForm.addEventListener('submit',async (e) => {
    e.preventDefault()
    
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    try{
        const result = await fetch('/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            credentials:'include',
            body: JSON.stringify(data)
          })
          if (result.status === 400) {
            return avisoErro.style.display = 'flex'
          } 
          if (result.status === 200) {
            window.location.href = '/logado'
          }
          
    } catch (error){
        console.error("RESULTADO NAO OBTIDO")
    } 
})









