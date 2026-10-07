const tasks = [];

function addTask(title) {
    tasks.push({
        id: tasks.length + 1,
        title: title,
        completed: false
    });
}

function completeTask(id) {
    const task = tasks.find(item => item.id === id);

    if (task) {
        task.completed = true;
    }
}

function showTasks() {
    console.log("Task List:");

    for (const task of tasks) {
        const status = task.completed ? "DONE" : "TODO";
        console.log(`${task.id}. [${status}] ${task.title}`);
    }
}

addTask("Learn JavaScript");
addTask("Practice GitHub");
addTask("Build a project");

completeTask(1);

showTasks();
