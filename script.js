// Recordemos la estructura de cada "oración" en jQuery = $("sujeto").predicado();

$(document).ready(function(){

	// Partamos por una modificación al CSS = https://api.jquery.com/multiple-selector/

	$("p").css("font-style", "italic");

	// Agreguemos un elemento HTML antes de cada párrafo = https://api.jquery.com/before/

	$("p").before("<h1 class=\"display-4\">Los dinosaurios</h1>");

	// Agreguemos una clase al elemento agregado = https://api.jquery.com/addClass/#addClass-className

	$("h1").addClass("text-light");

	// Revisemos efectos básicos, condicionados por el click = https://api.jquery.com/category/effects/basics/

	$("button#si").click(function() { 
		$(".dinosaurio").show() 
	});
	 
	$("button#no").click(function() { 
		$(".dinosaurio").hide() 
	});

	$("button#sino").click(function() { 
		$(".dinosaurio").toggle() 
	});

	// Cambiemos la foto de Charly García, según el input que esté chequeado

	$("input:radio[name=charlies]").change(function() {
    
        if (this.value == "joven") { 
        	$('img#foto').attr('src','img/charly-joven.jpg');
        	console.log("Escogiste al Charly "+this.value)
        }
        else if (this.value == "viejo") { 
        	$('img#foto').attr('src','img/charly-viejo.jpg');
        	console.log("Escogiste al Charly "+this.value)
        }
        else if (this.value == "inflado") { 
        	$('img#foto').attr('src','img/charly-inflado.jpg');
        	console.log("Escogiste al Charly "+this.value)
        }
    });

    // Para cerrar, vamos a buscar información a un JSON (JavaScript Object Notation) en línea

	$.getJSON('https://raw.githubusercontent.com/profesorfaco/clase-6/gh-pages/data.json', function (data) {
		
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
				$( "ul#discografia" ).append( "<li><a href=\"" + data[a]["spotify"] + "\">" + data[a]["album"] +" ("+ data[a]["lanzamiento"] +")</a></li>" );
			}			
	
	});

});