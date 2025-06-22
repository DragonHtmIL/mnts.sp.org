function styleLoadCss() {
  const rootlit = document.getElementById("styleRoot");
  const style = document.getElementById("styleBase");
  const langText = document.getElementById("languageLoad");
  const langCalendar = document.getElementById("tScriptLangLoad");
  const styleCreated = document.getElementById("styleCreated");
  rootlit.setAttribute("href", localStorage.getItem("themeLocation") + "/root.css");
  style.setAttribute("href", localStorage.getItem("themeLocation") + "/style.css");
  styleCreated.setAttribute("href", localStorage.getItem("themeLocation") + "/style_created.css");
  langText.setAttribute("src", localStorage.getItem("themeLocation") + "/languages/language_text.js");
  langCalendar.setAttribute("src", localStorage.getItem("themeLocation") + "/languages/calendar.js");
};
styleLoadCss();