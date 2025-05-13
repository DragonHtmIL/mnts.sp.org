
function detectColorScheme(){
var theme="light";
document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f5f5');
  if(localStorage.getItem("theme")){
    if(localStorage.getItem("theme") == "dark"){
      var theme = "dark";
    }
  } else if(!window.matchMedia) {
    return false;
  } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    var theme = "dark";
  }
  if (theme=="dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0c0c');
  }
};
detectColorScheme();