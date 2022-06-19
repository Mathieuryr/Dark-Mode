// DIV Switch
const switchBox = document.querySelector(".switch");
switchBox.addEventListener("click", function () {
  btn.classList.toggle("btn-change");
  icone.classList.toggle("icone-change");
  icone.classList.toggle("fa-sun");
  container.classList.toggle("container-change");
  if (title.innerText === "DARK MODE") {
    title.innerText = "LIGHT MODE";
  } else {
    title.innerText = "DARK MODE";
  }
});

// DIV Btn
const btn = document.querySelector(".btn");
console.log(btn);

// Icone
const icone = document.querySelector("i");
console.log(icone);

// DIV Container
const container = document.querySelector(".container");
console.log(container);

// Titre
const title = document.querySelector("h1");
console.log(title);
