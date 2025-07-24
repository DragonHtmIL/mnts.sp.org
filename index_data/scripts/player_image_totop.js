const imageContent = document.getElementById("imageContiner");
const imageScrollTopBtn = document.getElementById("scrollToThisElementImg");
imageContent.addEventListener("scroll", function() {
  imageScrollFunction();
});
function imageScrollFunction() {
  if (imageContent.scrollTop > 50) {
    imageScrollTopBtn.style.right = "0%";
  } else {
    imageScrollTopBtn.style.right = "-85px";
  }
};
imageScrollTopBtn.addEventListener("click", function() {
  imageContent.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
imageScrollFunction();