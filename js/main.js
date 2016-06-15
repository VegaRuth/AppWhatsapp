//Variables Globales //
nombreContactos={}


//Inicio//
$(document).ready(function(){

//Scroll
$('body').scrollspy({ target: '#navbar-example' });


function presionarEnter input("inputTextMensaje") {
    if(event.keypress == 13) {
        //Agregar mensaje       
        console.log(Ya se envio el mensaje);
        $("#inputTextMensaje").push
    }
};	


var mensaje=$("#inputTextMensaje").val();//valor de Input






$("#inputTextMensaje").val("");//limpiarInput

	$("#inputTextMensaje").keypress(function (enviarMensaje){
		if ( event.keypress === 13) {
			console.log(Ya se envio el mensaje);
			//AgregarMEnsaje
		}
	});

function presionarEnter input(ele) {
    if(event.keyCode == 13) {
        //Agregar mensaje       
    }
}






});//Cierre ready



