var btnProject = document.getElementById("create-project-btn");
var inputName = document.getElementById("name-project-input");
var inputTitle = document.getElementById("title-project-input");
var inputDescription = document.getElementById("description-project-input");
var todoContainer = document.getElementById("todo-project-container");
var inProcessContainer = document.getElementById("inprocess-project-container");
var doneContainer = document.getElementById("done-project-container");
// var limitDateInput = document.getElementById("limit-date-input");
btnProject.addEventListener('click', createProject);
inputTitle.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        createProject();
    }
});

// Función para manejar el evento de sobreposición (dragover)
function drop(event) {
    event.preventDefault(); // Es necesario para permitir la operación de soltar
}
['todoContainer', 'inProcessContainer', 'doneContainer'].forEach(container => {
    container.addEventListener('dragover', drop);
    container.addEventListener('drop', handleDrop);
});

function handleDrop(event, projectDiv) {
    event.preventDefault(); 
    let projectId = event.dataTransfer.getData('text/plain'); // Recuperar el identificador de la tarea
    // const project = document.getElementById(idArrastrado);
    // let projectId = idArrastrado.projectDiv.id;
    let projectString = localStorage.getItem(projectId);
    let projectObj = JSON.parse(projectString);


    // Determinar el contenedor en el que se soltó la tarea y realizar acciones según corresponda
    if (event.target === todoContainer) {
        // Acciones para mover la tarea a "Completada"
        projectObj.projectDone = 0;
        this.parentNode.children[0].classList.toggle("hidden");
        todoContainer.appendChild(projectDiv);
    } else if (event.target === inProcessContainer) {
        // Acciones para mover la tarea a "En Proceso"
        projectObj.projectDone = 1;
        this.parentNode.children[4].classList.toggle("hidden");
        inProcessContainer.appendChild(projectDiv);
    } else if (event.target === doneContainer) {
        // Acciones para mover la tarea a "Iniciada"
        projectObj.projectDone = 2;
        this.parentNode.children[4].classList.toggle("hidden");
        doneContainer.appendChild(projectDiv);
    }
    localStorage.setItem(projectId, JSON.stringify(projectObj));
}

function Project(projectTitle, projectName, projectDescription) {
    this.projectTitle = projectTitle;
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.projectDone = 0;
    this.projectCreate = new Date();
    this.id = crypto.randomUUID();
    // this.draggable = true;

    // this.getTitle = function () {
    //     return this.projectTitle;
    // };
    // this.getName = function () {
    //     return this.projectName;
    // };
    // this.getDescription = function () {
    //     return this.projectDescription;
    // };
    // this.isDone = function () {
    //     return this.projectDone;
    // };
    // this.getCreationDate = function () {
    //     return this.projectCreate;
    // }
    // this.markAsDone = function () {
    //     this.projectDone = true;
    // }
    // this.markAsNotDone = function () {
    //     this.projectDone = false;
    // }
    // this.getId = function () {
    //     return this.id;
    // }
}

function createProject() {
    if (inputTitle.value.length > 0 && inputName.value.length) {
        let projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.draggable = true;
        let arrowRight = createDirectionArrowRight();
        let arrowLeft = createDirectionArrowLeft();
        projectDiv.appendChild(arrowLeft);
        arrowLeft.addEventListener('click', projectStateBackward);
        projectDiv.appendChild(createProjectName(inputName.value));
        projectDiv.appendChild(createProjectTitle(inputTitle.value));
        projectDiv.appendChild(createProjectDescription(inputDescription.value));
        projectDiv.appendChild(arrowRight);
        arrowRight.addEventListener('click', projectStateForward);
        projectDiv.children[4].classList.toggle("hidden");
        let erase = createTrashIcon(); 
        projectDiv.appendChild(erase);
        erase.addEventListener('click', deleteProject);
        
        let project = new Project(inputTitle.value, inputName.value, inputDescription.value);
        inputTitle.value = '';
        inputName.value = '';
        inputDescription.value = '';
        localStorage.setItem(project.id, JSON.stringify(project));
        projectDiv.id = project.id;
        projectDiv.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', projectDiv.id); // Almacenar el identificador delproject
        });
        projectDiv.addEventListener('drop', function(event) { handleDrop(event, projectDiv); });
        todoContainer.appendChild(projectDiv);
    }
}

function createProjectName(projectName) {
    let span = document.createElement("span");
    span.className = "project-name"
    span.innerText = projectName;
    return span;
}
function createProjectTitle(projectTitle) {
    let span = document.createElement("span");
    span.className = "project-title"
    span.innerText = projectTitle;
    return span;
}
function createProjectDescription(projectDescription) {
    let span = document.createElement("span");
    span.className = "project-description"
    span.innerText = projectDescription;
    return span;
}

function projectStateForward() {
    let projectId = this.parentNode.id;
    let projectString = localStorage.getItem(projectId);
    let projectObj = JSON.parse(projectString);

    if(projectObj.projectDone == 0){
        projectObj.projectDone = 1;
        this.parentNode.children[0].classList.toggle("hidden");
        inProcessContainer.appendChild(this.parentNode);   
    }else if(projectObj.projectDone == 1){
        projectObj.projectDone = 2;
        this.parentNode.children[4].classList.toggle("hidden");
        doneContainer.appendChild(this.parentNode);
    }else {
        window.alert("No se puede ir más allá");
    }
    localStorage.setItem(projectId, JSON.stringify(projectObj));
}

function projectStateBackward(){
    let projectId = this.parentNode.id;
    let projectString = localStorage.getItem(projectId);
    let projectObj = JSON.parse(projectString);

    if(projectObj.projectDone == 2){
        projectObj.projectDone = 1;
        this.parentNode.children[4].classList.toggle("hidden");
        inProcessContainer.appendChild(this.parentNode);
            
    }else if(projectObj.projectDone == 1){
        projectObj.projectDone = 0;
        this.parentNode.children[0].classList.toggle("hidden");
        todoContainer.appendChild(this.parentNode);
    }else {
        window.alert("No se puede ir más allá");
    }
    localStorage.setItem(projectId, JSON.stringify(projectObj));
}


function createDirectionArrowRight() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined arrowRight hidden"; 
    span.innerText = "arrow_forward_ios";
    return span;
}
function createDirectionArrowLeft() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined arrowLeft hidden"
    span.innerText = "arrow_back_ios";
    return span;
}
function createTrashIcon() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined trash";
    span.innerText = "delete";
    return span;
}
function deleteProject() {
    this.parentNode.remove();
    let projectId = this.parentNode.id;
    localStorage.removeItem(projectId);
}


function recoverTaskFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.getItem(localStorage.key(i)))
        let projectObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(createRecoveredProjectFromLocalStorage(projectObj));
        let projectHTML = createRecoveredProjectFromLocalStorage(projectObj);
        projectHTML.draggable = true;
        projectHTML.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', projectHTML.id);
        });
        
        if (projectObj.projectDone == 2) {
            doneContainer.appendChild(projectHTML);
        }else if(projectObj.projectDone == 1){
            inProcessContainer.appendChild(projectHTML);
        } else {
            todoContainer.appendChild(projectHTML);
        }
    }
}

function createRecoveredProjectFromLocalStorage(projectObj) {
    let div = document.createElement('div');
    div.className = "project";
    div.id = projectObj.id;
    let arrowLeft = createDirectionArrowLeft()
    let arrowRight = createDirectionArrowRight();
    div.appendChild(arrowLeft);
    arrowLeft.addEventListener('click', projectStateBackward);
    if (projectObj.projectDone != 0) {
        arrowLeft.classList.toggle("hidden");
    }
    div.appendChild(createProjectName(projectObj.projectName));
    div.appendChild(createProjectTitle(projectObj.projectTitle));
    div.appendChild(createProjectDescription(projectObj.projectDescription));
    div.appendChild(arrowRight);
    arrowRight.addEventListener('click', projectStateForward);
    if (projectObj.projectDone != 2) {
        arrowRight.classList.toggle("hidden");
    }
    
    // if (taskObj.taskLimit != '') {
    //     let limit = createLimitDate(taskObj.taskLimit)
    //     div.appendChild(limit);
    // }
    let erase = createTrashIcon();
    div.appendChild(erase);
    erase.addEventListener('click', deleteProject);
    return div;
}
// <button id="add-task-btn"><span class="material-symbols-outlined">
// arrow_forward_ios
// </span></button>