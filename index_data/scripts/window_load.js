window.addEventListener('load', function() {
  checkLanguageStorage();
  loadTexts();
  checkPlayerTabStorage();
  loadIcon();
  loadTextures();
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("langSelection").value = "en";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("langSelection").value = "ru";
  }else
  if(localStorage.getItem("lang") === "ja") {
    document.getElementById("langSelection").value = "ja";
  };
  if(localStorage.getItem("tabOnStart") === "video") {
    document.getElementById("videoPlayer").click();
    document.getElementById("startOnTab").value = "video";
  }else
  if(localStorage.getItem("tabOnStart") === "image") {
    document.getElementById("imagePlayer").click();
    document.getElementById("startOnTab").value = "image";
  }else
  if(localStorage.getItem("tabOnStart") === "audio") {
    document.getElementById("audioPlayer").click();
    document.getElementById("startOnTab").value = "audio";
  }else
  if(localStorage.getItem("tabOnStart") === "document") {
    document.getElementById("documentPlayer").click();
    document.getElementById("startOnTab").value = "document";
  };
  setInterval(displayTime, 1);
  setInterval(displayDate, 1);
});