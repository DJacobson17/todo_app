import {createTask, getProjects} from "./tasks.js";
import populateProjectList from "./display_controller.js";

export default function createModal() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const projects = getProjects(tasks);
  console.log(projects);

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  const modalClose = document.querySelector('.close');
  const modalCancel = document.querySelector('.modal-content__form__buttons__cancel');
  const modalAdd = document.querySelector('.modal-content__form__buttons__add');
  const modalTitle = document.querySelector('#title');
  const modalDescription = document.querySelector('#description');
  const modalProject = document.querySelector('#project');
  const modalDate = document.querySelector('#date');
  const modalPriority = document.querySelector('#priority');

  modalOverlay.classList.add('show');
  modalContent.classList.add('show');

  modalClose.addEventListener('click', () => {
    modalContent.classList.remove('show');
    modalOverlay.classList.remove('show');
  });

  modalAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const task = createTask(modalTitle.value, modalDescription.value, modalProject.value, modalDate.value, modalPriority.value);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    console.log(tasks);
    modal.remove();
    populateProjectList(projects);
  });

  modalCancel.addEventListener('click', () => {
    modalContent.classList.remove('show');
    modalOverlay.classList.remove('show');
  });
}