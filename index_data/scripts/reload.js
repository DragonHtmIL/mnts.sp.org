function reload() {
  var alert = document.getElementById("alert");
  var cancel = document.getElementById("alertCancel");
  var confirm = document.getElementById("alertConfirm");
  var name = document.getElementById("alertName");
  var text = document.getElementById("alertText");
  alert.style.right = "0%";
  if(localStorage.getItem("lang") === "en") {
    name.innerHTML = "S.P2: Reload.";
    text.innerHTML = "Sure you want to reload?";
    text.innerHTML += "<br>";
    text.innerHTML += "All uploads be removed";
  }else
  if(localStorage.getItem("lang") === "ru") {
    name.innerHTML = "П.Х2: Перезагрузить.";
    text.innerHTML = "Вы уверены, что хотите перезагрузить?";
    text.innerHTML += "<br>";
    text.innerHTML += "Все загрузки будут удалены";
  }else
  if(localStorage.getItem("lang") === "ja") {
    name.innerHTML = "ス.プ2: リロードします。";
    text.innerHTML = "再読み込みしてもよろしいですか？";
    text.innerHTML += "<br>";
    text.innerHTML += "アップロードしたすべてのコンテンツが削除されます";
  }else
  if(localStorage.getItem("lang") === "chs") {
    name.innerHTML = "存.播2: 重新加载。";
    text.innerHTML = "确定要重新加载吗？";
    text.innerHTML += "<br>";
    text.innerHTML += "所有上传内容将被移除";
  }else
  if(localStorage.getItem("lang") === "cht") {
    name.innerHTML = "儲.播2: 重新載入。";
    text.innerHTML = "確定要重新加載嗎？";
    text.innerHTML += "<br>";
    text.innerHTML += "所有上傳內容將會移除";
  }else
  if(localStorage.getItem("lang") === "ko") {
    name.innerHTML = "스.플2: 재장전.";
    text.innerHTML = "새로고침하시겠습니까?";
    text.innerHTML += "<br>";
    text.innerHTML += "모든 업로드가 삭제됩니다.";
  }else
  if(localStorage.getItem("lang") === "he") {
    name.innerHTML = "נ.א2: טעינה מחדש.";
    name.style.direction = "rtl";
    text.innerHTML = "בטוחים שאתם רוצים לטעון מחדש?";
    text.innerHTML += "<br>";
    text.innerHTML += "כל ההעלאות יוסרו";
    text.style.direction = "rtl";
  }else
  if(localStorage.getItem("lang") === "de") {
    name.innerHTML = "S.S2: Neu laden.";
    text.innerHTML = "Möchten Sie die Seite wirklich neu laden?";
    text.innerHTML += "<br>";
    text.innerHTML += "Alle Uploads werden gelöscht.";
  };
  cancel.addEventListener("click", function() {
    alert.style.right = "-100%";
  });
  confirm.addEventListener("click", function() {
    window.location.reload();
  });
}