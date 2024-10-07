var output = document.querySelector(".output");

output.innerHTML = "";

var i = 10;

while (i >= 0) {
  var p = document.createElement("p");
  
  if (i = 10) {
    p.textContent = "countdown" + i;
  }
  else if (i = 0) {
    p.textContent = "Blast off !";
  }
  else {
    p.textContent = i;
  }
  output.appendChild(p);
  i--;
}
