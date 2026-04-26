// This script detects device type and change the functionality by there device type.
function detectDevices() {
  const isMobile = navigator.userAgent.toLowerCase().includes("mobile");
  
  const devTools = document.getElementById("adminacces");
  
  if (isMobile) {
    devTools.style.display = "none";
  } else {
    devTools.style.display = "block";
  }
}