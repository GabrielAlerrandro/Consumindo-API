// let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('Esse CEP não existe!')
//     }else{
//         console.log(r)
//     }
// })
// .catch(error => console.log(error))

// .finally( mensagem => console.log("Consulta Realizada!") ) // Toca independente de dar erro ou não


const cep = document.getElementById('cep')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const logradouro = document.getElementById('endereco')
const complemento = document.getElementById('complemento')
const bairro = document.getElementById('bairro')
const mensagemErro = document.getElementById('erro')
mensagemErro.innerHTML = ""

async function buscaEndereco(cep){
    try{
   let consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
   let consultaCEPConvertida = await consultaCEP.json()
   if(consultaCEPConvertida.erro){
    throw Error('Cep Inexistente!')
   }
   
   cidade.value = consultaCEPConvertida.localidade
   logradouro.value = consultaCEPConvertida.logradouro
   estado.value = consultaCEPConvertida.uf
   complemento.value = consultaCEPConvertida.complemento
   bairro.value = consultaCEPConvertida.bairro
   estado.value = consultaCEPConvertida.uf
   
   console.log(consultaCEPConvertida)
   return consultaCEPConvertida
}
   catch(erro){
    mensagemErro.innerHTML = "<p>CEP inválido. Tente novamente!</p>"
    console.log(erro)
   }
}
cep.addEventListener("focusout", () => buscaEndereco(cep.value))



// let ceps = ['01001000', '01001001', '01001250']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(resposta => console.log(resposta))
