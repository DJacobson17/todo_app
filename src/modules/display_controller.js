//populate project list


export default function populateProjectList(arr) {  
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';
  arr.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    const projectItemTitle = document.createElement('div');
    projectItemTitle.textContent = project;
    const projectItemButtons = document.createElement('div');
    projectItemButtons.classList.add('project-item__buttons');
    const prjectItemEdit = document.createElement('button');
    prjectItemEdit.classList.add('project-item__edit');
    prjectItemEdit.textContent = 'Edit';
    const projectItemDelete = document.createElement('button'); 
    projectItemDelete.classList.add('project-item__delete');
    projectItemDelete.textContent = 'Delete';
    projectItemButtons.appendChild(prjectItemEdit);
    projectItemButtons.appendChild(projectItemDelete);
    projectItem.appendChild(projectItemTitle);
    projectItem.appendChild(projectItemButtons);
    projectList.appendChild(projectItem);
  });
}

