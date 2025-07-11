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
    const autoNextButton = document.createElement('button');
    const btncontiner = document.createElement('div');
    video.alt = file.name;
    video.setAttribute("controls", "");
    video.setAttribute("controlsList", "nodownload");
    video.src = blobURL;
    button.className = "remove-button remove-vid";
    buttonloop.className = "loop-off";
    buttonloop.id = "loopBtn";
    buttonloop.disabled = true;
    if(document.getElementById("autoNextSelection").value === "none") {
      autoNextButton.className = "auto-next-off";
      buttonloop.disabled = false;
    }else
    if(document.getElementById("autoNextSelection").value === "video") {
      autoNextButton.className = "auto-next-on";
      buttonloop.disabled = true;
    }else
    if(document.getElementById("autoNextSelection").value === "audio") {
      autoNextButton.className = "auto-next-off";
      buttonloop.disabled = false;
    }else
    if(document.getElementById("autoNextSelection").value === "both") {
      autoNextButton.className = "auto-next-on";
      buttonloop.disabled = true;
    }
    autoNextButton.id = "nextBtn";
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
      if (buttonloop.className === "loop-off") {
        video.setAttribute("loop", "");
        buttonloop.className = "loop-on";
      } else {
        video.removeAttribute("loop");
        buttonloop.className = "loop-off";
      }
    });
    autoNextButton.addEventListener('click', () => {
      if (autoNextButton.className === "auto-next-off") {
        autoNextButton.className = "auto-next-on";
        buttonloop.disabled = true;
        if (buttonloop.className === "loop-on") {
          video.removeAttribute("loop");
        } else {
          video.removeAttribute("loop");
        }
      } else {
        autoNextButton.className = "auto-next-off";
        buttonloop.disabled = false;
        if (buttonloop.className === "loop-on") {
          video.setAttribute("loop", "");
        } else {
          video.removeAttribute("loop");
        }
      }
    });
    video.addEventListener('ended', () => {
      const allVideos = Array.from(preview.querySelectorAll('video'));
      const currentIndex = allVideos.indexOf(video);
      const isCurrentlyFullscreen = document.fullscreenElement === video;
      if (autoNextButton.className === "auto-next-on") {
        if (currentIndex < allVideos.length - 1) {
          const nextVideo = allVideos[currentIndex + 1];
          nextVideo.play();
          if (isCurrentlyFullscreen) {
            toggleFullScreen(nextVideo);
          }
        } else {
          if (buttonloop.className === "loop-off") {
            video.pause();
            video.currentTime = 0;
            if (isCurrentlyFullscreen) {
              document.exitFullscreen();
            }
          }
        }
      } else if (autoNextButton.className === "auto-next-off") {
        if (buttonloop.className === "loop-off") {
          video.pause();
          video.currentTime = 0;
          if (isCurrentlyFullscreen) {
            document.exitFullscreen();
          }
        }
      }
    });
    function toggleFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    // Add event listener for when a video enters fullscreen
    video.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement === video) {
      } else {
      }
    });
    video.addEventListener('webkitfullscreenchange', () => {
      if (document.webkitFullscreenElement === video) {
      } else {
      }
    });
    div.appendChild(video);
    btncontiner.appendChild(button);
    btncontiner.appendChild(buttonloop);
    btncontiner.appendChild(autoNextButton);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearVideoUploader() {
  const input = document.getElementById("inputVideos");
  input.value = "";
}