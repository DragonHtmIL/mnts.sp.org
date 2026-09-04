const audioContent = document.getElementById("audioContiner");
const audioScrollTopBtn = document.getElementById("scrollToThisElementAud");
audioContent.addEventListener("scroll", function() {
  audioScrollFunction();
});
function audioScrollFunction() {
  if (audioContent.scrollTop > 50) {
    audioScrollTopBtn.style.right = "0%";
  } else {
    audioScrollTopBtn.style.right = "-85px";
  }
};
audioScrollTopBtn.addEventListener("click", function() {
  audioContent.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
audioScrollFunction();