const videoContent = document.getElementById("videoContiner");
const videoScrollTopBtn = document.getElementById("scrollToThisElementVid");
videoContent.addEventListener("scroll", function() {
  videoScrollFunction();
});
function videoScrollFunction() {
  if (videoContent.scrollTop > 50) {
    videoScrollTopBtn.style.right = "0%";
  } else {
    videoScrollTopBtn.style.right = "-85px";
  }
};
videoScrollTopBtn.addEventListener("click", function() {
  videoContent.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
videoScrollFunction();