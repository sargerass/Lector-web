function ImagesController() {
  this.read = function () {
    const arrayImages = [];
    $("img").each(function () {
      $(this).each(function () {
        $.each(this.attributes, function () {
          if (this.specified) {
            if (this.name == 'src' || isImage(this.value)) {
              addImage(arrayImages, this.value);
            }
          }
        });
      });
    });
    $("*").each(function () {
      let background = $(this).css("background-image");
      if (background.indexOf("url") >= 0) {
        background = background.replace("url", "");
        background = background.replace("(", "");
        background = background.replace(")", "");
        background = background.trim();
        addImage(arrayImages, background);
      }
    });
    return arrayImages;
  };
  function addImage(array, route) {
    route = route.replace(/"/g, '');
    console.log("add route", route);
    
    if (route.indexOf("/") === 0) {
      route = window.location.protocol+"//"+window.location.hostname + route;
    }
    else if(route.indexOf("http") != 0){
      const url = window.location.href; 
      const ar = url.split("/") ;
      if(ar.pop() == ""){
        route = url+route;
      }
      else{
        route = ar.split("/")+"/"+route;
      }
    }
    if (route == "") {
      return;
    }
    if (!array.includes(route)) {
      console.log('final route', route);
      array.push(route);
    }
  }

  function isImage(route) {
    if (forExtensions(route)) {
      return true;
    }
    else {
      return isData(route);
    }
  }
  function forExtensions(route) {
    route = route.split("?")[0];
    let ar = route.split(".");
    const extension = ar.pop();
    if (extension.length == 0) {
      return false;
    }
    const arrayExtensions = ['jpg', 'png', 'gif', 'jpeg', 'svg'];
    return arrayExtensions.includes(extension);
  }
  function isData(route) {
    return route.indexOf("data:image") == 0;
  }
}