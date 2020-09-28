const input = document.querySelector(".email");
const small = document.querySelector(".small");
const error_icon = document.querySelector(".error-icon");

input.addEventListener("change", (e) => {
  console.log(e.preventDefault());

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(input.value).toLowerCase())) {
    input.classList.add("error");
    small.classList.add("error");
    error_icon.classList.add("error");
  } else {
    return;
  }
});
