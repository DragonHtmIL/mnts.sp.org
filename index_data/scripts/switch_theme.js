const toggleSwitch = document.querySelector('#themeCheckbox');
function switchTheme() {
  if (document.getElementById("themeCheckbox").checked) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("themeCheckbox").checked = true;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0c0c');
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("themeCheckbox").checked = false;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f5f5');
  }loadIcon();
};