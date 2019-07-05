function ColorsController() {
  this.read = function () {
    const arrayColors = [];
    $("*").each(function () {
      addColor(arrayColors, $(this).css("color"));
    });
    return arrayColors;
  }
  function addColor(array, color) {
    if (color == null || color == "") {
      return;
    }
    if (!array.includes(color)) {
      array.push(color);
    }
  }
}