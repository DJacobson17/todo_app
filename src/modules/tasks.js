function createTask(title, description, project, comleted= false) {
  const task = {
        title,
        description,
        project,
        comleted,
    };
    return task;
};

function getProjects(arr) {
  const projects = arr.map((task) => task.project);
  return projects.filter((project, index) => projects.indexOf(project) === index);
};

export {createTask, getProjects};

