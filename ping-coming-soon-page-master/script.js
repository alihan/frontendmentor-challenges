const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(input.value).toLowerCase())) {
    input.parentElement.classList.add("erroractive");
    input.setAttribute("placeholder", "example@email/com");
  } else {
    input.parentElement.classList.remove("erroractive");
  }
});
