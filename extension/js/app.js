(function () {
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  script.onload = function () {
    const $ = window.jQuery;

    const ctImages = new ImagesController();

    //ctImagenes.read();
    const ctColors = new ColorsController();
    //ctColors.read();
    const ctFonts = new FontsController();
    //ctFont.read();
    const btnReadDocument = $("<button>");
    btnReadDocument.html("Leer info");
    btnReadDocument.css({
      position: 'fixed',
      top: 0, right: 0, 'z-index': 1000000,
      background: '#000', color: '#fff',
      'font-size': '20px', padding: '10px 30px'
    })

    const data = {
      arrayImages: ctImages.read(),
      arrayColors: ctColors.read(),
      arrayFonts: ctFonts.read(),
    }
    const lblData = $("<textarea>");
    lblData.val(JSON.stringify(data));
    lblData.css({
      position: 'fixed',
      top: 0, left: 0, 'z-index': 100000,
    });
    $("body").append(btnReadDocument);
    $("body").append(lblData);
    btnReadDocument.on('click', function () {
      lblData.select();
      document.execCommand("copy");
      console.log("--- data in clipboard");
    });
  };
  document.getElementsByTagName("head")[0].appendChild(script);
})();