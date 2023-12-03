import {createTask, getProjects} from "./modules/tasks.js";
import createModal from "./modules/modal.js";
import populateProjectList from "./modules/display_controller.js";
import './styles/style_modal.css';
import './styles/style_index.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(tasks);
const projects = getProjects(tasks);

// const projects = getProjects(project);
console.log(projects);

const taskInput = document.querySelector('#task-input');
taskInput.addEventListener('click', createModal);

populateProjectList(projects);



