const select = doucument.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  let day;

  if (choice === "January" || choice === "March" || choice === "May" || choice === "July" || choice === "August" || choice === "October" || choice === "December") {
    day = 31;
  } else if (choice === "February") {
    day = 28;
  } else if (choice === "April" || choice === "June" || choice === "September" || choice === "November") {
    day = 30;
  }
  createCalendar(day, choice);
});

function createCalendar(day, choice) {
  h1.textContent = choice;
  list.innerHTML = "";
  for (let i = 1; i < day + 1; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

createCalendar(31, "January");