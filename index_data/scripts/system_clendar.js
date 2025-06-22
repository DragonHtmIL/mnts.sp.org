function displayDate() {
  const timeNow = new Date();
  let today = weekDay[timeNow.getDay()];
  let todaynum = timeNow.getDate();
  let monthswin = timeNow.getMonth() + 1;
  monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
  let tomonths = months[timeNow.getMonth()];
  let year = timeNow.getFullYear();
  if (navigator.userAgent.match(/Android/i)) {
    document.getElementById("calendar").innerHTML = today + " | " + todaynum + " " + tomonths + " " + year;
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
  } else if (navigator.userAgent.match(/Windows/i)) {
    document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
  } else {
    document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
  }
};