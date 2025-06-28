document.querySelector("input[name=imagesUploader]").onchange = function(event) {
  const preview = document.getElementById('imagesContiner');
  var numberOfImages = event.target.files.length;
  for (var i = 0; i < numberOfImages; i++) {
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const fsshow = document.createElement('button');
    const btncontiner = document.createElement('div');
    const blocker = document.createElement('div');
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
    button.addEventListener('click', () => {
      preview.removeChild(div);
    });
    fsshow.addEventListener('click', function() {
      document.getElementById("imgName").innerHTML = image.alt;
      showImage(image);
    });
    image.ondragstart = function() {return false;};
    div.appendChild(image);
    btncontiner.appendChild(button);
    btncontiner.appendChild(fsshow);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
    div.appendChild(blocker);
  }
};
function clearImageUploader() {
  const input = document.getElementById("inputImages");
  input.value = "";
}