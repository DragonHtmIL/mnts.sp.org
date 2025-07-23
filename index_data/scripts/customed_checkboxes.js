function customeCheckbox0001() {
  const input = document.getElementById("administratorTools");
  if(input.checked === false) {
    document.getElementById("checkboxId0001").classList.add("checked");
    document.getElementById("ch0001false").style.marginLeft = "-100%";
    document.getElementById("ch0001true").style.marginRight = "0%";
  }else
  if(input.checked === true) {
    document.getElementById("checkboxId0001").classList.remove("checked");
    document.getElementById("ch0001false").style.marginLeft = "0%";
    document.getElementById("ch0001true").style.marginRight = "-100%";
  }
}