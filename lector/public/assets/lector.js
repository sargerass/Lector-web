(function () {
	// Load the script
	var script = document.createElement("SCRIPT");
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	script.type = 'text/javascript';
	script.onload = function () {
		var $ = window.jQuery;
		datosPagina = new CargarData();
	};
	document.getElementsByTagName("head")[0].appendChild(script);
})();
function CargarData() {
	var arrayImagenes = [];
	var arrayColores = [];
	var nuevoArrayColores = [];
	var arrayFuentes = [];
	var nuevoArrayFuentes = [];
	var categoria;
	var count = 0;
	var url = window.location.href;
	window.location.hostname
	var tiposURL = ["https", "http", "ftp", "mailto", "ldap", "file", "news", "gopher", "telnet", "data","//"];
	function Buscar(texto) {
		if (texto == null) {
			return -2;
		}
		var pos = -1;

		for (var k in tiposURL) {
			pos = texto.search(tiposURL[k]);
			if (pos == 0) {
				return 0;
			}
		}
		return -1;
	}

	var title = $("title").first().text();
	//console.log("Este es el título:\n",title);

	$("img").each(function () {
		$(this).each(function() {
			$.each(this.attributes, function() {
				if(this.specified) {
					let indix = this.value.indexOf(".")
					console.log(this.name, this.value);
				}
			});
		});
		let img = $(this).attr("src");
		let index = Buscar(img);
		if ( index == 0) {
			arrayImagenes.push($(this).attr("src"));
		} else if(index == -1 ){
			var url = window.location.hostname + "/" + $(this).attr("src");
			url = "http://" + url;
			arrayImagenes.push(url);
		}
	});
	console.log("imagenes usada",arrayImagenes);
	//console.log("Estas son las rutas de las imagenes usadas:\n", arrayImagenes);

	$("*").each(function () {
		arrayColores.push($(this).css("color"));
	});

	$("*").each(function () {
		arrayFuentes.push($(this).css("font-family"));
	});

	while (arrayColores.length) {
		nuevoArrayColores.push(categoriasColores(arrayColores[0]));
	}

	//console.log("Esta es la paleta de colores usada:\n", nuevoArrayColores);

	while (arrayFuentes.length) {
		nuevoArrayFuentes.push(categoriasFuentes(arrayFuentes[0]));
	}

	//console.log("Estas son las fuentes usadas:\n", nuevoArrayFuentes);

	function categoriasColores(first) {

		arrayColores.forEach(function (item, index) {
			if (first == item) {
				categoria = arrayColores.splice(index, 1)[0];
				categoriasColores(first);
			}
		});
		return categoria;

	}
	function categoriasFuentes(first) {

		arrayFuentes.forEach(function (item, index) {
			if (first == item) {
				categoria = arrayFuentes.splice(index, 1)[0];
				categoriasFuentes(first);
			}
		});
		return categoria;

	}
	this.getData = function () {
		var datos = {
			titulo: title, url: url, arrayImagenes: arrayImagenes,
			arrayColores: nuevoArrayColores, arrayFuentes: nuevoArrayFuentes
		};
		return JSON.stringify(datos);
	}
}
var datosPagina;