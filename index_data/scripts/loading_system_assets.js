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
const totalAssets = assets.length;
function loadTextures() {
  for (let asset = 0; asset < totalAssets; asset++) {
    const casset = document.createElement('img');
    casset.src = themeLocation + assetsLocation + assets[asset] + png;
    casset.setAttribute('status', 'loading');
    casset.addEventListener("load", () => {
      casset.setAttribute('status', 'loaded');
      loadedcont++;
      updateProgressBar();
    });
    casset.addEventListener("error", () => {
      errorscont++;
      casset.setAttribute('status', 'error');
      loadedcont++;
      updateProgressBar();
      const lang = localStorage.getItem("lang");
      let texts = loadingTextsEn;
      if (lang === "ru") {
        texts = loadingTextsRu;
      } else if (lang === "he") {
        texts = loadingTextsHe;
        document.getElementById("errorsOnLoadAssets").style.direction = "rtl";
        document.getElementById("loadertxt").style.direction = "rtl";
      }
      document.getElementById("lBtnLang").style.display = "block";
      document.getElementById("lBtnLang").innerHTML = texts[5];
      document.getElementById("errorsOnLoadAssets").innerHTML = `${texts[0]}${errorscont}${texts[1]}${texts[2]}`;
      document.getElementById("loadertxt").innerHTML = texts[3];
      document.getElementById("errorsOnLoadAssets").style.color = "var(--red)";
    });
    document.getElementById("loadedbar").appendChild(casset);
  }
};
function updateProgressBar() {
  const progressPercentage = (loadedcont / totalAssets) * 100;
  const clampedPercentage = Math.min(progressPercentage, 100);
  document.getElementById('widther').style.width = `${clampedPercentage}%`;
  document.getElementById('widthernum').innerHTML = loadedcont;
  if (loadedcont + errorscont === totalAssets) {
    toDisplayBlock();
  }
};
function toDisplayBlock() {
  if (loadedcont === totalAssets) {
    document.getElementById("lBtnLang").style.display = "block";
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadertxt").classList.add("stopped");
    const lang = localStorage.getItem("lang");
    const languageTexts = {
      en: loadingTextsEn,
      ru: loadingTextsRu,
      he: loadingTextsHe
    };
    const texts = languageTexts[lang] || languageTexts.en;
    document.getElementById("loadertxt").innerHTML = texts[4];
    if (lang === "he") {
      document.getElementById("loadertxt").style.direction = "rtl";
    }
  }
};
function toDisplayNone() {
  document.getElementById("loadingcontainer").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("loadingcontainer").style.display = "none";
  },1000);
};