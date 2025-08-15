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
  "close_2",
  "docs_remove",
  "icon",
  "imgs_remove",
  "loop_off",
  "loop_off_2",
  "loop_on",
  "loop_on_2",
  "menu_0",
  "menu_1",
  "menu_2",
  "player_audio",
  "player_audio_2",
  "player_document",
  "player_document_2",
  "player_image",
  "player_image_2",
  "player_video",
  "player_video_2",
  "show_full_screen",
  "show_full_screen_2",
  "vids_remove",
  "next_off",
  "next_off_2",
  "next_on",
  "next_on_2",
  "player_top_btn",
  "player_top_btn_2"
];
function loadTextures() {
  for(var asset = 0; asset < assets.length; asset++) {
    const casset = document.createElement('img');
    casset.src = themeLocation + assetsLocation + assets[asset] + png;
    casset.style.width = "1px";
    casset.style.height = "1px";
    casset.style.opacity = "0";
    casset.addEventListener("load", function() {
      widthcont = widthcont + 3.225806451612903;
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
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsChs[0] + errorscont + loadingTextsChs[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsChs[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsChs[3];
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsCht[0] + errorscont + loadingTextsCht[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsCht[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsCht[3];
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsKo[0] + errorscont + loadingTextsKo[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsKo[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsKo[3];
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsHe[0] + errorscont + loadingTextsHe[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsHe[2];
        document.getElementById("errorsOnLoadAssets").style.direction = "rtl";
        document.getElementById("loadertxt").innerHTML = loadingTextsHe[3];
        document.getElementById("loadertxt").style.direction = "rtl";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("errorsOnLoadAssets").innerHTML = loadingTextsDe[0] + errorscont + loadingTextsDe[1];
        document.getElementById("errorsOnLoadAssets").innerHTML += loadingTextsDe[2];
        document.getElementById("loadertxt").innerHTML = loadingTextsDe[3];
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
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("loadertxt").innerHTML = loadingTextsChs[4];
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("loadertxt").innerHTML = loadingTextsCht[4];
    }else
    if(localStorage.getItem("lang") === "ko") {
      document.getElementById("loadertxt").innerHTML = loadingTextsKo[4];
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("loadertxt").innerHTML = loadingTextsHe[4];
      document.getElementById("loadertxt").style.direction = "rtl";
    }else
    if(localStorage.getItem("lang") === "de") {
      document.getElementById("loadertxt").innerHTML = loadingTextsDe[4];
    }
  }
};
function toDisplayNone() {
  if(document.getElementById('widther').style.width === "100%") {
    document.getElementById("loadingcontainer").style.display = "none";
  }
};