function autoCreateRegistrationForCustomTheme() {
  const scriptsUrls = [
    localStorage.getItem("themeLocation") + "/style_loader.js"
  ];
  for(var i=0; i< scriptsUrls.length; i++) {
    var continer = document.getElementById("scriptContainer");
    const script = document.createElement("script");
    script.src = scriptsUrls[i];
    continer.appendChild(script);
  }
}