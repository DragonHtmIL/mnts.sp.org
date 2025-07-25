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
    a012.innerHTML = "次のオーディオとビデオを自動再生";
    a013.innerHTML = "次回自動オフ";
    a014.innerHTML = "ビデオ用";
    a015.innerHTML = "オーディオ用";
    a016.innerHTML = "ビデオとオーディオ用";
    a017.innerHTML = "開発";
    a018.innerHTML = "いいえ";
    a019.innerHTML = "はい";
    a020.innerHTML = "リロードします";
    a021.innerHTML = "近い";
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
  }else
  if(localStorage.getItem("lang") === "chs") {
    a000.innerHTML = "存.播2";
    a001.innerHTML = "上传视频";
    a002.innerHTML = "上传图片";
    a003.innerHTML = "上传音频";
    a004.innerHTML = "上传文件";
    a005.innerHTML = "设置";
    a006.innerHTML = "菜单";
    a007.innerHTML = "加载中...";
    a008.innerHTML = "继续";
    a009.innerHTML = "在启动选项卡上打开";
    a010.innerHTML = "语言";
    a011.innerHTML = "申请";
    a012.innerHTML = "自动播放下一个音频和视频";
    a013.innerHTML = "自动关闭";
    a014.innerHTML = "对于视频";
    a015.innerHTML = "对于音频";
    a016.innerHTML = "对于视频和音频";
    a017.innerHTML = "发展";
    a018.innerHTML = "否";
    a019.innerHTML = "是";
    a020.innerHTML = "重新加载";
    a021.innerHTML = "关闭";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "一键隐藏界面";
    }else{
      a000_if.innerHTML = "单击隐藏界面";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "双击关闭";
    }else{
      a001_if.innerHTML = "双击关闭";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "视频";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "图像";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "声音的";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "文档";
    };
  }else
  if(localStorage.getItem("lang") === "cht") {
    a000.innerHTML = "儲.播2";
    a001.innerHTML = "上傳影片";
    a002.innerHTML = "上傳圖片";
    a003.innerHTML = "上傳音訊";
    a004.innerHTML = "上傳文件";
    a005.innerHTML = "設定";
    a006.innerHTML = "選單";
    a007.innerHTML = "載入中...";
    a008.innerHTML = "繼續";
    a009.innerHTML = "在啟動標籤上打開";
    a010.innerHTML = "語言";
    a011.innerHTML = "申請";
    a012.innerHTML = "自動播放下一個音頻和視頻";
    a013.innerHTML = "自動關閉";
    a014.innerHTML = "對於視頻";
    a015.innerHTML = "對於音訊";
    a016.innerHTML = "對於視頻和音訊";
    a017.innerHTML = "發展";
    a018.innerHTML = "否";
    a019.innerHTML = "是";
    a020.innerHTML = "重新載入";
    a021.innerHTML = "關閉";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "一鍵隱藏介面";
    }else{
      a000_if.innerHTML = "點擊隱藏介面";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "按兩下關閉";
    }else{
      a001_if.innerHTML = "按兩下關閉";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "影片";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "影像";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "聲音的";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "文件";
    };
  }else
  if(localStorage.getItem("lang") === "ko") {
    a000.innerHTML = "스.플2";
    a001.innerHTML = "비디오 업로드";
    a002.innerHTML = "이미지 업로드";
    a003.innerHTML = "오디오 업로드";
    a004.innerHTML = "문서 업로드";
    a005.innerHTML = "설정";
    a006.innerHTML = "메뉴";
    a007.innerHTML = "로딩 중...";
    a008.innerHTML = "계속하다";
    a009.innerHTML = "시작 시 탭 열기";
    a010.innerHTML = "언어";
    a011.innerHTML = "적용하다";
    a012.innerHTML = "다음 오디오 및 비디오 자동 재생";
    a013.innerHTML = "자동 다음 끄기";
    a014.innerHTML = "비디오용";
    a015.innerHTML = "오디오용";
    a016.innerHTML = "비디오 및 오디오용";
    a017.innerHTML = "개발";
    a018.innerHTML = "아니요";
    a019.innerHTML = "예";
    a020.innerHTML = "재장전";
    a021.innerHTML = "닫다";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "한 번 누르면 인터페이스가 숨겨집니다";
    }else{
      a000_if.innerHTML = "한 번의 클릭으로 인터페이스 숨기기";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "두 번 누르면 닫힙니다";
    }else{
      a001_if.innerHTML = "닫기를 위해 두 번 클릭하세요";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "동영상";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "영상";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "오디오";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "문서";
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
  }else
  if(localStorage.getItem("lang") === "de") {
    a000.innerHTML = "S.S2";
    a001.innerHTML = "Videos hochladen";
    a002.innerHTML = "Bilder hochladen";
    a003.innerHTML = "Audios hochladen";
    a004.innerHTML = "Dokumente hochladen";
    a005.innerHTML = "Einstellungen";
    a006.innerHTML = "Menü";
    a007.innerHTML = "LADEN...";
    a008.innerHTML = "Weitermachen";
    a009.innerHTML = "Öffnen Sie beim Start die Registerkarte";
    a010.innerHTML = "Sprachen";
    a011.innerHTML = "Anwenden";
    a012.innerHTML = "Nächste Audios und Videos automatisch abspielen";
    a013.innerHTML = "Auto Weiter aus";
    a014.innerHTML = "Für Video";
    a015.innerHTML = "Für Audio";
    a016.innerHTML = "Für Video und Audio";
    a017.innerHTML = "Entwicklungen";
    a018.innerHTML = "Nein";
    a019.innerHTML = "Ja";
    a020.innerHTML = "Neu laden";
    a021.innerHTML = "Schließen";
    /////////////////////////////////Ifs/////////////////////////////////
    if(navigator.userAgent.match(/mobile/i)) {
      a000_if.innerHTML = "Einmal drücken, um die Benutzeroberfläche auszublenden";
    }else{
      a000_if.innerHTML = "Ein Klick zum Ausblenden der Benutzeroberfläche";
    }
    if(navigator.userAgent.match(/mobile/i)) {
      a001_if.innerHTML = "Zum Schließen zweimal drücken";
    }else{
      a001_if.innerHTML = "Doppelklick zum Schließen";
    }
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Video";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Bild";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "Audio";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Dokumentieren";
    };
  }
  document.title = a000.innerHTML;
}