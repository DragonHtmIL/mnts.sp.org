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
//    const buttonloop = document.createElement('button');
    const btncontiner = document.createElement('div');
    image.alt = file.name;
//    image.setAttribute("controls", "");
//    image.setAttribute("controlsList","nodownload");
    image.src = blobURL;
    button.className = "remove-button remove-img";
//    buttonloop.className = "loop-off";
//    buttonloop.id = "loopBtn";
    span.className = "img-label";
    div.className = "img-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = image.alt;
    btncontiner.className = "buttons-continer";
    button.addEventListener('click', () => {
      preview.removeChild(div);
    });
//    buttonloop.addEventListener('click', () => {
//      if(buttonloop.className === "loop-off") {
//        image.setAttribute("loop", "");
//        buttonloop.className = "loop-on";
//      }else{
//        image.removeAttribute("loop");
//        buttonloop.className = "loop-off";
//      }
//    });
    div.appendChild(image);
    btncontiner.appendChild(button);
//    btncontiner.appendChild(buttonloop);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearVideoUploader() {
  const input = document.getElementById("inputImages");
  input.value = "";
}