let fondo = document.getElementById("color");
fondo.style.backgroundColor = "#fcf79f";

let parrafo = document.getElementsByTagName("p");
parrafo[0].style.color = "#0ca001";
parrafo[1].style.color = "#0ca001";
parrafo[2].style.color = "#0ca001";
parrafo[3].style.color = "#0ca001";
parrafo[4].style.color = "#0ca001";

let parrafoid = document.getElementById("destacado");
parrafoid.style.fontSize = "24px";

let arial = document.getElementsByTagName("h2");
arial[0].style.fontFamily = ("arial");
arial[1].style.fontFamily = ("arial");

function getLink()
{
var enlace = document.getElementById("enlace");
document.getElementById("enlace").innerHTML= enlace.href;
}
