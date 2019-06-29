(function () {
	// Load the script
	var script = document.createElement("SCRIPT");
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	script.type = 'text/javascript';
	script.onload = function () {
    const $ = window.jQuery;
    
    const ctImagenes = new ImageController();

    //ctImagenes.read();
    const ctColor = new ColorController();
    //ctColor.read();
    const ctFont = new FontController();
    //ctFont.read();
    const btnReadDocument = $("<button>");
    btnReadDocument.html("Leer info");
    btnReadDocument.css({
      position:'fixed',
      top:0 ,right:0, 'z-index':100,
      background:'#000' , color:'#fff' , 
      'font-size': '20px', padding: '10px 30px'
    })
    $("body").append(btnReadDocument);
    btnReadDocument.on('click', function(){
      console.log("--- read cdocuemnt");
    });
	};
	document.getElementsByTagName("head")[0].appendChild(script);
})();