const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const altArray = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Looping through images */

for (let i = 0; i < imageArray.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "../../site/images/${imageArray[i]}");
  newImage.setAttribute("alt",  altArray[i]);
  thumbBar.appendChild(newImage);
  thumbBar.children[i].addEventListener("click", () => {
    displayedImage.src = this.src;
    displayedImage.alt = this.alt;
    overlay.classList.add("show");
  });
}

/* Declaring the alternative text for each image file */

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const isDark = btn.getAttribute("class");
  if (isDark === "dark") {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(255, 0.5)";
  } else {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
});
