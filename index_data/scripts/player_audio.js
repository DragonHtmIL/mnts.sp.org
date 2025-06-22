document.querySelector("input[name=audiosUploader]").onchange = function(event) {
  const preview = document.getElementById('audiosContiner');
  var numberOfAudios = event.target.files.length;
  for (var i = 0; i < numberOfAudios; i++) {
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const audio = document.createElement('audio');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const buttonloop = document.createElement('button');
//    const fsshow = document.createElement('button');
    const btncontiner = document.createElement('div');
    audio.alt = file.name;
    audio.setAttribute("controls", "");
    audio.setAttribute("controlsList","nodownload");
    audio.src = blobURL;
    button.className = "remove-button remove-aud";
    buttonloop.className = "loop-off";
    buttonloop.id = "loopBtn";
//    fsshow.className = "full-screen";
//    fsshow.id = "ifssBtn";
    span.className = "aud-label";
    div.className = "aud-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = audio.alt;
    btncontiner.className = "buttons-continer";
    button.addEventListener('click', () => {
      preview.removeChild(div);
    });
    buttonloop.addEventListener('click', () => {
      if(buttonloop.className === "loop-off") {
        audio.setAttribute("loop", "");
        buttonloop.className = "loop-on";
      }else{
        audio.removeAttribute("loop");
        buttonloop.className = "loop-off";
      }
    });
//    fsshow.addEventListener('click', function() {
//      document.getElementById("imgName").innerHTML = image.alt;
//      showImage(image);
//    });
//    audio.ondragstart = function() {return false;};
    div.appendChild(audio);
    btncontiner.appendChild(button);
    btncontiner.appendChild(buttonloop);
//    btncontiner.appendChild(fsshow);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearAudioUploader() {
  const input = document.getElementById("inputAudios");
  input.value = "";
}