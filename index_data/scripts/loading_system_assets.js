let widthcont = 0.0;
let errorscont = 0;
let loadedcont = 0;

const png = ".png";

const themeLocation = "index_data/themes/system";

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
  "vids_remove",
  "next_off",
  "next_on"
];
function loadTextures() {
  for(var asset = 0; asset < assets.length; asset++) {
    const casset = document.createElement('img');
    casset.src = themeLocation + assetsLocation + assets[asset] + png;
    casset.style.width = "1px";
    casset.style.height = "1px";
    casset.style.opacity = "0";
    casset.addEventListener("load", function() {
      widthcont = widthcont + 5.555555555555556;
      loadedcont = loadedcont + 1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont;
      toDisplayBlock();
    });
    casset.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsEn[0] + errorscont + loadingTextsEn[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsEn[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsEn[3];
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsRu[0] + errorscont + loadingTextsRu[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsRu[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsRu[3];
      }else
      if(localStorage.getItem("lang") === "ja") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsJa[0] + errorscont + loadingTextsJa[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsJa[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsJa[3];
      };
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
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("loadertxt").innerHTML = loadingTextsEn[4];
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("loadertxt").innerHTML = loadingTextsRu[4];
    }else
    if(localStorage.getItem("lang") === "ja") {
      document.getElementById("loadertxt").innerHTML = loadingTextsJa[4];
    }
  }
};
function toDisplayNone() {
  if(document.getElementById('widther').style.width === "100%") {
    document.getElementById("loadingcontainer").style.display = "none";
  }
};