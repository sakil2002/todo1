const addTask = document.querySelector(".Add");
const list = document.querySelector(".list");
const moon = document.querySelector("#moon");
const moon2 = document.querySelector("#mn2");
moon.addEventListener(
  "click",
  function () {
    const container = document.querySelector(".container");
    moon.style.backgroundColor = "dark";
    moon.style.borderRadius = "100%";
    container.style.backgroundColor = "black";
    container.style.color = "white";
  },
  false
);
moon2.addEventListener(
  "click",
  function () {
    const container = document.querySelector(".container");
    moon2.style.borderRadius = "100%";
    container.style.backgroundColor = "white";
    container.style.color = "black";
    const text = document.querySelector("#text");
    text.style.border = "1px solid black";
    text.style.boxShadow = "0px 0px 10px 0px rgb(14, 191, 210)";
    text.style.borderRadius = " 5px 20px";
    text.style.backgroundColor = "black";
    text.style.color = "white";
    const todo = document.querySelector(".todo");
    todo.style.backgroundColor = "black";
    todo.style.color = "white";
  },
  false
);

addTask.addEventListener("click", function () {
  const text = document.querySelector("#text").value;
  if (!text) {
    return; // Prevent empty list items
  }

  const newLi = document.createElement("li");
  newLi.style.listStyle = "none";
  newLi.style.position = "relative";
  newLi.style.bottom = "20px";
  newLi.style.right = "26px";
  newLi.style.backgroundColor = "grey";
  newLi.style.color = "black";
  newLi.style.width = "100%";
  newLi.style.height = "20px";
  newLi.style.border = "1px solid white";
  // newLi.style.borderRadius = "20px 5px";
  newLi.style.borderRadius = " 10px  30px";
  newLi.style.margin = "7px";
  newLi.style.padding = "7px";
  newLi.textContent = text;
  // Use textContent for better content management
  newLi.style.textAlign = "start";

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.style.width = "70px";
  editButton.style.borderRadius = "20px 5px";
  editButton.style.border = "1px groove";
  editButton.style.padding = "5px";
  editButton.style.float = "right";
  editButton.style.position = "relative";
  editButton.style.bottom = "8px";
  editButton.style.right = "25px";
  editButton.style.margin = "5px";
  editButton.style.backgroundColor = "#80ff00";
  editButton.style.color = "white";

  const delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.style.width = "70px";
  delButton.style.border = "1px groove ";
  delButton.style.borderRadius = " 5px 20px";
  delButton.style.padding = "5px";
  delButton.style.float = "right";
  delButton.style.position = "relative";
  delButton.style.bottom = "8px";
  delButton.style.right = "2px"; // Adjust position to avoid overlapping
  delButton.style.margin = "4px";
  delButton.style.backgroundColor = "#ff4d4d";
  delButton.style.Color = "white";

  newLi.appendChild(delButton);
  newLi.appendChild(editButton);
  list.appendChild(newLi);

  // Event listener for edit button
  editButton.addEventListener("click", function () {
    const newText = prompt("Enter new text:");
    if (newText) {
      // Update only if user enters new text
      newLi.textContent = newText;
    }
  });

  // Event listener for delete button
  delButton.addEventListener(
    "click",
    function () {
      list.removeChild(newLi);
    },
    false
  );
});
