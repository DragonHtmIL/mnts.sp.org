function checkSettingsChanges() {
  const settingsApplier = document.getElementById("applySettings");
  if(localStorage.getItem("lang") === document.getElementById("langSelection").value &&
    localStorage.getItem("tabOnStart") === document.getElementById("startOnTab").value &&
    localStorage.getItem("autoNextFor") === document.getElementById("autoNextSelection").value) {
    settingsApplier.style.display = "none";
  }else{
    settingsApplier.style.display = "block";
  }
}