window.addEventListener('load', function() {
  checkLanguageStorage();
  loadTexts();
  checkPlayerTabStorage();
  loadIcon();
  loadTextures();
  checkAutoNextStorage();
  checkSystemThemeLocationStorage();
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("langSelection").value = "en";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("langSelection").value = "ru";
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("langSelection").value = "he";
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
  if(localStorage.getItem("autoNextFor") === "none") {
    document.getElementById("autoNextSelection").value = "none";
  }else
  if(localStorage.getItem("autoNextFor") === "video") {
    document.getElementById("autoNextSelection").value = "video";
  }else
  if(localStorage.getItem("autoNextFor") === "audio") {
    document.getElementById("autoNextSelection").value = "audio";
  }else
  if(localStorage.getItem("autoNextFor") === "both") {
    document.getElementById("autoNextSelection").value = "both";
  };
  setInterval(displayTime, 1);
  setInterval(displayDate, 1);
});