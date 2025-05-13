function styleLoadCss() {
  const rootlit = document.getElementById("styleRootLit");
  const rootdark = document.getElementById("styleRootDark");
  const style = document.getElementById("styleBase");
  rootlit.setAttribute("href", localStorage.getItem("themeLocator") + "/root_light.css");
  rootdark.setAttribute("href", localStorage.getItem("themeLocator") + "/root_dark.css");
  style.setAttribute("href", localStorage.getItem("themeLocator") + "/style_0.css");
}