const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button2 = document.createElement("button");

  li.textContent = input.value;
  span.textContent = input.value;
  input.value = "";

  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(button2);

  button2.textContent = "Delete";
  button2.addEventListener("click", (event) => {
    ul.removeChild(li);
  });

  input.focus();
});
