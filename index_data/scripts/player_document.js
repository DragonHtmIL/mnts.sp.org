let docCounter = 0;
document.querySelector("input[name=documentsUploader]").onchange = function(event) {
  const preview = document.getElementById('documentsContiner');
  var numberOfDocuments = event.target.files.length;
  for (var i = 0; i < numberOfDocuments; i++) {
    docCounter = ++docCounter;
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const ifspace = document.createElement('div');
    const iframe = document.createElement('iframe');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const fsshow = document.createElement('button');
    const btncontiner = document.createElement('div');
    const iffullclose = document.createElement('span');
    const loading = document.createElement('div');
    const loadingText = document.createElement('div');
    ifspace.className = "i-frame-full-subspace";
    iframe.alt = file.name;
    iframe.setAttribute("controls", "");
    iframe.setAttribute("controlsList","nodownload");
    iframe.src = blobURL;
    button.className = "remove-button remove-doc";
    fsshow.className = "full-screen";
    fsshow.id = "ifssBtn";
    span.className = "doc-label";
    div.className = "doc-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = iframe.alt;
    btncontiner.className = "buttons-continer";
    iffullclose.className = "close-windows ivfs if-full-close";
    loading.className = "file-loading-continer";
    loadingText.className = "file-loading-text";
    button.addEventListener('click', () => {
      preview.removeChild(div);
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
    preview.appendChild(div);
    document.addEventListener('error', () => {
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
  }
};
function clearDocumentUploader() {
  const input = document.getElementById("inputDocuments");
  input.value = "";
}