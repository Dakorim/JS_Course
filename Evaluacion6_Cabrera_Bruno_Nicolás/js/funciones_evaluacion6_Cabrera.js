function impuesto(){
    var numero= document.getElementById('numero');

    var N= parseInt(numero.value);

    var R= N * 21 /100;
    var Rsuma = N + R;
    var Res = document.write("El Monto ingresador es " + N + "<br>" + " su IVA seria " + R + "<br>" + " sumado el impuesto daria " + Rsuma);
    
  
}