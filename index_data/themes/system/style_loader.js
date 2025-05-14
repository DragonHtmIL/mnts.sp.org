function styleLoadCss() {
  const rootlit = document.getElementById("styleRootLit");
  const rootdark = document.getElementById("styleRootDark");
  const style = document.getElementById("styleBase");
  const langText = document.getElementById("languageLoad");
  const langCalendar = document.getElementById("calendarLangLoad");
  rootlit.setAttribute("href", localStorage.getItem("themeLocator") + "/root_light.css");
  rootdark.setAttribute("href", localStorage.getItem("themeLocator") + "/root_dark.css");
  style.setAttribute("href", localStorage.getItem("themeLocator") + "/style_0.css");
  langText.setAttribute("src", localStorage.getItem("themeLocator") + "/languages/language_text.js");
  langCalendar.setAttribute("src", localStorage.getItem("themeLocator") + "/languages/calendar.js");
}