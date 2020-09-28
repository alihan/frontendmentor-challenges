const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
      return input.type !== "email"
        ? input.setAttribute("placeholder", "")
        : input.setAttribute("placeholder", "email@example/com");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
});
