// firstly making an onclick funtion for the cog(settings icon)
// so that it becomes interactive (clickable)

document.querySelector(".switcher-btn").onclick = () => {
  //creating a new class named active also mentioning it will have the toggle functionality
  document.querySelector(".color-switcher").classList.toggle("active");
};

// making a variable for all the theme buttons
let themeButtons = document.querySelectorAll(".theme-buttons");

//making a loop so that after clicking each color, will behave the same way
themeButtons.forEach((color) => {
  //addEventListener function allows to modify HTML elements
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--main-color", dataColor);
  });
});
