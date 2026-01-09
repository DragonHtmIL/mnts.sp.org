let imgCounter = 0;
document.querySelector("input[name=imagesUploader]").onchange = function(event) {
  const preview = document.getElementById('imagesContiner');
  var numberOfImages = event.target.files.length;
  for (var i = 0; i < numberOfImages; i++) {
    imgCounter = ++imgCounter;
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const fsshow = document.createElement('button');
    const btncontiner = document.createElement('div');
    const blocker = document.createElement('div');
    const loading = document.createElement('div');
    const loadingText = document.createElement('div');
    image.alt = file.name;
    image.src = blobURL;
    button.className = "remove-button remove-img";
    fsshow.className = "full-screen";
    fsshow.id = "ifssBtn";
    span.className = "img-label";
    div.className = "img-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = image.alt;
    btncontiner.className = "buttons-continer";
    blocker.className = "blocker";
    loading.className = "file-loading-continer";
    loadingText.className = "file-loading-text";
    button.addEventListener('click', () => {
      preview.removeChild(div);
      imgCounter = --imgCounter;
      document.getElementById("imgsUploaded").innerHTML = imgCounter;
    });
    fsshow.addEventListener('click', function() {
      document.getElementById("imgName").innerHTML = image.alt;
      showImage(image);
    });
    blocker.addEventListener('click', function() {
      document.getElementById("imgName").innerHTML = image.alt;
      showImage(image);
    });
    image.ondragstart = function() {return false;};
    document.getElementById("imgsUploaded").innerHTML = imgCounter;
    div.appendChild(image);
    btncontiner.appendChild(button);
    btncontiner.appendChild(fsshow);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
    div.appendChild(blocker);
    image.addEventListener('error', () => {
      div.appendChild(loading);
      loading.appendChild(loadingText);
      loadingText.className = "file-loading-text errored";
      if(localStorage.getItem("lang") === "en") {
        loadingText.innerHTML = "An error occurred..." + "<br>" + "Try with other format for image.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        loadingText.innerHTML = "Произошла ошибка..." + "<br>" + "Попробуйте использовать другой формат изображения.";
      }else
      if(localStorage.getItem("lang") === "he") {
        loadingText.innerHTML = "נוצרה שגיאה..." + "<br>" + "נסו פורמט אחר לתמונה.";
      }
    });
  }
};
function clearImageUploader() {
  const input = document.getElementById("inputImages");
  input.value = "";
}