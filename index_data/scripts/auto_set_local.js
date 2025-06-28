function checkLanguageStorage() {
  if(localStorage.getItem("lang") === null) {
    // load player
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else
  if(localStorage.getItem("lang") === "") {
    // load player
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else{
    return false;
  }
};function checkPlayerTabStorage() {
  if(localStorage.getItem("tabOnStart") === null) {
    // load player
    localStorage.setItem("tabOnStart", "video");
    window.location.reload();
  }else
  if(localStorage.getItem("tabOnStart") === "") {
    // load player
    localStorage.setItem("tabOnStart", "video");
    window.location.reload();
  }else{
    return false;
  }
};