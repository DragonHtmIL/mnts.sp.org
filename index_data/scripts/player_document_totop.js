const documentContent = document.getElementById("documentContiner");
const documentScrollTopBtn = document.getElementById("scrollToThisElementDoc");
documentContent.addEventListener("scroll", function() {
  documentScrollFunction();
});
function documentScrollFunction() {
  if (documentContent.scrollTop > 50) {
    documentScrollTopBtn.style.right = "0%";
  } else {
    documentScrollTopBtn.style.right = "-85px";
  }
};
documentScrollTopBtn.addEventListener("click", function() {
  documentContent.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
documentScrollFunction();