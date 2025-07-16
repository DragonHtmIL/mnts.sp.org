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
};
function checkPlayerTabStorage() {
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
function checkAutoNextStorage() {
  if(localStorage.getItem("autoNextFor") === null) {
    // load player
    localStorage.setItem("autoNextFor", "none");
    window.location.reload();
  }else
  if(localStorage.getItem("autoNextFor") === "") {
    // load player
    localStorage.setItem("autoNextFor", "none");
    window.location.reload();
  }else{
    return false;
  }
};
function checkSystemThemeLocationStorage() {
  if(localStorage.getItem("themeLocation") === null) {
    // load system theme
    localStorage.setItem("themeLocation", "index_data/themes/system/");
    window.location.reload();
  }else
  if(localStorage.getItem("themeLocation") === "") {
    // load system theme
    localStorage.setItem("themeLocation", "none");
    window.location.reload();
  }else{
    return false;
  }
};