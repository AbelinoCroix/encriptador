var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var btnCopiar = document.querySelector(".btnCopiar");
var imgMuneco = document.querySelector(".cajaMuneco");
var cajaEncriptado = document.querySelector(".cajaMensaje");
var txtResultado = document.querySelector(".txtResultado");

btnCopiar.hidden=true;
btnEncriptar.onclick = fnEcriptar;
btnDesencriptar.onclick = fnDesencriptar; 
btnCopiar.onclick = fnCopiarTxt;

function fnEcriptar(){
    fnEsconder();
    fnMostrarBtnCopiar();
    var txtUsuario = fnObtenerTxt();
    txtResultado.textContent = fnEncriptarTxt(txtUsuario);
}

function fnDesencriptar(){
    fnEsconder();
    fnMostrarBtnCopiar();
    var txtUsuarioDes = fnObtenerTxt();
    txtResultado.textContent = fnDesencriptarTxt(txtUsuarioDes);
    console.log(txtUsuarioDes);
}


function fnEsconder(){
    imgMuneco.classList.add("Esconder");
    cajaEncriptado.classList.add("Esconder");

}

function fnMostrarBtnCopiar(){
    btnCopiar.hidden = false;
}

function fnEncriptarTxt(mensaje){
   var txt = mensaje;
   var txtFinal = "";

   for(var i=0;i<txt.length;i++){
    if(txt[i] =='a'){
        txtFinal = txtFinal + "ai";
    }
    else if(txt[i] == 'e'){
        txtFinal = txtFinal + "enter";
    }
    else if(txt[i] == 'i'){
        txtFinal = txtFinal + "imes";
    }
    else if(txt[i] == 'o'){
        txtFinal = txtFinal + "ober";
    }
    else if(txt[i] == 'u'){
        txtFinal = txtFinal + "ufat";
    }
    else{
        txtFinal = txtFinal + txt[i];
    }
   }

   return txtFinal;
}

function fnDesencriptarTxt(mensaje){
    var txt = mensaje;
    var txtFinal = "";
 
    for(var i=0;i<txt.length;i++){
     if(txt[i] == "a"){
         txtFinal = txtFinal + "a";
         i = i + 1;
     }
     else if(txt[i] == "e"){
         txtFinal = txtFinal + "e";
         i = i + 4;
     }
     else if(txt[i] == "i"){
         txtFinal = txtFinal + "i";
         i = i + 3;
     }
     else if(txt[i] == "o"){
         txtFinal = txtFinal + "o";
         i = i + 3;
     }
     else if(txt[i] == "u"){
         txtFinal = txtFinal + "u";
         i = i + 3;
     }
     else{
         txtFinal = txtFinal + txt[i];
     }
    }
 
    return txtFinal;
}

function fnObtenerTxt(){
    var texto = document.querySelector(".textoOrigen");
    return texto.value;
}

function fnCopiarTxt(){
    btnCopiar.addEventListener("click", copiar = () =>{
        var txtCopiar = document.querySelector(".txtResultado").textContent;
        navigator.clipboard.writeText(txtCopiar);
        console.log(txtCopiar);
    })
}