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

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log("fUNCTION DRAG id",event.target.id)
}
function allowDrop(event) {
    event.preventDefault();
}



function handleDrop(event) {
    event.preventDefault();
    var projectId = event.dataTransfer.getData("text");
    console.log("PROJECTID", projectId);
    // console.log("PROJECTID", document.getElementById(projectId));

    var projectDiv = document.getElementById(projectId);
    console.log("projectDIV", projectDiv);
    // event.target.appendChild(document.getElementById(data));
    var targetContainer = event.target;
    console.log("TargetContainer",targetContainer);
  
    if  (targetContainer.id === "todo-project-container") {
        todoContainer.appendChild(projectDiv);
    }

    if  (targetContainer.id === "inprocess-project-container") {
        inProcessContainer.appendChild(projectDiv);
    }
    if  (targetContainer.id === "done-project-container") {
        doneContainer.appendChild(projectDiv);
    }      
    // var currentContainer = projectDiv.parentNode;        
    // moveProject(projectDiv, currentContainer, targetContainer);
    
}
function Project(projectTitle, projectName, projectDescription) {
    this.projectTitle = projectTitle;
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.projectDone = 0;
    this.projectCreate = new Date();
    this.id = crypto.randomUUID();

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
        // projectDiv.setAttribute("ondrop", "handleDrop(event)"); 
        // projectDiv.setAttribute("ondragover", "allowDrop(event)");
        projectDiv.setAttribute("ondragstart","drag(event)");

        let description = createProjectDescription(inputDescription.value);
        description.addEventListener('click', openProject);
        let arrowRight = createDirectionArrowRight();
        let arrowLeft = createDirectionArrowLeft();
        projectDiv.appendChild(arrowLeft);
        arrowLeft.addEventListener('click', projectStateBackward);
        projectDiv.appendChild(createProjectName(inputName.value));
        projectDiv.appendChild(createProjectTitle(inputTitle.value));
        projectDiv.appendChild(description);
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

        // projectDiv.setAttribute("ondragstart", "drag(event)");
        // projectDiv.ondragstart = drag;
        // projectDiv.dragstart = drag;
        // console.log("projectDiv.dragstart",  projectDiv.dragstart);
        // projectDiv.dragover = allowDrop;
        // console.log("projectDiv.dragover",  projectDiv.dragover);

        localStorage.setItem(project.id, JSON.stringify(project));
        projectDiv.id = project.id;
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
    let confirmation = window.confirm("¿Deseas borrar definitivamente? Es un proceso irreversible.");
    if(confirmation){
        this.parentNode.remove();
        let projectId = this.parentNode.id;
        localStorage.removeItem(projectId);
    }else{
        return;
    }
}


function recoverTaskFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.getItem(localStorage.key(i)))
        let projectObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(createRecoveredProjectFromLocalStorage(projectObj));
        let projectHTML = createRecoveredProjectFromLocalStorage(projectObj);
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
    div.draggable = "true";
    div.setAttribute("ondragstart","drag(event)");
    let description = createProjectDescription(projectObj.projectDescription);
    description.addEventListener('click', openProject);
    let arrowLeft = createDirectionArrowLeft()
    let arrowRight = createDirectionArrowRight();
    div.appendChild(arrowLeft);
    arrowLeft.addEventListener('click', projectStateBackward);
    if (projectObj.projectDone != 0) {
        arrowLeft.classList.toggle("hidden");
    }
    div.appendChild(createProjectName(projectObj.projectName));
    div.appendChild(createProjectTitle(projectObj.projectTitle));
    div.appendChild(description);
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

function openProject(event){
    // Obtener el elemento que desencadenó el evento
    var clickedProject = event.target;

    // Crear un nuevo elemento div para el popup
    var popup = document.createElement('div');
    popup.className = 'popup';

    // Clonar el elemento clickeado y ajustar su tamaño
    var enlargedProject = clickedProject.parentNode.cloneNode(true);
    let close = createCloseIcon(); 
    enlargedProject.appendChild(close);
    close.addEventListener('click', deletePopUp);
    enlargedProject.children[4].classList.toggle("hidden");
    enlargedProject.children[5].classList.toggle("hidden");
    enlargedProject.style.width = '600px'; // Ajustar el ancho según sea necesario
    // enlargedProject.style.height = '600px'; // Ajustar la altura según sea necesario

    // Agregar el elemento clonado al popup
    popup.appendChild(enlargedProject);

    // Agregar el popup al body del documento
    document.body.appendChild(popup);

}
function createCloseIcon() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined close";
    span.innerText = "close";
    return span;
}
function deletePopUp() {
    this.parentNode.remove();
}
// <button id="add-task-btn"><span class="material-symbols-outlined">
// arrow_forward_ios
// </span></button>