window.addEventListener('load', function() {
  checkLangStorage();
  loadTexts();
  checkPlayerTabStorage();
  checkThemeStorage();
  loadIcon();
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
  setInterval(displayTime, 1);
  setInterval(displayDate, 1);
});