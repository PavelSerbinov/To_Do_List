const form = document.querySelector(".task-form");
const addButton = document.querySelector("#add_button_id");
const resultBlock = document.querySelector(".result-block");
let ourList = [];

const addMessage = (event) => {
    event.preventDefault();
    resultBlock.innerHTML = '';
    resultBlock.style.opacity = 1;
    const workValue = form.task_input.value;
    ourList.push(workValue);

    ourList.forEach((message) => {
        const listItem = document.createElement("div");
        listItem.textContent = message;
        resultBlock.append(listItem);
      });

      console.log(ourList);

};

form.addEventListener("submit", addMessage);

