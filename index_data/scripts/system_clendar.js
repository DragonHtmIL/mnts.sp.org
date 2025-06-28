function displayDate() {
  const timeNow = new Date();
  let today;
  if(localStorage.getItem("lang") === "en") {
    today = weekDayEn[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "ru") {
    today = weekDayRu[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "ja") {
    today = weekDayJa[timeNow.getDay()];
  };
  let todaynum = timeNow.getDate();
  let monthswin = timeNow.getMonth() + 1;
  monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
  let tomonths;
  if(localStorage.getItem("lang") === "en") {
    tomonths = monthsEn[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "ru") {
    tomonths = monthsRu[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "ja") {
    tomonths = monthsJa[timeNow.getMonth()];
  };
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