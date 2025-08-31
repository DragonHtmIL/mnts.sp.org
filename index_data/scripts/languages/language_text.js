function loadTexts() {
  var a000 = document.getElementById("titleHeader");
  var a001 = document.getElementById("upVidLang");
  var a002 = document.getElementById("upImgLang");
  var a003 = document.getElementById("upAudLang");
  var a004 = document.getElementById("upDocLang");
  var a005 = document.getElementById("settingsLang");
  var a006 = document.getElementById("menuTitle");
  var a007 = document.getElementById("loadertxt");
  var a008 = document.getElementById("lBtnLang");
  var a009 = document.getElementById("sWcTLang");
  var a010 = document.getElementById("sLsLang");
  var a011 = document.getElementById("applySettings");
  var a012 = document.getElementById("playersSettingsLang");
  var a013 = document.getElementById("anNone");
  var a014 = document.getElementById("anVid");
  var a015 = document.getElementById("anAud");
  var a016 = document.getElementById("anBoz");
  var a017 = document.getElementById("adminToolsLang");
  var a018 = document.getElementById("alertCancel");
  var a019 = document.getElementById("alertConfirm");
  var a020 = document.getElementById("reloadPageBtn");
  var a021 = document.getElementById("closePageBtn");
  /////////////////////////////////Ifs/////////////////////////////////
  var a000_if = document.getElementById("fssl1");
  var a001_if = document.getElementById("fssl2");
  /////////////////////////////////Sets/////////////////////////////////
  const a000_set = document.getElementsByClassName("videoLang");
  const a001_set = document.getElementsByClassName("imageLang");
  const a002_set = document.getElementsByClassName("audioLang");
  const a003_set = document.getElementsByClassName("documentLang");
  if(localStorage.getItem("lang") === "en") {
    a000.innerHTML = "S.P2";
    a001.innerHTML = "Upload Videos";
    a002.innerHTML = "Upload Images";
    a003.innerHTML = "Upload Audios";
    a004.innerHTML = "Upload Documents";
    a005.innerHTML = "Settings";
    a006.innerHTML = "Menu";
    a007.innerHTML = "LOADING...";
    a008.innerHTML = "Continue";
    a009.innerHTML = "Open on start the tab";
    a010.innerHTML = "Languages";
    a011.innerHTML = "Apply";
    a012.innerHTML = "Auto play next Audios and Videos";
    a013.innerHTML = "Auto next off";
    a014.innerHTML = "For Video";
    a015.innerHTML = "For Audio";
    a016.innerHTML = "For Video and Audio";
    a017.innerHTML = "Developments";
    a018.innerHTML = "No";
    a019.innerHTML = "Yes";
    a020.innerHTML = "Reload";
    a021.innerHTML = "Close";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "One press for hide interface";
    }else{
      a000_if.innerHTML = "One click for hide interface";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "Double press for close";
    }else{
      a001_if.innerHTML = "Double click for close";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Video";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Image";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "Audio";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Document";
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    a000.innerHTML = "П.Х2";
    a001.innerHTML = "Загрузить видео";
    a002.innerHTML = "Загрузить изображения";
    a003.innerHTML = "Загрузить аудио";
    a004.innerHTML = "Загрузить документы";
    a005.innerHTML = "Настройки";
    a006.innerHTML = "Меню";
    a007.innerHTML = "ЗАГРУЗКА...";
    a008.innerHTML = "Продолжать";
    a009.innerHTML = "Открыть при запуске вкладка";
    a010.innerHTML = "Языки";
    a011.innerHTML = "Применять";
    a012.innerHTML = "Автоматическое воспроизведение следующих аудио и видео";
    a013.innerHTML = "Авто следующий выкл";
    a014.innerHTML = "Для видео";
    a015.innerHTML = "Для аудио";
    a016.innerHTML = "Для видео и аудио";
    a017.innerHTML = "Разработки";
    a018.innerHTML = "Нет";
    a019.innerHTML = "Да";
    a020.innerHTML = "Перезагрузить";
    a021.innerHTML = "Закрыть";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "Одна нажатия, чтобы скрытия интерфейс";
    }else{
      a000_if.innerHTML = "Один клик, чтобы скрыть интерфейс";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "два Нажмите, чтобы закрыть";
    }else{
      a001_if.innerHTML = "два щелки, чтобы закрыть";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Видео";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Изображение";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "Аудио";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Документ";
    };
  }else
  if(localStorage.getItem("lang") === "he") {
    a000.innerHTML = "נ.א2";
     a000.style.direction = "rtl";
    a001.innerHTML = "העלאת סרטונים";
    a002.innerHTML = "העלאת תמונות";
    a003.innerHTML = "העלאת שמע";
    a004.innerHTML = "העלאת מסמכים";
    a005.innerHTML = "הגדרות";
    a006.innerHTML = "תפריט";
    a007.innerHTML = "טעינה...";
     a007.style.direction = "rtl";
    a008.innerHTML = "המשך";
    a009.innerHTML = "פתח בעת הפעלת הכרטיסייה";
    a010.innerHTML = "שפות";
    a011.innerHTML = "אישור";
    a012.innerHTML = "הפעלה אוטומטית של אודיו וסרטונים הבאים";
    a013.innerHTML = "הבא אוטומטי כבוי";
    a014.innerHTML = "לסרטון";
    a015.innerHTML = "לאודיו";
    a016.innerHTML = "עבור וידאו ואודיו";
    a017.innerHTML = "התפתחויות";
     a017.style.width = "100%";
     a017.style.textAlign = "right";
    a018.innerHTML = "לא";
    a019.innerHTML = "כן";
    a020.innerHTML = "טעינה מחדש";
    a021.innerHTML = "סגירה";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "לחיצה אחת להסתרת ממשק";
    }else{
      a000_if.innerHTML = "לחיצה אחת להסתרת ממשק";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "לחיצה כפולה לסגירה";
    }else{
      a001_if.innerHTML = "לחיצה כפולה לסגירה";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "סרטון";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "תמונה";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "שמע";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "מסמך";
    };
  }
  document.title = a000.innerHTML;
}