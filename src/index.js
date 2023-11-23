import {createTask, getProjects} from "./modules/tasks.js";


const task = createTask('Clean room', 'Clean my room', 'House');
const newtask = createTask('wash car', 'wash the Palisade', 'Car');
const task2 = createTask('clean car', 'do inside', 'Car');
const project = [task, newtask, task2];
console.log(project);

const projects = getProjects(project);
console.log(projects);


