// Recordemos la estructura de cada "oración" en jQuery = $("sujeto").predicado();

$(document).ready(function(){

	// Partamos por una modificación al CSS = https://api.jquery.com/multiple-selector/

	$("p.estrofa").css("font-style", "italic");

	// Agreguemos un elemento HTML antes de cada párrafo = https://api.jquery.com/before/

	$("p.estrofa").before("<h1 class=\"display-4\">Now, This Is Fun</h1>");

	// Agreguemos una clase al elemento agregado = https://api.jquery.com/addClass/#addClass-className

	$("h1").addClass("text-light");

	// Revisemos efectos básicos, condicionados por el click = https://api.jquery.com/category/effects/basics/

	$("button#tog").click(function() { 
		$(".estrofa").toggle() 
	});

	// Cambiemos la foto de Charly García, según el input que esté chequeado

	$("input:radio[name=depeches]").change(function() {
    
        if (this.value == "bebes") { 
        	$('img#foto').attr('src','img/depeche-mode-bebes.jpg');
        	console.log("Escogiste a Depeche "+this.value)
        }
        else if (this.value == "joven") { 
        	$('img#foto').attr('src','img/depeche-mode-joven.jpg');
        	console.log("Escogiste a Depeche "+this.value)
        }
        else if (this.value == "adulto") { 
        	$('img#foto').attr('src','img/depeche-mode-adulto.jpg');
        	console.log("Escogiste a Depeche "+this.value)
        }
    });

    // Para cerrar, vamos a buscar información a un JSON (JavaScript Object Notation) en línea

	$.getJSON('https://raw.githubusercontent.com/diseam/clase-6/gh-pages/data.json', function (data) {
		
		// Un aviso en la consola de JavaScript para cuando se obtenga el JSON
		
			console.log("¡Ya tenemos los datos del JSON!");
		
		// Parte de la información del JSON puede asignarse como contenidos a nuevas variables

		// Con las nuevas variables puede construirse un párrafo

			var solista = data[1]["artista"];

			var lp = data[1]["album"];
			
			var fecha = data[1]["lanzamiento"];
		
			$( "h1" ).after( "<p class=\"small\">Este tema de " + solista + " es parte del disco " + lp + ", de " + fecha +".</p>");
		
		// Finalmente usamos un ciclo para ir por cada disco, y agregarlo como ítem al listado de identidad discografía 			
		
			for (var a = 0; a < data.length; a++){
				if (data[a]["lanzamiento"] < 2000){
					$( "div#discografia" ).append("<div class=\"col-6 col-sm-4 mb-4\"><div class=\"card\"><img class=\"card-img-top\" src=\""+ data[a]["cover"] +"\"><div class=\"card-body\"><h5 class=\"card-title\">" + data[a]["album"] + "</h5><p class=\"card-text\"><a href=\"" + data[a]["spotify"] + "\">Escucha el disco en Spotify</a></p></div><div class=\"card-footer\"><a href=\" " + data[a]["youtube"] + "\" class=\"btn btn-sm btn-danger\">Single en Youtube</a></div></div></div>");
				}
			}			
	
	});

});
