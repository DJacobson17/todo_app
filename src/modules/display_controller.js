import { getProjects, getTasks } from "./tasks";

//populate project list


function populateProjectList(arr) {  
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';
  arr.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    const projectItemTitle = document.createElement('div');
    projectItemTitle.textContent = project;
    projectItemTitle.classList.add('project-item__title');
    projectItemTitle.setAttribute('data-project', project);
    const projectItemButtons = document.createElement('div');
    projectItemButtons.classList.add('project-item__buttons');
    const projectItemDelete = document.createElement('button'); 
    projectItemDelete.classList.add('project-item__delete');
    projectItemDelete.textContent = 'Delete';
    projectItemButtons.appendChild(projectItemDelete);
    projectItem.appendChild(projectItemTitle);
    projectItem.appendChild(projectItemButtons);
    projectList.appendChild(projectItem);
  });

  let deleteProjectButtons = document.querySelectorAll('.project-item__delete');
  let projectTitles = document.querySelectorAll('.project-item__title');
  projectTitles.forEach(title => title.addEventListener('click', () => populateTasks(title.dataset.project)));
  deleteProjectButtons.forEach(button => button.addEventListener('click', deleteProject));

  function deleteProject() {
    console.log('delete');
    const project = this.parentElement.parentElement.firstChild.textContent;
    let tasks = getTasks();
    tasks = tasks.filter(task => task.project !== project);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateProjectList(getProjects());
  
  }
  

};

function populateTasks(project) {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.project === project);
  console.log(tasks);
  console.log(project);
  let taskList__header = document.querySelector('.taskList__header');
  taskList__header.innerHTML = project;
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    const taskItemTitle = document.createElement('div');
    taskItemTitle.classList.add('task-item__title');
    taskItemTitle.textContent = task.title;
    const taskItemButtons = document.createElement('div');
    taskItemButtons.classList.add('task-item__buttons');
    const taskItemEdit = document.createElement('button');
    taskItemEdit.classList.add('task-item__edit');
    taskItemEdit.textContent = 'Edit';
    taskItemButtons.appendChild(taskItemEdit);
    const taskItemDelete = document.createElement('button');
    taskItemDelete.classList.add('task-item__delete');
    taskItemDelete.textContent = 'Delete';
    taskItemButtons.appendChild(taskItemDelete);
    taskItem.appendChild(taskItemTitle);
    taskItem.appendChild(taskItemButtons);
    taskList.appendChild(taskItem);
  });
}

export { populateProjectList };