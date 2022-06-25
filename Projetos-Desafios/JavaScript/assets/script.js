const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {

	e.preventDefault(); /* preventDefault = Serve para prevenir o comportamento padrão de um evento */
	
	const entrada = document.getElementById('task-input');

	/* Adiocionando a task */
	addTask(entrada.value);
	form.reset();
};

function addTask(tarefa) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(tarefa);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', tarefa);
	newTask.setAttribute('id', tarefa);

	taskLabel.setAttribute('for', tarefa);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}