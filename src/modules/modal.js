import {createTask, getProjects} from "./tasks.js";
import populateProjectList from "./display_controller.js";

function showModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  modalOverlay.classList.add('show');
  modalContent.classList.add('show');

}

function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  modalOverlay.classList.remove('show');
  modalContent.classList.remove('show');
}



  export { showModal, closeModal}
