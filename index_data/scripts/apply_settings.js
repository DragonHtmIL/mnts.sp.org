function applySettings() {
  localStorage.setItem("lang", document.getElementById("langSelection").value);
  localStorage.setItem("tabOnStart", document.getElementById("startOnTab").value);
  localStorage.setItem("autoNextFor", document.getElementById("autoNextSelection").value);
  window.location.reload();
}