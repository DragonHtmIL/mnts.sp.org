function customeCheckbox0001() {
  const input = document.getElementById("administratorTools");
  if(input.checked === false) {
    document.getElementById("checkboxId0001").classList.add("checked");
  }else
  if(input.checked === true) {
    document.getElementById("checkboxId0001").classList.remove("checked");
  }
};