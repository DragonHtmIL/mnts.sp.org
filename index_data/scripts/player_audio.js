
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
    const autoNextButton = document.createElement('button');
    const btncontiner = document.createElement('div');
    audio.alt = file.name;
    audio.setAttribute("controls", "");
    audio.setAttribute("controlsList","nodownload");
    audio.src = blobURL;
    button.className = "remove-button remove-aud";
    buttonloop.className = "loop-off";
    buttonloop.id = "loopBtn";
    buttonloop.disabled = true;
    autoNextButton.className = "auto-next-on";
    autoNextButton.id = "nextBtn";
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
    autoNextButton.addEventListener('click', () => {
      if (autoNextButton.className === "auto-next-off") {
        autoNextButton.className = "auto-next-on";
        buttonloop.disabled = true;
        if(buttonloop.className === "loop-on") {
          audio.removeAttribute("loop");
        }else{
          audio.removeAttribute("loop");
        }
      } else {
        autoNextButton.className = "auto-next-off";
        buttonloop.disabled = false;
        if(buttonloop.className === "loop-on") {
          audio.setAttribute("loop", "");
        }else{
          audio.removeAttribute("loop");
        }
      }
    });
    audio.addEventListener('ended', () => {
      if (autoNextButton.className === "auto-next-on") {
        const allAudios = Array.from(preview.querySelectorAll('audio'));
        const currentIndex = allAudios.indexOf(audio);
        if (currentIndex < allAudios.length - 1) {
          allAudios[currentIndex + 1].play();
        } else {
          if (buttonloop.className === "loop-off") {
            audio.pause();
            audio.currentTime = 0;
          }
        }
      } else if (autoNextButton.className === "auto-next-off") {
        if (buttonloop.className === "loop-off") {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    });
    div.appendChild(audio);
    btncontiner.appendChild(button);
    btncontiner.appendChild(buttonloop);
    btncontiner.appendChild(autoNextButton);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearAudioUploader() {
  const input = document.getElementById("inputAudios");
  input.value = "";
}