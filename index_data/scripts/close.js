function cLose() {
  var alert = document.getElementById("alert");
  var cancel = document.getElementById("alertCancel");
  var confirm = document.getElementById("alertConfirm");
  var name = document.getElementById("alertName");
  var text = document.getElementById("alertText");
  alert.style.right = "0%";
  if(localStorage.getItem("lang") === "en") {
    name.innerHTML = "S.P2: Close.";
    text.innerHTML = "Sure you want to close?";
    text.innerHTML += "<br>";
    text.innerHTML += "All uploads be removed";
  }else
  if(localStorage.getItem("lang") === "ru") {
    name.innerHTML = "П.Х2: Закрыть.";
    text.innerHTML = "Вы уверены, что хотите закрыть?";
    text.innerHTML += "<br>";
    text.innerHTML += "Все загрузки будут удалены";
  }else
  if(localStorage.getItem("lang") === "ja") {
    name.innerHTML = "ス.プ2: 近い。";
    text.innerHTML = "本当に閉じますか?";
    text.innerHTML += "<br>";
    text.innerHTML += "アップロードしたすべてのコンテンツが削除されます";
  }else
  if(localStorage.getItem("lang") === "chs") {
    name.innerHTML = "存.播2: 关闭。";
    text.innerHTML = "确定要关闭吗？";
    text.innerHTML += "<br>";
    text.innerHTML += "所有上传内容将被移除";
  }else
  if(localStorage.getItem("lang") === "cht") {
    name.innerHTML = "儲.播2: 關閉。";
    text.innerHTML = "確定要關閉嗎？";
    text.innerHTML += "<br>";
    text.innerHTML += "所有上傳內容將會移除";
  }else
  if(localStorage.getItem("lang") === "ko") {
    name.innerHTML = "스.플2: 닫다.";
    text.innerHTML = "정말로 닫으시겠어요?";
    text.innerHTML += "<br>";
    text.innerHTML += "모든 업로드가 삭제됩니다.";
  }else
  if(localStorage.getItem("lang") === "he") {
    name.innerHTML = "נ.א2: סגירה.";
    name.style.direction = "rtl";
    text.innerHTML = "בטוחים שאתם רוצים לסגור?";
    text.innerHTML += "<br>";
    text.innerHTML += "כל ההעלאות יוסרו";
    text.style.direction = "rtl";
  }else
  if(localStorage.getItem("lang") === "de") {
    name.innerHTML = "S.S2: Schließen.";
    text.innerHTML = "Möchten Sie wirklich schließen?";
    text.innerHTML += "<br>";
    text.innerHTML += "Alle Uploads werden gelöscht.";
  };
  cancel.addEventListener("click", function() {
    alert.style.right = "-100%";
  });
  confirm.addEventListener("click", function() {
    close();
  });
}