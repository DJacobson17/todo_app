//populate project list


export default function populateProjectList(arr) {  
  const projectList = document.querySelector('#projectList');
  projectList.innerHTML = '';
  arr.forEach((project) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project;
    projectList.appendChild(projectItem);
  });
}

