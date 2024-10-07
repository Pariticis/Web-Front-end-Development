const button = document.querySelector("button");

button.onclick = () => {
    dispalyMessage("123456","warning");
};

function dispalyMessage(text, type) {
  const html = document.querySelector("html");

  const div = document.createElement("div");
  div.setAttribute("class", "msgBox");
  html.appendChild(div);

  const p = document.createElement("p");
  p.textContent = text;
  div.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "x";
  div.appendChild(button);

  button.onclick = function () {
    div.parentNode.removeChild(div);
  };

  if (type === "warning") {
      p.style.backgroundImage = "url(../../site/images/warning.png)";
      p.style.backgroundColor = "red";
  } else if (type === "chat") {
      p.style.backgroundImage = "url(../../site/images/chat.png)";
      p.style.backgroundColor = "blue";
  } else {
      p.style.backgroundImage = "";
      p.style.backgroundColor = "green";
  }
}