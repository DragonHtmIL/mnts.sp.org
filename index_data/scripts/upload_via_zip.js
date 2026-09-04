const inputZip = document.getElementById("inputZip");
inputZip.addEventListener("change", async () => {
  const previewImd = document.getElementById("imagesContiner");
  const previewAud = document.getElementById("audiosContiner");
  const previewDoc = document.getElementById("documentsContiner");
  const previewVid = document.getElementById("videosContiner");
  const file = inputZip.files[0];
  if (!file) return;
  const zip = await JSZip.loadAsync(file);
  zip.forEach(async (path, entry) => {
    if (/\.(png|jpe?g|gif|webp)$/i.test(entry.name)) {
      imgCounter = ++imgCounter;
      const blob = await entry.async("blob");
      const url = URL.createObjectURL(blob);
      const img = document.createElement("img");
      const div = document.createElement('div');
      const span = document.createElement('span');
      const button = document.createElement('button');
      const fsshow = document.createElement('button');
      const btncontiner = document.createElement('div');
      const blocker = document.createElement('div');
      const loading = document.createElement('div');
      const loadingText = document.createElement('div');
      img.src = url;
      button.className = "remove-button remove-img";
      fsshow.className = "full-screen";
      fsshow.id = "ifssBtn";
      span.className = "img-label";
      div.className = "img-frame";
      span.style.overflowX = "auto";
      span.style.overflowY = "hidden";
      span.innerHTML = entry.name;
      btncontiner.className = "buttons-continer";
      blocker.className = "blocker";
      loading.className = "file-loading-continer";
      loadingText.className = "file-loading-text";
      button.addEventListener('click', () => {
        previewImd.removeChild(div);
        imgCounter = --imgCounter;
        document.getElementById("imgsUploaded").innerHTML = imgCounter;
      });
      fsshow.addEventListener('click', function() {
        document.getElementById("imgName").innerHTML = entry.name;
        showImage(img);
      });
      blocker.addEventListener('click', function() {
        document.getElementById("imgName").innerHTML = entry.name;
        showImage(img);
      });
      img.ondragstart = function() {return false;};
      document.getElementById("imgsUploaded").innerHTML = imgCounter;
      div.appendChild(img);
      btncontiner.appendChild(button);
      btncontiner.appendChild(fsshow);
      div.appendChild(btncontiner);
      div.appendChild(span);
      previewImd.appendChild(div);
      div.appendChild(blocker);
      img.addEventListener('error', () => {
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
          loadingText.innerHTML = "אירעה שגיאה..." + "<br>" + "נסה פורמט אחר לתמונה.";
        }
      });
    }else
    if (/\.(mp3|ogg|m4a|wav)$/i.test(entry.name)) {
      audCounter = ++audCounter;
      const blob = await entry.async("blob");
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      const div = document.createElement('div');
      const span = document.createElement('span');
      const button = document.createElement('button');
      const buttonloop = document.createElement('button');
      const autoNextButton = document.createElement('button');
      const btncontiner = document.createElement('div');
      const loading = document.createElement('div');
      const loadingText = document.createElement('div');
      audio.setAttribute("controls", "");
      audio.setAttribute("controlsList","nodownload");
      audio.src = url;
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
      span.innerHTML = entry.name;
      btncontiner.className = "buttons-continer";
      loading.className = "file-loading-continer";
      loadingText.className = "file-loading-text";
      button.addEventListener('click', () => {
        previewAud.removeChild(div);
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
      previewAud.appendChild(div);
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
    }else
    if (/\.(txt|json|htm?l|js|css|py)$/i.test(entry.name)) {
      docCounter = ++docCounter;
      const blob = await entry.async("blob");
      const url = URL.createObjectURL(blob);
      const iframe = document.createElement("iframe");
      const div = document.createElement('div');
      const ifspace = document.createElement('div');
      const span = document.createElement('span');
      const button = document.createElement('button');
      const fsshow = document.createElement('button');
      const btncontiner = document.createElement('div');
      const iffullclose = document.createElement('span');
      const loading = document.createElement('div');
      const loadingText = document.createElement('div');
      ifspace.className = "i-frame-full-subspace";
      iframe.setAttribute("controls", "");
      iframe.setAttribute("controlsList","nodownload");
      iframe.src = url;
      button.className = "remove-button remove-doc";
      fsshow.className = "full-screen";
      fsshow.id = "ifssBtn";
      span.className = "doc-label";
      div.className = "doc-frame";
      span.style.overflowX = "auto";
      span.style.overflowY = "hidden";
      span.innerHTML = entry.name;
      btncontiner.className = "buttons-continer";
      iffullclose.className = "close-windows ivfs if-full-close";
      loading.className = "file-loading-continer";
      loadingText.className = "file-loading-text";
      button.addEventListener('click', () => {
        previewDoc.removeChild(div);
        docCounter = --docCounter;
        document.getElementById("docsUploaded").innerHTML = docCounter;
      });
      fsshow.addEventListener('click', function() {
        iframe.classList.add("i-frame-full");
        ifspace.style.display = "block";
        iffullclose.style.marginRight = "0%";
      });
      iffullclose.addEventListener("click", function() {
        if(iframe.className === "i-frame-full") {
          iframe.classList.remove("i-frame-full");
          ifspace.style.display = "none";
          iffullclose.style.marginRight = "-67px";
        }else{
          iframe.classList.add("i-frame-full");
          ifspace.style.display = "block";
          iffullclose.style.marginRight = "0%";
        }
      });
      document.getElementById("docsUploaded").innerHTML = docCounter;
      div.appendChild(ifspace);
      div.appendChild(iframe);
      div.appendChild(iffullclose);
      btncontiner.appendChild(button);
      btncontiner.appendChild(fsshow);
      div.appendChild(btncontiner);
      div.appendChild(span);
      previewDoc.appendChild(div);
      iframe.addEventListener('error', () => {
        div.appendChild(loading);
        loading.appendChild(loadingText);
        loadingText.className = "file-loading-text errored";
        if(localStorage.getItem("lang") === "en") {
          loadingText.innerHTML = "An error occurred..." + "<br>" + "Try with other format for document.";
        }else
        if(localStorage.getItem("lang") === "ru") {
          loadingText.innerHTML = "Произошла ошибка..." + "<br>" + "Попробуйте использовать другой формат документ.";
        }else
        if(localStorage.getItem("lang") === "he") {
          loadingText.innerHTML = "נוצרה שגיאה..." + "<br>" + "נסו פורמט אחר למסמך.";
        }
      });
    }else
    if (/\.(mp4|webm|ogg)$/i.test(entry.name)) {
      vidCounter = ++vidCounter;
      const blob = await entry.async("blob");
      const url = URL.createObjectURL(blob);
      const video = document.createElement("video");
      const div = document.createElement('div');
      const span = document.createElement('span');
      const button = document.createElement('button');
      const buttonloop = document.createElement('button');
      const autoNextButton = document.createElement('button');
      const btncontiner = document.createElement('div');
      const loading = document.createElement('div');
      const loadingText = document.createElement('div');
      video.setAttribute("controls", "");
      video.setAttribute("controlsList", "nodownload");
      video.src = url;
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
      span.innerHTML = entry.name;
      btncontiner.className = "buttons-continer";
      loading.className = "file-loading-continer";
      loadingText.className = "file-loading-text";
      button.addEventListener('click', () => {
        previewVid.removeChild(div);
        vidCounter = --vidCounter;
        document.getElementById("vidsUploaded").innerHTML = vidCounter;
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
      document.getElementById("vidsUploaded").innerHTML = vidCounter;
      div.appendChild(video);
      btncontiner.appendChild(button);
      btncontiner.appendChild(buttonloop);
      btncontiner.appendChild(autoNextButton);
      div.appendChild(btncontiner);
      div.appendChild(span);
      previewVid.appendChild(div);
      video.addEventListener('error', () => {
        div.appendChild(loading);
        loading.appendChild(loadingText);
        loadingText.className = "file-loading-text errored";
        if(localStorage.getItem("lang") === "en") {
          loadingText.innerHTML = "An error occurred..." + "<br>" + "Try with other format for video.";
        }else
        if(localStorage.getItem("lang") === "ru") {
          loadingText.innerHTML = "Произошла ошибка..." + "<br>" + "Попробуйте использовать другой формат видео.";
        }else
        if(localStorage.getItem("lang") === "he") {
          loadingText.innerHTML = "נוצרה שגיאה..." + "<br>" + "נסו פורמט אחר לסירטון.";
        }
      });
    }
  });
});
function clearUploaderZip() {
  const input = document.getElementById("inputZip");
  input.value = "";
};