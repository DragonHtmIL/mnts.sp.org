document.getElementById("themeCheckbox").addEventListener('change', switchTheme, false);
if (document.documentElement.getAttribute("data-theme") == "dark"){
  document.getElementById("themeCheckbox").checked = true;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0c0c');
};