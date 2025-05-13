function loadTexts() {
  var a000 = document.getElementById("titleHeader");
  a000.innerHTML = "Storage Player"; // Storage Player
  var a001 = document.getElementById("upVidLang");
  a001.innerHTML = "Upload Videos"; // Upload Videos
  var a001 = document.getElementById("upImgLang");
  a001.innerHTML = "Upload Images"; // Upload Images
  var a001 = document.getElementById("upAudLang");
  a001.innerHTML = "Upload Audios"; // Upload Audios
  var a001 = document.getElementById("upDocLang");
  a001.innerHTML = "Upload Documents"; // Upload Documents
  ///////////////////////////////////////////////////////////////////////
  const a000_set = document.getElementsByClassName("videoLang");
  for (let i = 0; i < a000_set.length; i++) {
    a000_set[i].textContent = "Video"; // Video
  };
  const a001_set = document.getElementsByClassName("imageLang");
  for (let i = 0; i < a001_set.length; i++) {
    a001_set[i].textContent = "Image"; // Image
  };
  const a002_set = document.getElementsByClassName("audioLang");
  for (let i = 0; i < a002_set.length; i++) {
    a002_set[i].textContent = "Audio"; // Audio
  };
  const a003_set = document.getElementsByClassName("documentLang");
  for (let i = 0; i < a003_set.length; i++) {
    a003_set[i].textContent = "Document"; // Document
  };
  ///////////////////////////////////////////////////////////////////////
  document.title = a000;
}