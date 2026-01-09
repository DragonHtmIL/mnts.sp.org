let audCounter = 0;
document.querySelector("input[name=audiosUploader]").onchange = function(event) {
  const preview = document.getElementById('audiosContiner');
  var numberOfAudios = event.target.files.length;
  for (var i = 0; i < numberOfAudios; i++) {
    audCounter = ++audCounter;
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const audio = document.createElement('audio');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const buttonloop = document.createElement('button');
    const autoNextButton = document.createElement('button');
    const btncontiner = document.createElement('div');
    const loading = document.createElement('div');
    const loadingText = document.createElement('div');
    audio.alt = file.name;
    audio.setAttribute("controls", "");
    audio.setAttribute("controlsList","nodownload");
    audio.src = blobURL;
    button.className = "remove-button remove-aud";
    buttonloop.className = "loop-off";
    buttonloop.id = "loopBtn";
    buttonloop.disabled = true;
    if(document.getElementById("autoNextSelection").value === "none") {
      autoNextButton.className = "auto-next-off";
      buttonloop.disabled = false;
    }else
    if(document.getElementById("autoNextSelection").value === "video") {
      autoNextButton.className = "auto-next-off";
      buttonloop.disabled = false;
    }else
    if(document.getElementById("autoNextSelection").value === "audio") {
      autoNextButton.className = "auto-next-on";
      buttonloop.disabled = true;
    }else
    if(document.getElementById("autoNextSelection").value === "both") {
      autoNextButton.className = "auto-next-on";
      buttonloop.disabled = true;
    }
    autoNextButton.id = "nextBtn";
    span.className = "aud-label";
    div.className = "aud-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = audio.alt;
    btncontiner.className = "buttons-continer";
    loading.className = "file-loading-continer";
    loadingText.className = "file-loading-text";
    button.addEventListener('click', () => {
      preview.removeChild(div);
      audCounter = --audCounter;
      document.getElementById("audsUploaded").innerHTML = audCounter;
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
    document.getElementById("audsUploaded").innerHTML = audCounter;
    div.appendChild(audio);
    btncontiner.appendChild(button);
    btncontiner.appendChild(buttonloop);
    btncontiner.appendChild(autoNextButton);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
    audio.addEventListener('error', () => {
      div.appendChild(loading);
      loading.appendChild(loadingText);
      loadingText.className = "file-loading-text errored";
      if(localStorage.getItem("lang") === "en") {
        loadingText.innerHTML = "An error occurred..." + "<br>" + "Try with other format for audio.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        loadingText.innerHTML = "Произошла ошибка..." + "<br>" + "Попробуйте использовать другой формат аудио.";
      }else
      if(localStorage.getItem("lang") === "he") {
        loadingText.innerHTML = "נוצרה שגיאה..." + "<br>" + "נסו פורמט אחר לשמע.";
      }
    });
  }
};
function clearAudioUploader() {
  const input = document.getElementById("inputAudios");
  input.value = "";
}