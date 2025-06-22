document.querySelector("input[name=videosUploader]").onchange = function(event) {
  const preview = document.getElementById('videosContiner');
  var numberOfVideos = event.target.files.length;
  for (var i = 0; i < numberOfVideos; i++) {
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const video = document.createElement('video');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const buttonloop = document.createElement('button');
//    const fsshow = document.createElement('button');
    const btncontiner = document.createElement('div');
    video.alt = file.name;
    video.setAttribute("controls", "");
    video.setAttribute("controlsList","nodownload");
    video.src = blobURL;
    button.className = "remove-button remove-vid";
    buttonloop.className = "loop-off";
    buttonloop.id = "loopBtn";
//    fsshow.className = "full-screen";
//    fsshow.id = "ifssBtn";
    span.className = "vid-label";
    div.className = "vid-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = video.alt;
    btncontiner.className = "buttons-continer";
    button.addEventListener('click', () => {
      preview.removeChild(div);
    });
    buttonloop.addEventListener('click', () => {
      if(buttonloop.className === "loop-off") {
        video.setAttribute("loop", "");
        buttonloop.className = "loop-on";
      }else{
        video.removeAttribute("loop");
        buttonloop.className = "loop-off";
      }
    });
//    fsshow.addEventListener('click', function() {
//      document.getElementById("imgName").innerHTML = image.alt;
//      showImage(image);
//    });
//    video.ondragstart = function() {return false;};
    div.appendChild(video);
    btncontiner.appendChild(button);
    btncontiner.appendChild(buttonloop);
//    btncontiner.appendChild(fsshow);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearVideoUploader() {
  const input = document.getElementById("inputVideos");
  input.value = "";
}