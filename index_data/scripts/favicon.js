
const dimensions = [
  "16x16",
  "32x32",
  "96x96",
  "180x180",
  "300x300",
  "512x512"
];
function loadIcon() {
  var favicon = document.createElement('link');
  var favicon16 = document.createElement('link');
  var favicon32 = document.createElement('link');
  var favicon96 = document.createElement('link');
  var favicon180 = document.createElement('link');
  var favicon300 = document.createElement('link');
  var favicon512 = document.createElement('link');
  if(document.getElementById("themeCheckbox").checked){
    subiconCode = localStorage.getItem("themeLocation") + "/textures/dark/icon.png";
  }else{
    subiconCode = localStorage.getItem("themeLocation") + "/textures/light/icon.png";
  }
  favicon.href = subiconCode;
  favicon.rel = 'icon';
  favicon16.href = subiconCode;
  favicon16.rel = 'icon';
  favicon16.sizes = dimensions[0];
  favicon32.href = subiconCode;
  favicon32.rel = 'icon';
  favicon32.sizes = dimensions[1];
  favicon96.href = subiconCode;
  favicon96.rel = 'icon';
  favicon96.sizes = dimensions[2];
  favicon180.href = subiconCode;
  favicon180.rel = 'icon';
  favicon180.sizes = dimensions[3];
  favicon300.href = subiconCode;
  favicon300.rel = 'icon';
  favicon300.sizes = dimensions[4];
  favicon512.href = subiconCode;
  favicon512.rel = 'icon';
  favicon512.sizes = dimensions[5];
  document.head.appendChild(favicon);
  document.head.appendChild(favicon16);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon96);
  document.head.appendChild(favicon180);
  document.head.appendChild(favicon300);
  document.head.appendChild(favicon512);
};