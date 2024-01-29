const arrayExample = [1, 2, 4, "Hello", "World"];

for (let i = 0; i < arrayExample.length; i++) {
  console.log(arrayExample[i]);
}

const listOfCars = ["SAAB", "Volvo", "Tesla", "Bugatti", "Ford"];

const insertListOfCars = document.getElementById("carlist");

listOfCars.forEach((car) => {
  const listitem = document.createElement("li");
  listitem.textContent = car;
  insertListOfCars.appendChild(listitem);
});

const allDivs = document.getElementsByTagName("div");
console.log(allDivs.length);

// const helloWorld = document.getElementById("helloworld");

// helloWorld.style.color = "red";

// const test = document.getElementById("test");

// const allItems = document.getElementsByClassName("item");

// const getCar = document.querySelector(".car");

// const myList = document.querySelector("ul");

// const myNewListItem = document.createElement("li");

// myNewListItem.innerText = "Sak nummer 2";

// myList.append(myNewListItem);

// const removeHelloWorld = document.getElementById("helloworld");
// removeHelloWorld.remove();
