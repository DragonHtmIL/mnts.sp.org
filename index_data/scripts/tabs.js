function playerVideo() {
  const content = document.getElementById("videoContiner");
  document.getElementById("videoContiner").style.bottom = "0%";
  document.getElementById("imageContiner").style.bottom = "-100%";
  document.getElementById("audioContiner").style.bottom = "-100%";
  document.getElementById("documentContiner").style.bottom = "-100%";
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
  document.getElementById("videoContiner").style.bottom = "-100%";
  document.getElementById("imageContiner").style.bottom = "0%";
  document.getElementById("audioContiner").style.bottom = "-100%";
  document.getElementById("documentContiner").style.bottom = "-100%";
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
  document.getElementById("videoContiner").style.bottom = "-100%";
  document.getElementById("imageContiner").style.bottom = "-100%";
  document.getElementById("audioContiner").style.bottom = "0%";
  document.getElementById("documentContiner").style.bottom = "-100%";
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
  document.getElementById("videoContiner").style.bottom = "-100%";
  document.getElementById("imageContiner").style.bottom = "-100%";
  document.getElementById("audioContiner").style.bottom = "-100%";
  document.getElementById("documentContiner").style.bottom = "0%";
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