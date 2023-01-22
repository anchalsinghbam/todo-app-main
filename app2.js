const ul = document.querySelector("ul");

const todoItems = [
  {
    text: "Complete online JavaScript course",
    completed: true,
  },
  {
    text: "Arround the park 3x",
    completed: false,
  },
  {
    text: "10 minutes meditation",
    completed: false,
  },
  {
    text: "Read for 1 hour",
    completed: false,
  },
  {
    text: "Pick up groceries",
    completed: false,
  },
  {
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function renderTodos() {
  todoItems.forEach(function (todoItem) {
    const newList = document.createElement("li");
    newList.classList.add("list");
    newList.addEventListener("click", function () {
      newList.classList.toggle("completed");
    });

    newList.innerHTML = `<div class="circle circle-icon">
    <img class="check checked" src="/images/icon-check.svg" alt="" />
    </div>
    <p>${todoItem.text}</p> 
    <img src="/images/icon-cross.svg" alt="" class="cross" />`;
    ul.append(newList);
  });
}

renderTodos();

let cross = document.querySelectorAll(".cross");

cross.forEach(function (close) {
  close.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
