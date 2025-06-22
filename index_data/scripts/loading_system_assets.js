let widthcont = 0.0;
let errorscont = 0;
let loadedcont = 0;

const png = ".png";

const customedTheme = localStorage.getItem("themeLocation");

const assetsLocation = "/textures/dark/";

const assets = [
  "auds_remove",
  "close_0",
  "close_1",
  "docs_remove",
  "icon",
  "imgs_remove",
  "loop_off",
  "loop_on",
  "menu_0",
  "menu_1",
  "player_audio",
  "player_document",
  "player_image",
  "player_video",
  "show_full_screen",
  "vids_remove"
];
function loadTextures() {
  for(var asset = 0; asset < assets.length; asset++) {
    const casset = document.createElement('img');
    casset.src = customedTheme + assetsLocation + assets[asset] + png;
    casset.style.width = "1px";
    casset.style.height = "1px";
    casset.style.opacity = "0";
    casset.addEventListener("load", function() {
      widthcont = widthcont + 6.666666666666667;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayBlock();
    });
    casset.addEventListener("error", function() {
      errorscont++;
      document.getElementById("errorsOnLoadAssets").innerHTML = loadingTexts[0] + errorscont + loadingTexts[1];
      document.getElementById("errorsOnLoadAssets").innerHTML += loadingTexts[2];
      document.getElementById("loadertxt").innerHTML = loadingTexts[3];
      document.getElementById("errorsOnLoadAssets").style.color = "var(--red)";
    });
    document.getElementById("loadedbar").appendChild(casset);
  };
};
function toDisplayBlock() {
  if(document.getElementById('widther').style.width === "100%") {
    document.getElementById("lBtnLang").style.display = "block";
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadertxt").classList.add("stopped");
    document.getElementById("loadertxt").innerHTML = loadingTexts[4];
  }
};
function toDisplayNone() {
  if(document.getElementById('widther').style.width === "100%") {
    document.getElementById("loadingcontainer").style.display = "none";
  }
};