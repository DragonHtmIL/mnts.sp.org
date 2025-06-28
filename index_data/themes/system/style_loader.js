function styleLoadCss() {
  const rootlit = document.getElementById("styleRoot");
  const style = document.getElementById("styleBase");
  const styleCreated = document.getElementById("styleCreated");
  rootlit.setAttribute("href", localStorage.getItem("themeLocation") + "/root.css");
  style.setAttribute("href", localStorage.getItem("themeLocation") + "/style.css");
  styleCreated.setAttribute("href", localStorage.getItem("themeLocation") + "/style_created.css");
};
styleLoadCss();