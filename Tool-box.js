let calc = document.getElementById("calculator");
let date = document.getElementById("Date-Converter");
let password = document.getElementById("Password-Generator");
let percent = document.getElementById("Percentage-Calculator");

function turn(i) {
  window.location.href = i;
}

calc.onclick = () => turn("./calc.html");
date.onclick = () => turn("./date.html");
password.onclick = () => turn("./password.html");
percent.onclick = () => turn("./percent.html");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js", { scope: "./" });
}
