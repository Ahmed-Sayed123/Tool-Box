let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#*";

let lenth = document.getElementById("lenth");
let generate = document.getElementById("generate");
let parent = document.getElementById("parent");

let password = document.getElementById("password");
let copy = document.getElementById("copy");
let reload = document.getElementById("reload");

let back = document.getElementById("back");
function randomIndex(max) {
  const buf = new Uint32Array(1);
  const limit = Math.floor(4294967296 / max) * max;
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= limit);
  return buf[0] % max;
}

let newPass = "";
let index;
let R;

generate.onclick = () => {
  password.textContent = "";
  newPass = "";
  if (
    lenth.value &&
    !isNaN(Number(lenth.value)) &&
    lenth.value > 0 &&
    lenth.value <= 64
  ) {
    for (let i = 0; i < lenth.value; i++) {
      index = randomIndex(letters.length);
      newPass += letters[index];
    }
    password.textContent = newPass;
    parent.classList.remove("hide");
  } else {
    parent.classList.add("hide");
  }
};
reload.onclick = () => {
  if (!password.textContent) return;
  R = password.textContent.length;
  password.textContent = "";
  newPass = "";
  for (let i = 0; i < R; i++) {
    index = randomIndex(letters.length);
    newPass += letters[index];
  }
  password.textContent = newPass;
  parent.classList.remove("hide");
};
copy.onclick = () => {
  navigator.clipboard.writeText(password.textContent);
};
back.onclick = () => {
  window.location.href = "./index.html";
};
