function playerVideo() {
  const content = document.getElementById("videoContiner");
  document.getElementById("videoContiner").classList.add("displayed");
  document.getElementById("imageContiner").classList.remove("displayed");
  document.getElementById("audioContiner").classList.remove("displayed");
  document.getElementById("documentContiner").classList.remove("displayed");
  document.getElementById("videoPlayer").classList = "player-tab videoLang active";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
  if(content.scrollTop > 50) {
    document.getElementById("scrollToThisElementVid").style.right = "0%";
  }else{
    document.getElementById("scrollToThisElementVid").style.right = "-85px";
  }
  document.getElementById("scrollToThisElementImg").style.right = "-85px";
  document.getElementById("scrollToThisElementAud").style.right = "-85px";
  document.getElementById("scrollToThisElementDoc").style.right = "-85px";
}
function playerImage() {
  const content = document.getElementById("imageContiner");
  document.getElementById("videoContiner").classList.remove("displayed");
  document.getElementById("imageContiner").classList.add("displayed");
  document.getElementById("audioContiner").classList.remove("displayed");
  document.getElementById("documentContiner").classList.remove("displayed");
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang active";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
  if(content.scrollTop > 50) {
    document.getElementById("scrollToThisElementImg").style.right = "0%";
  }else{
    document.getElementById("scrollToThisElementImg").style.right = "-85px";
  }
  document.getElementById("scrollToThisElementVid").style.right = "-85px";
  document.getElementById("scrollToThisElementAud").style.right = "-85px";
  document.getElementById("scrollToThisElementDoc").style.right = "-85px";
}
function playerAudio() {
  const content = document.getElementById("audioContiner");
  document.getElementById("videoContiner").classList.remove("displayed");
  document.getElementById("imageContiner").classList.remove("displayed");
  document.getElementById("audioContiner").classList.add("displayed");
  document.getElementById("documentContiner").classList.remove("displayed");
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang active";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
  if(content.scrollTop > 50) {
    document.getElementById("scrollToThisElementAud").style.right = "0%";
  }else{
    document.getElementById("scrollToThisElementAud").style.right = "-85px";
  }
  document.getElementById("scrollToThisElementVid").style.right = "-85px";
  document.getElementById("scrollToThisElementImg").style.right = "-85px";
  document.getElementById("scrollToThisElementDoc").style.right = "-85px";
}
function playerDocument() {
  const content = document.getElementById("documentContiner");
  document.getElementById("videoContiner").classList.remove("displayed");
  document.getElementById("imageContiner").classList.remove("displayed");
  document.getElementById("audioContiner").classList.remove("displayed");
  document.getElementById("documentContiner").classList.add("displayed");
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang active";
  if(content.scrollTop > 50) {
    document.getElementById("scrollToThisElementDoc").style.right = "0%";
  }else{
    document.getElementById("scrollToThisElementDoc").style.right = "-85px";
  }
  document.getElementById("scrollToThisElementVid").style.right = "-85px";
  document.getElementById("scrollToThisElementImg").style.right = "-85px";
  document.getElementById("scrollToThisElementAud").style.right = "-85px";
}