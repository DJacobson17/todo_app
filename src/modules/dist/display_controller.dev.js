"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateProjectList = populateProjectList;

var _tasks = require("./tasks");

//populate project list
function populateProjectList(arr) {
  var projectList = document.getElementById('projectList');
  projectList.innerHTML = '';
  arr.forEach(function (project) {
    var projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    var projectItemTitle = document.createElement('div');
    projectItemTitle.textContent = project;
    projectItemTitle.classList.add('project-item__title');
    projectItemTitle.setAttribute('data-project', project);
    var projectItemButtons = document.createElement('div');
    projectItemButtons.classList.add('project-item__buttons');
    var projectItemDelete = document.createElement('button');
    projectItemDelete.classList.add('project-item__delete');
    projectItemDelete.textContent = 'Delete';
    projectItemButtons.appendChild(projectItemDelete);
    projectItem.appendChild(projectItemTitle);
    projectItem.appendChild(projectItemButtons);
    projectList.appendChild(projectItem);
  });
  var deleteProjectButtons = document.querySelectorAll('.project-item__delete');
  var projectTitles = document.querySelectorAll('.project-item__title');
  projectTitles.forEach(function (title) {
    return title.addEventListener('click', function () {
      return populateTasks(title.dataset.project);
    });
  });
  deleteProjectButtons.forEach(function (button) {
    return button.addEventListener('click', deleteProject);
  });

  function deleteProject() {
    console.log('delete');
    var project = this.parentElement.parentElement.firstChild.textContent;
    var tasks = (0, _tasks.getTasks)();
    tasks = tasks.filter(function (task) {
      return task.project !== project;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateProjectList((0, _tasks.getProjects)());
    var taskList__header = document.querySelector('.taskList__header');

    if (taskList__header.textContent === project) {
      var taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      taskList__header.textContent = '';
    }
  }
}

;

function populateTasks(project) {
  var tasks = (0, _tasks.getTasks)();
  tasks = tasks.filter(function (task) {
    return task.project === project;
  });
  console.log(tasks);
  console.log(project);
  var taskList__header = document.querySelector('.taskList__header');

  if (tasks.length === 0) {
    taskList__header.innerHTML = '';
  } else {
    taskList__header.innerHTML = project;
  }

  ;
  var taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(function (task) {
    var taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    var taskItemTitle = document.createElement('div');
    var taskItemCheckbox = document.createElement('input');
    taskItemCheckbox.setAttribute('type', 'checkbox');
    taskItemCheckbox.classList.add('task-item__checkbox');
    taskItem.appendChild(taskItemCheckbox);
    taskItemTitle.classList.add('task-item__title');
    taskItemTitle.textContent = task.title;
    var taskItemDueDate = document.createElement('div');
    taskItemDueDate.classList.add('task-item__due-date');
    taskItemDueDate.textContent = task.due;
    var taskItemButtons = document.createElement('div');
    taskItemButtons.classList.add('task-item__buttons');
    var taskItemEdit = document.createElement('button');
    taskItemEdit.classList.add('task-item__edit');
    taskItemEdit.textContent = 'Edit';
    taskItemButtons.appendChild(taskItemEdit);
    var taskItemDelete = document.createElement('button');
    taskItemDelete.classList.add('task-item__delete');
    taskItemDelete.textContent = 'Delete';
    taskItemButtons.appendChild(taskItemDelete);
    taskItem.appendChild(taskItemTitle);
    taskItem.appendChild(taskItemDueDate);
    taskItem.appendChild(taskItemButtons);
    taskList.appendChild(taskItem);
  });
  var deleteTaskButtons = document.querySelectorAll('.task-item__delete');
  deleteTaskButtons.forEach(function (button) {
    return button.addEventListener('click', deleteTask);
  });

  function deleteTask() {
    var delete_task = this.parentElement.parentElement.childNodes[1].textContent;
    var tasks = (0, _tasks.getTasks)();
    console.log(delete_task);
    tasks = tasks.filter(function (task) {
      return task.title !== delete_task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateProjectList((0, _tasks.getProjects)());
    populateTasks(project);
  }
}