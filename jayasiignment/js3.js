var a, b;
var d = 1;
document.querySelector("#button1").onclick = function () {
  var a = parseInt(Math.random() * 5 + 1);
  document.querySelector("#heading1").textContent = a;
  const j = document.querySelector("#button1");
  j.disabled = true;
  const s = document.querySelector("#button2");
  s.disabled = false;
};
var c, d;
var count = 0;
document.querySelector("#button2").onclick = function () {
  var c = parseInt(Math.random() * 5 + 1);
  document.querySelector("#heading2").textContent = c;
  b = document.querySelector("#heading1").textContent;
  if (c == b) {
    const y = document.querySelector("#button2");
    y.disabled = true;
  }
  count = count + 1;
  document.querySelector("#jj").textContent = count;
};
var e, f;
var g = 1;
document.querySelector("#button3").onclick = function () {
  var e = parseInt(Math.random() * 5 + 1);
  document.querySelector("#heading3").textContent = e;
  const j = document.querySelector("#button3");
  j.disabled = true;
  const s = document.querySelector("#button4");
  s.disabled = false;
};
var h, i;
var count1 = 0;
document.querySelector("#button4").onclick = function () {
  var h = parseInt(Math.random() * 5 + 1);
  document.querySelector("#heading4").textContent = h;
  f = document.querySelector("#heading3").textContent;
  count1 = count1 + 1;
  document.querySelector("#jj1").textContent = count1;
  var o;
  o = document.querySelector("#jj").textContent;
  if (count1 < o) {
    if (h == f) {
      const p = document.querySelector("#button4");
      p.disabled = true;
      document.querySelector("#res").textContent = "player 2 is win";
    }
  } else {
    if (count1 == o) {
      if (h == f) {
        const p = document.querySelector("#button4");
        p.disabled = true;
        document.querySelector("#res").textContent = "tie";
        return;
      } else {
        const p = document.querySelector("#button4");
        p.disabled = true;
        document.querySelector("#res").textContent = "player 1 is win";
      }
    }
  }
};
// var o,u;
// o=document.querySelector("#jj").textContent;
// u=document.querySelector("#jj1").textContent;
// if(o<u)
// {
//     document.write("Player 1 is win");
// }
// else
// {
//     document.write("Player 2 is win");
// }
