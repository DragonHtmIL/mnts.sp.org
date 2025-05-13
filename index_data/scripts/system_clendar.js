function displayDate() {
  if(localStorage.getItem("splang") == "en") {
    const timeNow = new Date();
    let weekDay = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
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
  }else
  if(localStorage.getItem("splang") == "ru") {
    const timeNow = new Date();
    let weekDay = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вс"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"];
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
  }else
  if(localStorage.getItem("splang") == "jp") {
    const timeNow = new Date();
    let weekDay = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日","日曜日"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
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
  }else
  if(localStorage.getItem("splang") == "chs") {
    const timeNow = new Date();
    let weekDay = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
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
  }else
  if(localStorage.getItem("splang") == "cht") {
    const timeNow = new Date();
    let weekDay = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
    let monthswin = timeNow.getMonth() + 1;
    monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    if (navigator.userAgent.match(/Android/i)) {
      document.getElementById("calendar").innerHTML = today + ", " + tomonths + " " + todaynum;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
    } else if (navigator.userAgent.match(/Windows/i)) {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    } else {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    }
  }else
  if(localStorage.getItem("splang") == "ko") {
    const timeNow = new Date();
    let weekDay = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일","일요일"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["일월","이월","삼월","사월","오월","유월","칠월","팔월","구월","시월","십일월","십이월"];
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
  }else
  if(localStorage.getItem("splang") == "he") {
    const timeNow = new Date();
    let weekDay = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"];
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
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
  }else
  if(localStorage.getItem("splang") == "de") {
    const timeNow = new Date();
    let weekDay = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
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
  }
};