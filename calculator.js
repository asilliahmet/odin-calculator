let no1 = 0,
  no2 = "",
  last = "+";
const sgn = ["/", "*", "-", "+"];

let no1p = document.querySelector("#no1");
let no2p = document.querySelector("#no2");
let buttons = document.querySelectorAll("button");

for (button of buttons)
  button.addEventListener("click", (x) => main(x.target.innerText));


window.addEventListener("keydown", (x) => main(x.key));

function main(inp) {
  return operate(inp) || addrem(inp) || equals(inp) || allClear(inp);
}

function operate(sym) {
  if (sgn.indexOf(sym) == -1) return 0;
  if (last == "+" && no2 !== "") no1 += +no2;
  if (last == "-" && no2 !== "") no1 -= +no2;
  if (last == "*" && no2 !== "") no1 *= +no2;
  if (last == "/" && no2 !== "") no1 /= +no2;
  no2 = "";
  last = sym;
  displayNo1();
  displayNo2();
  return 1;
}

function addrem(num) {
  if (num == "Backspace" || num =="Delete" || num=="<=") {
    no2 = no2.slice(0, no2.length-1);
    displayNo2();
    return 1;
  }
  if ((+num != num || num === " ") && num !==".") return 0;
  if (num === "." && no2 != (+no2).toFixed(0)) return 0;
  no2 += num;
  displayNo2();
  return 1;
}

function equals(fnc) {
  if (!(fnc =="Enter" || fnc =="=")) return 0;
  operate("+");
  displayNo1();
  displayNo2();
  return 1;

}

function allClear(ac) {
  if (ac !== "AC") return 0;
  no2 = "";
  last = "+";
  no1 = 0;
  no1p.innerText = "";
  no2p.innerText = "";
  return 1;
}

function displayNo1() {
  if (no1 != +(no1.toFixed(2))){
    no1p.innerText = `${no1.toFixed(2)} ${last}`;
    return 0;
  }
  no1p.innerText = `${no1} ${last}`;
}

function displayNo2() {
  no2p.innerText = no2;
}
