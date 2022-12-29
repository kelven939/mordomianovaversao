let apelido = document.formu.apelido.value
let nome = document.formu.nome.value
let email = document.formu.email.value
let telefone = document.formu.telefone.value
let textArea = document.formu.textArea.value
let alerta = document.querySelector(".h2DeShow")

let frasesAleatorias = document.querySelector(".frases-Aleatorias")
let pfrases = document.querySelector(".p-frases")
let pfrases2 = document.querySelector(".p-frases2")
let frasesMensagem = document.querySelector(".frasesMensagem")

let frases = ['Jesus', 'Lucas', 'Mateus', 'DEUS eh pai', "JESUS eh a vida", 
              'JESUS morreu por ti', 'Amar Jesus eh tudo na vida', 'e mais', 
              'Somos todos filhos de DEUS pai', 'Amar a DEUS/JESUS eh tudo que precisamos']

function validacao() {
    if (apelido == "") {
      alerta.innerHTML = "Digite o seu apelido"
      shows()
        document.getElementById("textApelido").focus()
        return false
    }
    if (nome == "") {
      alerta.innerHTML = "Digite o seu nome"
      shows()
        document.getElementById("textNome").focus()
        return false
    }
    if ((email.search("@") == -1)||(email == "")) {
      alerta.innerHTML = "E-mail invalido/Digite o seu e-mail"
      shows()
        document.getElementById("email").focus()
        return false
    }
    if (telefone == "") {
      alerta.innerHTML = "Digite o seu telefone"
      shows()
        document.getElementById("tel").focus()
        return false
    }
    if (textArea == "") {
      alerta.innerHTML = "O campo naoh pode estar vazio"
      shows()
        document.getElementById("textArea").focus()
        return false
    }
}

function shows() {
  document.querySelector("#mostrarShowsId").classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.btnS')) {
    let dropdown = document.getElementsByClassName("mostrarShows");
    for (let i = 0; i < dropdown.length; i++) {
      let opendrop = dropdown[i];
      if (opendrop.classList.contains('show')) {
        opendrop.classList.remove('show')
      }
    }
  }
}

pfrases2.addEventListener('click', ()=>{
  let mensagens
  let data = new Date()
  for (let i = 0; i < frases.length; i++) {
    mensagens = frases[Math.floor(Math.random()*frases.length)]
    pfrases.style.visibility = "hidden"
    let horas = data.getHours()
   /* let minutos = data.getMinutes()
    let segundos = data.getSeconds()*/
    if (horas>=0 && horas<=6) {
      frasesMensagem.innerHTML=mensagens
    }else if (horas>=7 && horas<=11) {
      frasesMensagem.innerHTML=mensagens
    }else if (horas>=12 && horas<=17) {
      frasesMensagem.innerHTML=mensagens
    }else if (horas>=18 && horas<=23) {
      frasesMensagem.innerHTML=mensagens
    }
  }
})