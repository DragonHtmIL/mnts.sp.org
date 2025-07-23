document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.right === '0%') {
      document.getElementById('closeMenu').click();
    }else{
      document.getElementById('openMenu').click();
    }
  }else
  if (event.keyCode == 49) {
    document.getElementById('videoPlayer').click();
  }else
  if (event.keyCode == 50) {
    document.getElementById('imagePlayer').click();
  }else
  if (event.keyCode == 51) {
    document.getElementById('audioPlayer').click();
  }else
  if (event.keyCode == 52) {
    document.getElementById('documentPlayer').click();
  }else
  if((event.key === 'F12') ||
    (event.ctrlKey && event.shiftKey && event.key === 'I') ||
    (event.ctrlKey && event.shiftKey && event.key === 'C') ||
    (event.metaKey && event.altKey && event.key === 'I') ||
    (event.metaKey && event.shiftKey && event.key === 'C')
  ) {
    if(document.getElementById("administratorTools").checked === false) {
      event.preventDefault();
    }
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("loadingcontainer").style.display === "flex" &&
    document.getElementById("videoContiner").style.left === "0%" &&
    document.getElementById("imageContiner").style.left === "auto" &&
    document.getElementById("audioContiner").style.left === "auto" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("lBtnLang").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "flex" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "0%" &&
    document.getElementById("audioContiner").style.left === "auto" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("lBtnLang").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "flex" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "-100%" &&
    document.getElementById("audioContiner").style.left === "0%" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("lBtnLang").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "flex" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "-100%" &&
    document.getElementById("audioContiner").style.left === "-100%" &&
    document.getElementById("documentContiner").style.left === "0%") {
      document.getElementById("lBtnLang").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "none" &&
    document.getElementById("videoContiner").style.left === "0%" &&
    document.getElementById("imageContiner").style.left === "auto" &&
    document.getElementById("audioContiner").style.left === "auto" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("inputVideos").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "none" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "0%" &&
    document.getElementById("audioContiner").style.left === "auto" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("inputImages").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "none" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "-100%" &&
    document.getElementById("audioContiner").style.left === "0%" &&
    document.getElementById("documentContiner").style.left === "auto") {
      document.getElementById("inputAudios").click();
    }else
    if(document.getElementById("loadingcontainer").style.display === "none" &&
    document.getElementById("videoContiner").style.left === "-100%" &&
    document.getElementById("imageContiner").style.left === "-100%" &&
    document.getElementById("audioContiner").style.left === "-100%" &&
    document.getElementById("documentContiner").style.left === "0%") {
      document.getElementById("inputDocuments").click();
    }else{
      console.log("something else have an error...");
    }
  }
};