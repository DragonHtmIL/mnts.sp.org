if ('getBattery' in navigator) {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      document.getElementById("batteryLevel").innerHTML = battery.level * 100;
      document.getElementById('batteryCharge').innerHTML = battery.charging ? '⨭' : '⨴️';
    }
    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
  });
} else {
  console.log('Battery Status API is not supported in this browser.');
};
navigator.getBattery().then(function (battery) {
  function showAllBatteryInfo() {
    editChargeInfo();
    editLevelInfo();
  }
  showAllBatteryInfo();
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editChargeInfo() {
    var baseBttry = document.getElementById('batteryCharge');
    var baseInBatteryProg = document.getElementById("inBatteryProgress");
    var baseBatteryCharge = (battery.charging ? "⨭" : "⨴️");
    baseBttry.innerText = baseBatteryCharge;
    if (baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "var(--battery-use)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-use)";
    } else {
      baseBttry.style.color = "var(--battery-pls)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-pls)";
    };
  };
  battery.addEventListener('levelchange', function () {
    editLevelInfo();
  });
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editLevelInfo() {
    var baseBatteryLevel = document.getElementById('batteryLevel');
    var baseBttry = document.getElementById('batteryCharge');
    var baseInBatteryProg = document.getElementById("inBatteryProgress");
    var batteryLevel = battery.level * 100;
    var roundedBatteryLevel = batteryLevel.toFixed(0);
    baseBatteryLevel.innerText = roundedBatteryLevel + "%";
    baseInBatteryProg.style.height = baseBatteryLevel.innerHTML;
    if (roundedBatteryLevel < 20 && baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "var(--battery-low)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-low)";
    }else
    if(roundedBatteryLevel < 20 && baseBttry.innerHTML === "⨭") {
      baseBttry.style.color = "var(--battery-pls)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-pls)";
    }else
    if(roundedBatteryLevel > 20 && baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "var(--battery-use)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-use)";
    }else
    if(roundedBatteryLevel > 20 && baseBttry.innerHTML === "⨭") {
      baseBttry.style.color = "var(--battery-pls)";
      baseInBatteryProg.style.backgroundColor = "var(--battery-pls)";
    }
  };
});