function FontsController() {
  this.read = function () {
    const arrayFonts = [];
    $("*").each(function () {
      addFont(arrayFonts, $(this).css("font-family"));
    });
    console.log('fonts', arrayFonts);
    return arrayFonts;
  }
  function addFont(array, font) {
    if (font == null || font == "") {
      return;
    }
    const fontInitial = font;
    const ar = font.split(",");
    ar.forEach((font) => {
      /*
      font = font.replace('"', "");
      font = font.replace('"', "");
      */
      font = font.trim();
      if (!array.includes(font)) {
        console.log("font in analitycs", fontInitial);
        array.push(font);
      }
    });

  }
}