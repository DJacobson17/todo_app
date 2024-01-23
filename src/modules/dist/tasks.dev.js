"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getProjects = getProjects;
exports.getTasks = getTasks;

function createTask(title, description, project, due, priority) {
  var completed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var task = {
    title: title,
    description: description,
    project: project,
    due: due,
    priority: priority,
    completed: completed
  };
  return task;
}

;

function getTasks() {
  var arr = JSON.parse(localStorage.getItem('tasks')) || [];
  return arr;
}

function getProjects() {
  var arr = getTasks();
  var projects = arr.map(function (task) {
    return task.project;
  });
  return projects.filter(function (project, index) {
    return projects.indexOf(project) === index;
  });
}

;