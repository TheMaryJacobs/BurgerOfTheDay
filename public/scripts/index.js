const burgerNameEl = document.getElementById("burgerName");
const buttonEl = document.getElementById("button");
const devouredEl = document.getElementById("devoured");
const notDevouredEl = document.getElementById("notdevoured");

function renderBurgers() {
  devouredEl.innerHTML = "";
  notDevouredEl.innerHTML = "";


  axios.get("/api/burgers").then(function(response) {
    burgers = response.data;

    for (let i = 0; i < burgers.length; i++) {
      burger = burgers[i];
      burgerEl = document.createElement("li");
      burgerEl.innerHTML = burger.name;
      burgerEl.id = burger.id;

      if (burger.devoured) {
        devouredEl.append(burgerEl);
        burgerEl.addEventListener("click", () =>
          destroyBurger(event.target.id)
        );
      } else {
        notDevouredEl.append(burgerEl);
        burgerEl.addEventListener("click", () => updateBurger(event.target.id));
      }
    }
  });
}
renderBurgers();

function updateBurger(id) {
  console.log(id);
  axios
    .post("/api/update/" + id, {
      name: name
    })
    .then(function(response) {
      console.log(response);
      renderBurgers();
    })
    .catch(function(error) {
      console.log(error);
      renderBurgers();
    });
}

function destroyBurger(id) {
  console.log(id);
  axios
    .post("/api/destroy/" + id, {
      name: name
    })
    .then(function(response) {
      console.log(response);
      renderBurgers();
    })
    .catch(function(error) {
      console.log(error);
      renderBurgers();
    });
}

buttonEl.addEventListener("click", () => {
  const name = burgerNameEl.value;
  console.log(name);
  axios
    .post("/api/add", {
      name: name
    })
    .then(function(response) {
      console.log(response);
      renderBurgers();
    })
    .catch(function(error) {
      console.log(error);
      renderBurgers();
    });
});