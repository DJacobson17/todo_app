function createTask(title, description, project, comleted= false) {
  const task = {
        title,
        description,
        project,
        comleted,
    };
    
    return task;

};
function getTasks() {
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  return arr;
}

function getProjects() {
  const arr = getTasks();
  const projects = arr.map(task => task.project);
  return projects.filter((project, index) => projects.indexOf(project) === index);
};

export {createTask, getProjects, getTasks};

