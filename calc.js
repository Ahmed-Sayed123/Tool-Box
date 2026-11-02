let stNum = document.getElementById("firstNum");
let ndNum = document.getElementById("secondNum");
let operator = document.getElementById("operator");
let result = document.getElementById("result");
let back = document.getElementById("back");
function op() {
  if (stNum.value != "" && ndNum.value != "" && operator.value != "") {
    if (operator.value == "+" || operator.value.toLowerCase() == "plus") {
      result.textContent = String(+stNum.value + +ndNum.value);
    } else if (
      operator.value == "-" ||
      operator.value.toLowerCase() == "minus"
    ) {
      result.textContent = String(+stNum.value - +ndNum.value);
    } else if (
      operator.value == "×" ||
      operator.value.toLowerCase() == "times" ||
      operator.value == "*"
    ) {
      result.textContent = String(+stNum.value * +ndNum.value);
    } else if (
      (operator.value == "÷" && ndNum.value != "0") ||
      (operator.value.toLowerCase() == "divide" && ndNum.value != "0") ||
      (operator.value == "/" && ndNum.value != "0")
    ) {
      result.textContent = String(+stNum.value / +ndNum.value);
    } else {
      result.textContent = "Invalid operation";
    }
  } else {
    result.textContent = "Please fill all fields";
  }
}
function clearance() {
  stNum.value = "";
  ndNum.value = "";
  operator.value = "";
  result.textContent = "";
}
back.onclick = () => {
  window.location.href = "./index.html"
};
