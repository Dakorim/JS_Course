const nick = document.getElementById("Nick");
const Password = document.getElementById("Pass");
const Email = document.getElementById("Correo");
const parrafo = document.getElementById("warnings")

function registrar(){
    var N = document.getElementById("Nick").value;
    var Pas = document.getElementById("Pass").value;
    var Mail = document.getElementById("Correo").value;
    if(N=="") {
        document.getElementById("Nick").focus();
    }else{
        if(Pas==""){
            document.getElementById("Pass").focus(); 
    }else{
        if(Mail==""){
            document.getElementById("Correo").focus(); 
    }else{
        console.log(N + " " + Pas +" "+ Mail);
        document.getElementById("Nick").value;
        document.getElementById("Pass").value;
        document.getElementById("Correo").value;
        document.getElementById("Nick").focus();
    }
} 
}
}
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