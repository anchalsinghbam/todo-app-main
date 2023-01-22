const icon = document.getElementById("icon");
const lists = document.querySelectorAll(".list");
const addInput = document.getElementById("add-input");
const todoList = document.querySelector("ul");
let cross = document.querySelectorAll(".cross");

icon.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src = "images/icon-sun.svg";
  } else {
    icon.src = "images/icon-moon.svg";
  }
});

// for (let i = 0; i < lists.length; i++) {
//   lists[i].addEventListener("click", function () {
//     lists[i].classList.toggle("completed");
//   });
// }

lists.forEach(function (list) {
  list.addEventListener("click", function () {
    list.classList.toggle("completed");
  });
});

cross.forEach(function (close) {
  close.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

addInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const newList = document.createElement("li");

    newList.classList.add("list");

    newList.addEventListener("click", function () {
      newList.classList.toggle("completed");
    });

    newList.innerHTML = `<div class="circle circle-icon">
  <img class="check checked" src="/images/icon-check.svg" alt="" />
  </div>
  <p>${addInput.value}</p> 
  <img src="/images/icon-cross.svg" alt="" class="cross" />`;
    todoList.append(newList);
    cross = document.querySelectorAll(".cross");

    cross.forEach(function (close) {
      close.addEventListener("click", function () {
        this.parentElement.remove();
      });
    });
  }
});
