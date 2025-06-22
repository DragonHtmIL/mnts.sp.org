window.addEventListener('load', function() {
  loadTexts();
  checkPlayerTabStorage();
  checkThemeStorage();
  loadIcon();
  autoCreateRegistrationForCustomTheme();
  loadTextures();
  if(localStorage.getItem("settedTab") === "video") {
    document.getElementById("videoPlayer").click();
  }else
  if(localStorage.getItem("settedTab") === "image") {
    document.getElementById("imagePlayer").click();
  }else
  if(localStorage.getItem("settedTab") === "audio") {
    document.getElementById("audioPlayer").click();
  }else
  if(localStorage.getItem("settedTab") === "document") {
    document.getElementById("documentPlayer").click();
  };
  document.getElementById("themeLocator").value = localStorage.getItem("themeLocation");
  setInterval(displayTime, 1);
  setInterval(displayDate, 1);
});