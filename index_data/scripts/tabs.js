function openPlayer(evt, playerName) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("player-content");
  for (ti = 0; ti < tabcontent.length; ti++) {
    tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("player-tab");
  for (ti = 0; ti < tablinks.length; ti++) {
    tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(playerName).style.display = "block";
  evt.currentTarget.className += " active";
};