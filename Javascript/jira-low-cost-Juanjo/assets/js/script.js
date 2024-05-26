var btnAddtask = document.getElementById("add-task-btn");
var inputName = document.getElementById("add-task-input");
var inputDescription = document.getElementById("add-task-description");
var toDoContainer = document.getElementById("to-do-container");
var doneContainer = document.getElementById("done-container");
var inProgressContainer = document.getElementById("in-progress-container");
var limitDateInput = document.getElementById("limit-date-input");
 
// btnAddtask.addEventListener("click", addTask);
// var tasks = document.querySelectorAll(".task");

//  tasks.forEach(function(task) {
//   task.addEventListener("dragover", allowDrop);
//   task.addEventListener("drop", handleDrop);
//   task.addEventListener("dragstart", drag)
// });



inputName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

inputDescription.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

function addTask() {
  if (inputName.value.length > 0 && inputDescription.value.length) {
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.draggable = "true";
    taskDiv.setAttribute("ondrop", "handleDrop(event)"); 
    taskDiv.setAttribute("ondragover", "allowDrop(event)");
    taskDiv.setAttribute("ondragstart","drag(event)");
  
    let leftArrow = createArrowLeftIcon("move-task-left");
    taskDiv.appendChild(leftArrow);
    leftArrow.addEventListener("click", moveTaskLeft);

    let rightArrow = createArrowRightIcon("move-task-right");
    taskDiv.appendChild(rightArrow);
    rightArrow.addEventListener("click", moveTaskRight);

    taskDiv.appendChild(createTaskDescription(inputDescription.value));
    taskDiv.appendChild(createTaskName(inputName.value));
    let limit = createLimitDate();
    taskDiv.appendChild(limit);

    let erase = createTrashIcon();
    taskDiv.appendChild(erase);
    erase.addEventListener("click", deleteTask);
    let name = taskDiv.querySelector(".task_name")
    name.addEventListener("click", function() {
      let details = taskDiv.querySelector(".task_description");
      if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
      } else {
        details.classList.add("hidden");
      }
    });

    let task = new Task(inputName.value, inputDescription.value, limit, false);
    inputName.value = "";
    inputDescription.value = "";

    localStorage.setItem(task.id, JSON.stringify(task));
    taskDiv.id = task.id;
    toDoContainer.appendChild(taskDiv);
  }
}

function hiddenTaskDescription(){

  
}
function moveTask(taskDiv, currentContainer, targetContainer) {
  
  // Eliminar tarea del contenedor actual
  currentContainer.removeChild(taskDiv);

  // Actualizar el estado de la tarea según el contenedor de destino
  let task = JSON.parse(localStorage.getItem(taskDiv.id));
  if (targetContainer === toDoContainer) {
    task.taskDone = false;
  } else if (targetContainer === inProgressContainer) {
    task.taskDone = "in-progress";
  } else if (targetContainer === doneContainer) {
    task.taskDone = true;
  }
  localStorage.setItem(taskDiv.id, JSON.stringify(task));

  // Agregar tarea al contenedor de destino
  targetContainer.appendChild(taskDiv);
}



function moveTaskLeft(event) {
  let taskDiv = this.parentNode;
  let currentContainer = taskDiv.parentNode;
  let targetContainer = getPreviousContainer(currentContainer);

  if (targetContainer) {
    moveTask(taskDiv, currentContainer, targetContainer);
  }
}

function moveTaskRight(event) {
  let taskDiv = this.parentNode;
  let currentContainer = taskDiv.parentNode;
  let targetContainer = getNextContainer(currentContainer);

  if (targetContainer) {
    moveTask(taskDiv, currentContainer, targetContainer);
  }
}

function getPreviousContainer(currentContainer) {
  if (currentContainer === toDoContainer) {
    return null;
  } else if (currentContainer === inProgressContainer) {
    return toDoContainer;
  } else if (currentContainer === doneContainer) {
    return inProgressContainer;
  }
}

function getNextContainer(currentContainer) {
  if (currentContainer === doneContainer) {
    return null;
  } else if (currentContainer === toDoContainer) {
    return inProgressContainer;
  } else if (currentContainer === inProgressContainer) {
    return doneContainer;
  }
}

function deleteTask() {
  let taskName = this.parentNode.querySelector(".task_name").innerText;
  let confirmation = confirm(`¿Estás seguro de que quieres eliminar la tarea "${taskName}"?`);
  if (confirmation) {
  this.parentNode.remove();
  let taskId = this.parentNode.id;
  localStorage.removeItem(taskId);
  }else{
    console.log("Eliminación cancelada");
  }
}

function createArrowRightIcon() {
  let span = document.createElement("span");
  span.className = "material-symbols-outlined mark-as-done";
  span.innerText = "chevron_right";

  return span;
}

function createArrowLeftIcon() {
  let span = document.createElement("span");
  span.className = "material-symbols-outlined mark-as-to-do";
  span.innerText = "chevron_left";
  return span;
}

function createTaskName(taskName) {
  let span = document.createElement("span");
  span.className = "task_name";
  span.innerText = taskName;
  return span;
}

function createTaskDescription(taskDescription) {
  let span = document.createElement("span");
  span.className = "task_description hidden";

  span.innerText = taskDescription;
  return span;
}

function createLimitDate() {
  let div = document.createElement("div");
  div.className = "limit-date-container";
  let icon = document.createElement("span");
  icon.className = "material-symbols-outlined limit-date-icon";
  icon.innerText = "event";
  div.appendChild(icon);
  let date = document.createElement("span");
  date.className = "limit-date";
  let dateLimit = new Date();
  date.innerText = dateLimit.toLocaleDateString("es-ES");
  
  div.appendChild(date);

  return div;
}

function createTrashIcon() {
  let span = document.createElement("span");
  span.className = "material-symbols-outlined trash";
  span.innerText = "delete";
  return span;
}

function allowDrop(ev) {
    ev.preventDefault(); 
  }
  
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
console.log(ev.target.id)
  }
  

function handleDrop(ev) {
  ev.preventDefault();


  var taskId = ev.dataTransfer.getData("text");
  console.log(taskId)
  
  var taskDiv = document.getElementById(taskId);
  console.log(taskDiv)
  
  var targetContainer = ev.target;
  console.log(targetContainer)

  if  (targetContainer.id === "to-do-container" ||
       targetContainer.id === "in-progress-container" ||
       targetContainer.id === "done-container") {
    
    var currentContainer = taskDiv.parentNode;
    
    moveTask(taskDiv, currentContainer, targetContainer);
   }
}

function Task(taskName, taskDescription, taskLimit, taskDone) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.taskLimit = taskLimit;
  this.taskDone = taskDone;
  this.taskCreate = new Date();
  this.id = crypto.randomUUID();
}

function recoverTaskFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let taskObj = JSON.parse(localStorage.getItem(localStorage.key(i)));

    let taskHTML = createRecoveredTaskFromLocalStorage(taskObj);
    if (taskObj.taskDone == true) {
      doneContainer.appendChild(taskHTML);
    } else if (taskObj.taskDone == false) {
      toDoContainer.appendChild(taskHTML);
    } else {
      inProgressContainer.appendChild(taskHTML);
    }
  }
}

  function createRecoveredTaskFromLocalStorage(taskObj) {
    let div = document.createElement("div");
    div.className = "task";
    div.id = taskObj.id;
    div.draggable = "true"
    div.setAttribute("ondrop", "handleDrop(event)"); 
    div.setAttribute("ondragover", "allowDrop(event)");
    div.setAttribute("ondragstart","drag(event)");
    let leftArrow = createArrowLeftIcon("move-task-left");
    div.appendChild(leftArrow);
    leftArrow.addEventListener("click", moveTaskLeft);

    let rightArrow = createArrowRightIcon("move-task-right");
    div.appendChild(rightArrow);
    rightArrow.addEventListener("click", moveTaskRight);

    div.appendChild(createTaskDescription(taskObj.taskDescription));
    div.appendChild(createTaskName(taskObj.taskName));
    let limit = createLimitDate();
    div.appendChild(limit);

    let erase = createTrashIcon();
    div.appendChild(erase);
    erase.addEventListener("click", deleteTask);
    let name = div.querySelector(".task_name")
    name.addEventListener("click", function() {
      let details = div.querySelector(".task_description");
      if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
      } else {
        details.classList.add("hidden");
      }
    });
    return div;
  }

