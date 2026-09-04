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
  const a004_set = document.getElementsByClassName("to-zip-file");
  if(localStorage.getItem("lang") === "en") {
    if (a000) a000.innerHTML = "S.P2";
    if (a001) a001.innerHTML = "Upload Videos";
    if (a002) a002.innerHTML = "Upload Images";
    if (a003) a003.innerHTML = "Upload Audios";
    if (a004) a004.innerHTML = "Upload Documents";
    if (a005) a005.innerHTML = "Settings";
    if (a006) a006.innerHTML = "Menu";
    if (a007) a007.innerHTML = "LOADING...";
    if (a008) a008.innerHTML = "Continue";
    if (a009) a009.innerHTML = "Open on start the tab";
    if (a010) a010.innerHTML = "Languages";
    if (a011) a011.innerHTML = "Apply";
    if (a012) a012.innerHTML = "Auto play next Audios and Videos";
    if (a013) a013.innerHTML = "Auto next off";
    if (a014) a014.innerHTML = "For Video";
    if (a015) a015.innerHTML = "For Audio";
    if (a016) a016.innerHTML = "For Video and Audio";
    if (a017) a017.innerHTML = "Developments";
    if (a018) a018.innerHTML = "No";
    if (a019) a019.innerHTML = "Yes";
    if (a020) a020.innerHTML = "Reload";
    if (a021) a021.innerHTML = "Close";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      if (a000_if) a000_if.innerHTML = "One press for hide interface";
    }else{
      if (a000_if) a000_if.innerHTML = "One click for hide interface";
    };
    if(navigator.userAgent.match(/mobile/i)) {
      if (a001_if) a001_if.innerHTML = "Double press for close";
    }else{
      if (a001_if) a001_if.innerHTML = "Double click for close";
    };
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
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "From ZIP file";
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    if (a000) a000.innerHTML = "П.Х2";
    if (a001) a001.innerHTML = "Загрузить видео";
    if (a002) a002.innerHTML = "Загрузить изображения";
    if (a003) a003.innerHTML = "Загрузить аудио";
    if (a004) a004.innerHTML = "Загрузить документы";
    if (a005) a005.innerHTML = "Настройки";
    if (a006) a006.innerHTML = "Меню";
    if (a007) a007.innerHTML = "ЗАГРУЗКА...";
    if (a008) a008.innerHTML = "Продолжать";
    if (a009) a009.innerHTML = "Открыть при запуске вкладка";
    if (a010) a010.innerHTML = "Языки";
    if (a011) a011.innerHTML = "Применять";
    if (a012) a012.innerHTML = "Автоматическое воспроизведение следующих аудио и видео";
    if (a013) a013.innerHTML = "Авто следующий выкл";
    if (a014) a014.innerHTML = "Для видео";
    if (a015) a015.innerHTML = "Для аудио";
    if (a016) a016.innerHTML = "Для видео и аудио";
    if (a017) a017.innerHTML = "Разработки";
    if (a018) a018.innerHTML = "Нет";
    if (a019) a019.innerHTML = "Да";
    if (a020) a020.innerHTML = "Перезагрузить";
    if (a021) a021.innerHTML = "Закрыть";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      if (a000_if) a000_if.innerHTML = "Одна нажатия, чтобы скрытия интерфейс";
    }else{
      if (a000_if) a000_if.innerHTML = "Один клик, чтобы скрыть интерфейс";
    };
    if(navigator.userAgent.match(/mobile/i)) {
      if (a001_if) a001_if.innerHTML = "два Нажмите, чтобы закрыть";
    }else{
      if (a001_if) a001_if.innerHTML = "два щелки, чтобы закрыть";
    };
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
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "Из ZIP файла";
    }
  }else
  if(localStorage.getItem("lang") === "he") {
    if (a000) a000.innerHTML = "נ.א2";
     if (a000) a000.style.direction = "rtl";
    if (a001) a001.innerHTML = "העלאת סרטונים";
    if (a002) a002.innerHTML = "העלאת תמונות";
    if (a003) a003.innerHTML = "העלאת שמע";
    if (a004) a004.innerHTML = "העלאת מסמכים";
    if (a005) a005.innerHTML = "הגדרות";
    if (a006) a006.innerHTML = "תפריט";
    if (a007) a007.innerHTML = "טעינה...";
     if (a007) a007.style.direction = "rtl";
    if (a008) a008.innerHTML = "המשך";
    if (a009) a009.innerHTML = "פתח בעת הפעלת הכרטיסייה";
     if (a009) a009.style.textAlign = "right";
    if (a010) a010.innerHTML = "שפות";
     if (a010) a010.style.textAlign = "right";
    if (a011) a011.innerHTML = "אישור";
    if (a012) a012.innerHTML = "הפעלה אוטומטית של אודיו וסרטונים הבאים";
     if (a012) a012.style.textAlign = "right";
    if (a013) a013.innerHTML = "הבא אוטומטי כבוי";
    if (a014) a014.innerHTML = "לסרטון";
    if (a015) a015.innerHTML = "לאודיו";
    if (a016) a016.innerHTML = "עבור וידאו ואודיו";
    if (a017) a017.innerHTML = "התפתחותויות";
     if (a017) a017.style.width = "100%";
     if (a017) a017.style.textAlign = "right";
    if (a018) a018.innerHTML = "לא";
    if (a019) a019.innerHTML = "כן";
    if (a020) a020.innerHTML = "טעינה מחדש";
    if (a021) a021.innerHTML = "סגירה";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      if (a000_if) a000_if.innerHTML = "לחיצה אחת להסתרת ממשק";
    }else{
      if (a000_if) a000_if.innerHTML = "לחיצה אחת להסתרת ממשק";
    };
    if(navigator.userAgent.match(/mobile/i)) {
      if (a001_if) a001_if.innerHTML = "לחיצה כפולה לסגירה";
    }else{
      if (a001_if) a001_if.innerHTML = "לחיצה כפולה לסגירה";
    };
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
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "מקובץ ZIP";
    };
  }
  if (a000) document.title = a000.innerHTML;
}