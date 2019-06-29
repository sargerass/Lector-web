(function () {
	// Load the script
	var script = document.createElement("SCRIPT");
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	script.type = 'text/javascript';
	script.onload = function () {
		const $ = window.jQuery;
    const ctImagenes = new ImageController();
    ctImagenes.read();
    const ctColor = new ColorController();
    ctColor.read();
    const ctFont = new FontController();
    ctFont.read();
	};
	document.getElementsByTagName("head")[0].appendChild(script);
})();