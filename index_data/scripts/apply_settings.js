function applySettings() {
  localStorage.setItem("themeLocation", document.getElementById("themeLocator").value);
  window.location.reload();
}