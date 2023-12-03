//populate project list


export default function populateProjectList(arr) {  
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';
  arr.forEach((project) => {
    const projectItem = document.createElement('button');
    projectItem.textContent = project;
    projectList.appendChild(projectItem);
  });
}

