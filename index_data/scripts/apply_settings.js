function applySettings() {
  localStorage.setItem("lang", document.getElementById("langSelection").value);
  localStorage.setItem("tabOnStart", document.getElementById("startOnTab").value);
  window.location.reload();
}