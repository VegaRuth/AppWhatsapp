//Variables Globales//
//JASON Contactos
var nombreContactos=[
    
    {   nombre:"Aldo Alfaro",
        imagen: "image/aldo.jpg"
    },

    {   nombre:"Ana Maria Martinez Franklin",
        imagen: "image/anamaria.jpg"
    },

    {   nombre:"Andrea Lamas",
        imagen: "image/andrea.jpg"
    },

    {   nombre:"Avatar",
        imagen: "image/avatar.jpg"
    },

    {   nombre:"Curricula",
        imagen: "image/curricula.jpg"
    },

    {   nombre:"Gian",
        imagen: "image/gian.jpg"
    },

    {   nombre:"Jose",
        imagen: "image/jose.jpg"
    },

    {   nombre:"Katy Sanchez",
        imagen: "image/katy.jpg"
    },

    {   nombre:"Code Academy",
        imagen:"image/logocodeacademy.png"
    },

    {   nombre:"Mariana Costa",
        imagen: "image/mariana.jpg"
    },

    {   nombre:"Maria Paula Rivarola",
        imagen: "image/mariapaula.jpg"
    },

    {   nombre:"Raymi Saldomando",
        imagen: "image/raymi.jpg"
    },
    
    {   nombre:"Rodulfo Prieto",
        imagen: "image/rodulfo.jpg"
    }   
];

var fecha = new Date();
var time = addZero(fecha.getHours()) + ":" + addZero(fecha.getMinutes());

//FUNCION HORA 24HRS
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Inicio//
$(document).ready(function(){

//Scroll
$("body").scrollspy({ target: "#navbar-example" });

//Mensaje(Crear elemento "burbuja de texto")
    function enviarMensaje(texto) {
       //fecha = addZero(fecha.getHours()) + ":" + addZero(fecha.getMinutes());
       var burbuja = '<li><div class="row"><div  class="burbuja"><p>' + texto + '</p><p class="hora">' + time + '</p></div></div></div></li>';
       var mensaje = $(burbuja);
       $("#Conversacion").append(mensaje);
    };

 // Enviar mensaje (ENTER)
   $("#inputTextMensaje").keypress(function(ele){
   
      if (ele.which == 13) {   
         var texto = $("#inputTextMensaje").val();
         console.log(texto);
         enviarMensaje(texto);
         $("#inputTextMensaje").val("");
      }
   });

 // Enviar mensaje (BOTON)
   $("#btnEnviar").click(function(btn){   
         var texto = $("#inputTextMensaje").val();
         console.log(texto);
         enviarMensaje(texto);
         $("#inputTextMensaje").val("");
   });

//Busqueda
function busqueda()
        {
            var listaContactos = document.getElementById("listaContactos");
            var searchText = document.getElementById("search").value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
 
            // Recorremos todas las filas con contenido de la tabla
            for (var i = 1; i < listaContactos.rows.length; i++)
            {
                cellsOfRow = listaContactos.rows[i].getElementsByTagName("li");
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < cellsOfRow.length && !found; j++)
                {
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    listaContactos.rows[i].style.display = "";
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    listaContactos.rows[i].style.display = "none";
                }
            }
        }



//BUSCA Y REMPLAZA
$(".contacto").click(function() {
  var data = $(this).attr('data')
  var fotos = ["gian", "jose", "katy", "andrea", "aldo", "mariapaula", "raymi", "rodulfo", "anamaria"];
  var nombres = ["Gian", "Jose", "Katy", "Andrea", "Aldo", "Maria Paula", "Raymi", "Rodulfo", "Ana Maria"];
  $('#foto').html('<img class="media-object avatar" src="image/' +fotos[data]+ '.jpg" alt="...">');
  $('#nombres').html('<p class= "nombre">' +nombres[data]+ '</p>');
  $('#box-message').html('');
});

});//Cierre ready



