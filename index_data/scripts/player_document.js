document.querySelector("input[name=documentsUploader]").onchange = function(event) {
  const preview = document.getElementById('documentsContiner');
  var numberOfDocuments = event.target.files.length;
  for (var i = 0; i < numberOfDocuments; i++) {
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const iframe = document.createElement('iframe');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const btncontiner = document.createElement('div');
    iframe.alt = file.name;
    iframe.setAttribute("controls", "");
    iframe.setAttribute("controlsList","nodownload");
    iframe.src = blobURL;
    button.className = "remove-button remove-doc";
    span.className = "doc-label";
    div.className = "doc-frame";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = iframe.alt;
    btncontiner.className = "buttons-continer";
    button.addEventListener('click', () => {
      preview.removeChild(div);
    });
    div.appendChild(iframe);
    btncontiner.appendChild(button);
    div.appendChild(btncontiner);
    div.appendChild(span);
    preview.appendChild(div);
  }
};
function clearDocumentUploader() {
  const input = document.getElementById("inputDocuments");
  input.value = "";
}