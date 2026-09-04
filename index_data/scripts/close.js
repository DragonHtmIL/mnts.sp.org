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
  if(localStorage.getItem("lang") === "he") {
    name.innerHTML = "נ.א2: סגירה.";
    name.style.direction = "rtl";
    text.innerHTML = "בטוחים שאתם רוצים לסגור?";
    text.innerHTML += "<br>";
    text.innerHTML += "כל ההעלאות יוסרו";
    text.style.direction = "rtl";
  };
  cancel.addEventListener("click", function() {
    alert.style.right = "-100%";
  });
  confirm.addEventListener("click", function() {
    close();
  });
}