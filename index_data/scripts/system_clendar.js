function displayDate() {
  const timeNow = new Date();
  let today;
  if(localStorage.getItem("lang") === "en") {
    today = weekDayEn[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "ru") {
    today = weekDayRu[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "he") {
    today = weekDayHe[timeNow.getDay()];
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
  if(localStorage.getItem("lang") === "he") {
    tomonths = monthsHe[timeNow.getMonth()];
  };
  let year = timeNow.getFullYear();
  if (navigator.userAgent.match(/Android/i)) {
    document.getElementById("calendar").innerHTML = today + " | " + todaynum + " " + tomonths + " " + year;
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("calendar").style.direction = "rtl";
    }
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("calendar").style.direction = "rtl";
    }
  } else if (navigator.userAgent.match(/Windows/i)) {
    document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("calendar").style.direction = "rtl";
    }
  } else {
    document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("calendar").style.direction = "rtl";
    }
  }
};