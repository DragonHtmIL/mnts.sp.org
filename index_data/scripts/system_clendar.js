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
  }else
  if(localStorage.getItem("lang") === "chs") {
    today = weekDayChs[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "cht") {
    today = weekDayCht[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "ko") {
    today = weekDayKo[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "he") {
    today = weekDayHe[timeNow.getDay()];
  }else
  if(localStorage.getItem("lang") === "de") {
    today = weekDayDe[timeNow.getDay()];
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
  }else
  if(localStorage.getItem("lang") === "chs") {
    tomonths = monthsChs[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "cht") {
    tomonths = monthsCht[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "ko") {
    tomonths = monthsKo[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "he") {
    tomonths = monthsHe[timeNow.getMonth()];
  }else
  if(localStorage.getItem("lang") === "de") {
    tomonths = monthsDe[timeNow.getMonth()];
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