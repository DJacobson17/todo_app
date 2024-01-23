import {createTask, getProjects, getTasks} from "./modules/tasks.js";
import {showModal, closeModal} from "./modules/modal.js";
import {populateProjectList} from "./modules/display_controller.js";
import './styles/style_modal.css';
import './styles/style_index.css';

populateProjectList(getProjects());


let tasks = getTasks();
const modalForm = document.querySelector('.modal-content__form');
const modalCancel = document.querySelector('.modal-content__form__buttons__cancel');
const modalClose = document.querySelector('.close');
const modalOverlay = document.querySelector('.modal-overlay');
const taskInput = document.querySelector('#task-input');


function addTask(e) {
  e.preventDefault();
  const modalTitle = this.querySelector('#title').value;
  const modalDescription = this.querySelector('#description').value;
  const modalProject = this.querySelector('#project').value;
  const modalDate = this.querySelector('#date').value;
  const modalPriority = this.querySelector('#priority').value;

  const task = createTask(modalTitle, modalDescription, modalProject, modalDate, modalPriority);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  populateProjectList(getProjects());
  closeModal();
  this.reset();
};




taskInput.addEventListener('click', showModal);
modalCancel.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
modalForm.addEventListener('submit', addTask);

