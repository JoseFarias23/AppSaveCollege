const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    username: "floripa",
    password: "maistech",
  };

  const username = document.querySelector("#username").value,
    password = document.querySelector("#password").value,
    msgArea = document.querySelector("#msg-area");

  if (username == data.username && password == data.password) {
    msgArea.innerHTML = "LOGADO";
    msgArea.style = "color: green";
  } else {
    msgArea.innerHTML = "INCORRETO";
    msgArea.style = "color: red";
  }
});