import {createTask, getProjects} from "./tasks.js";
import populateProjectList from "./display_controller.js";

export default function createModal() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const projects = getProjects(tasks);
  console.log(projects);
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-content__title">Add new task</div>
    <form class="modal-content__form">
      <div class="modal-content__form__title">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required></input>
      </div>
      <div class="modal-content__form__description">
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="5" cols="33" required></textarea>
      </div>
      <div class="modal-content__form__project">
        <label for="project">Project:</label>
        <input type="text" id="project" name="project" required></input>
        </div>
        <div class="modal-content__form__date">
        <label for="date">Due Date:</label>
        <input type="date" id="date" name="date" required></input>
      </div>
      <div class="modal-content__form__priority">
        <label for="priority">Priority:</label>
        <select id="priority" name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div class="modal-content__form__buttons">
        <button class="modal-content__form__buttons__add">Add</button>
        <button class="modal-content__form__buttons__cancel">Cancel</button>
      </div>
    </form>
  </div>
  `;
  const select = document.getElementById('project');

  // projects.forEach((project) => {
  //   const option = document.createElement('option');
  //   option.value = project;
  //   option.textContent = project;
  //   select.appendChild(option);
  // });

  document.body.appendChild(modal);
  const modalContent = document.querySelector('.modal-content');
  const modalClose = document.querySelector('.close');
  const modalCancel = document.querySelector('.modal-content__form__buttons__cancel');
  const modalAdd = document.querySelector('.modal-content__form__buttons__add');
  const modalTitle = document.querySelector('#title');
  const modalDescription = document.querySelector('#description');
  const modalProject = document.querySelector('#project');
  const modalDate = document.querySelector('#date');
  const modalPriority = document.querySelector('#priority');
  modalContent.style.display = 'block';

  modalClose.addEventListener('click', () => {
    modal.remove();
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
    modal.remove();
  });
}