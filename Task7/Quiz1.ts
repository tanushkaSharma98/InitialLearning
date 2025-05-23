type Task = {
  name: string;
  description: string;
  done: boolean;
};

let todos: Task[] = [];

function addTask(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function removeTask(index: number): Task[] {
  return todos.splice(index, 1);
}

function showTasks(): void {
  todos.forEach((todo, idx) => {
    console.log(`${idx} - ${todo.name}`);
  });
}

function updateTask(index: number, name: string, description: string): Task {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
