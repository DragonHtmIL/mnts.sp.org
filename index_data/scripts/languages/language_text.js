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
    a000.innerHTML = "П.П2";
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
  if(localStorage.getItem("lang") === "ja") {
    a000.innerHTML = "ス.プ2";
    a001.innerHTML = "動画をアップロードする";
    a002.innerHTML = "画像をアップロード";
    a003.innerHTML = "オーディオをアップロード";
    a004.innerHTML = "書類をアップロードする";
    a005.innerHTML = "設定";
    a006.innerHTML = "メニュー";
    a007.innerHTML = "読み込み中...";
    a008.innerHTML = "続く";
    a009.innerHTML = "起動時にタブを開く";
    a010.innerHTML = "言語";
    a011.innerHTML = "適用する";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "1回押すとインターフェースが非表示になります";
    }else{
      a000_if.innerHTML = "ワンクリックでインターフェースを非表示";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "閉じるには2回押してください";
    }else{
      a001_if.innerHTML = "ダブルクリックして閉じる";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "ビデオ";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "画像";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "オーディオ";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "書類";
    };
  }
  document.title = a000.innerHTML;
}