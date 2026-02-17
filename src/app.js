import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const excuse = `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}.`;

  const el = document.querySelector("#excuse");
  if (!el) {
    console.error('No encontré el elemento con id="excuse" en el HTML');
    return;
  }

  el.innerHTML = excuse;
};
