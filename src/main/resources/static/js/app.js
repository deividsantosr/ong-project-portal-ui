
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var btnSaveOng = document.querySelector("#save-ong");

var body = document.querySelector("body");

btnSignup.addEventListener("click", function (e) {
  e.preventDefault();

  let form = document.getElementById('login');
  let email = form.email.value;
  let password = form.password.value;

  fetch("http://localhost:8000/api/v1/user/login?email="+email+"&password="+password, {
    method: "GET"
  })
  .then(data =>data.json().then(response => {
    body.className = "sign-in-js";
  }))
  .catch(error => {
    window.alert("Falha no login");
  });
});

btnSaveOng.addEventListener("click", function(e) {
  e.preventDefault();

  let form = document.getElementById('create-ong');

  let _data = {
    name: form.name.value,
    categoryId: form.categoryId.value,
    description: form.description.value
  }

  fetch('http://localhost:8000/api/v1/ong', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"},
    mode: "cors"
  })
  .then(json => {
    window.alert("ONG cadastrada com sucesso!");
  })
  .catch(error => {
    window.alert("Falha no login");
  });
});

btnSignin.addEventListener("click", function () {
 body.className = "sign-up-js";
});