function playerVideo() {
  document.getElementById("videoContiner").style.right = "0%";
  document.getElementById("videoContiner").style.left = "0%";
  document.getElementById("imageContiner").style.right = "-100%";
  document.getElementById("imageContiner").style.left = "auto";
  document.getElementById("audioContiner").style.right = "-100%";
  document.getElementById("audioContiner").style.left = "auto";
  document.getElementById("documentContiner").style.right = "-100%";
  document.getElementById("documentContiner").style.left = "auto";
  document.getElementById("videoPlayer").classList = "player-tab videoLang active";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
}
function playerImage() {
  document.getElementById("videoContiner").style.right = "auto";
  document.getElementById("videoContiner").style.left = "-100%";
  document.getElementById("imageContiner").style.right = "0%";
  document.getElementById("imageContiner").style.left = "0%";
  document.getElementById("audioContiner").style.right = "-100%";
  document.getElementById("audioContiner").style.left = "auto";
  document.getElementById("documentContiner").style.right = "-100%";
  document.getElementById("documentContiner").style.left = "auto";
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang active";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
}
function playerAudio() {
  document.getElementById("videoContiner").style.right = "auto";
  document.getElementById("videoContiner").style.left = "-100%";
  document.getElementById("imageContiner").style.right = "auto";
  document.getElementById("imageContiner").style.left = "-100%";
  document.getElementById("audioContiner").style.right = "0%";
  document.getElementById("audioContiner").style.left = "0%";
  document.getElementById("documentContiner").style.right = "-100%";
  document.getElementById("documentContiner").style.left = "auto";
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang active";
  document.getElementById("documentPlayer").classList = "player-tab documentLang";
}
function playerDocument() {
  document.getElementById("videoContiner").style.right = "auto";
  document.getElementById("videoContiner").style.left = "-100%";
  document.getElementById("imageContiner").style.right = "auto";
  document.getElementById("imageContiner").style.left = "-100%";
  document.getElementById("audioContiner").style.right = "auto";
  document.getElementById("audioContiner").style.left = "-100%";
  document.getElementById("documentContiner").style.right = "0%";
  document.getElementById("documentContiner").style.left = "0%";
  document.getElementById("videoPlayer").classList = "player-tab videoLang";
  document.getElementById("imagePlayer").classList = "player-tab imageLang";
  document.getElementById("audioPlayer").classList = "player-tab audioLang";
  document.getElementById("documentPlayer").classList = "player-tab documentLang active";
}