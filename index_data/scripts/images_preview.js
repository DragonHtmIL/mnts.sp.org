function showImage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imagepreviewbase = document.getElementById("imagepreviewbase");
  expandImg.src = imgs.src;
  imagepreviewbase.style.left = "0%";
  document.body.style.overflow = "hidden";
  expandImg.addEventListener('contextmenu', evt => {
    evt.preventDefault();
  });
  expandImg.ondragstart = function() {return false;};
};
function closeImgPreview(){
  imagepreviewbase.style.left = "-100%";
  setTimeout(() => {
    document.body.style.overflow = "auto";
  },340);
};
function infoImgPreview() {
  if(document.getElementById("imgName").style.marginTop === "0px") {
    document.getElementById("imgName").style.marginTop = "-25px";
    document.getElementById("insFss").style.marginBottom = "-25px";
    document.getElementById("closeImgView").style.marginRight = "-70px";
  }else{
    document.getElementById("imgName").style.marginTop = "0px";
    document.getElementById("insFss").style.marginBottom = "0px";
    document.getElementById("closeImgView").style.marginRight = "0px";
  }
}