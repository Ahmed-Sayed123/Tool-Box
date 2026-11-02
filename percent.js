let number = document.getElementById("number");
let percent = document.getElementById("percent");
let calculate = document.getElementById("calculate");
let result = document.getElementById("resultValue");
let back = document.getElementById("back");
calculate.onclick = () => {
  if (
    number.value &&
    percent.value &&
    !Number.isNaN(Number(number.value)) &&
    !Number.isNaN(Number(percent.value))
  ) {
    result.textContent = "";
    result.textContent = (Number(number.value) * Number(percent.value)) / 100;
  } else {
    result.textContent = "Please Enter Both inputs";
  }
};
back.onclick = () => {
  window.location.href = "./index.html";
};
