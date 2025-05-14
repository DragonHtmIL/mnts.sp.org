function checkLangStorage() {
  if(localStorage.getItem("splang") === null) {
    // load language
    localStorage.setItem("splang", "index_data/scripts/language_text.js");
    window.location.reload();
  }else
  if(localStorage.getItem("splang") === "") {
    // load language
    localStorage.setItem("splang", "index_data/scripts/language_text.js");
    window.location.reload();
  }else{
    return false;
  }
};
function checkPlayerTabStorage() {
  if(localStorage.getItem("settedTab") === null) {
    // load player
    localStorage.setItem("settedTab", "video");
    window.location.reload();
  }else
  if(localStorage.getItem("settedTab") === "") {
    // load player
    localStorage.setItem("settedTab", "video");
    window.location.reload();
  }else{
    return false;
  }
};
function checkThemeStorage() {
  if(localStorage.getItem("themeLocation") === null) {
    // load player
    localStorage.setItem("themeLocation", "index_data/themes/system");
    window.location.reload();
  }else
  if(localStorage.getItem("themeLocation") === "") {
    // load player
    localStorage.setItem("themeLocation", "index_data/themes/system");
    window.location.reload();
  }else{
    return false;
  }
};