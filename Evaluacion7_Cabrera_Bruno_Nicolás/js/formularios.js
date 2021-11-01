const nick = document.getElementById("Nick");
const fechadenacimiento = document.getElementById("Fecha");
const Password = document.getElementById("Pass");
const Email = document.getElementById("Correo");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML=""
    if(nick.value.length <6){
        warnings += 'El nick no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(Email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(Password.value.length <8){
        warnings += 'El password no es valido <br>'
        entrar = true

        }
    if(entrar){
        parrafo.innerHTML = warnings
    }

})