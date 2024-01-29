const button = document.getElementById("button");

function alertButton() {
  alert("Måndag igen");
}

const alertButtonArrow = () => {
  alert("Måndag från arrow function");
};

const changeText = () => {
  const textHelloWorld = document.getElementById("helloworld");
  textHelloWorld.textContent = "Hello world from Script.js";
};

// button.addEventListener("click", changeText);

const changeColor = document.getElementById("helloworld");

// button.addEventListener("click", () => {
//   //  changeColor.style.color = "red";
// });

const spanChange = document.getElementById("spanchange");

button.addEventListener("click", () => {
  spanChange.style.backgroundColor = "green";
});
