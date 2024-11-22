import * as fs from "fs";
import * as readline from "readline-sync";
import chalk from "chalk";

const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      const tasks = JSON.parse(data);
      return Array.isArray(tasks) ? tasks : [];
    }

    fs.writeFileSync(filePath, "[]");
    return [];
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
};

const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

let tasks = loadTasks();

const addTask = () => {
  const task = readline.question("Enter a new task: ");
  tasks.push({ description: task, completed: false });
  saveTasks(tasks);
  console.log(chalk.green("Task added successfully!"));
};

const listTasks = () => {
  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks found!"));
    return;
  }
  tasks.forEach((task, index) => {
    const status = task.completed ? chalk.green("[✔]") : chalk.red("[✘]");
    console.log(`${index + 1}. ${status} ${task.description}`);
  });
};

const markCompleted = () => {
  listTasks();
  const taskIndex =
    readline.questionInt("Enter the task number to mark as completed: ") - 1;

  if (tasks[taskIndex]) {
    tasks[taskIndex].completed = true;
    saveTasks(tasks);
    console.log(chalk.green("Task marked as completed!"));
  } else {
    console.log(chalk.red("Invalid task number."));
  }
};

const editTask = () => {
  listTasks();
  const taskIndex = readline.questionInt("Enter the task number to edit: ") - 1;

  if (tasks[taskIndex]) {
    const currentTask = tasks[taskIndex];
    console.log(chalk.yellow(`Current task: ${currentTask.description}`));
    const newDescription = readline.question(
      "Enter new task description (press Enter to keep current): ",
    );

    if (newDescription.trim()) {
      tasks[taskIndex].description = newDescription;
      saveTasks(tasks);
      console.log(chalk.green("Task edited successfully!"));
    } else {
      console.log(chalk.yellow("Task remained unchanged."));
    }
  } else {
    console.log(challk.red("Invalid task number."));
  }
};

const deleteTask = () => {
  listTasks();
  const taskIndex =
    readline.questionInt("Enter the task number to delete: ") - 1;

  if (tasks[taskIndex]) {
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log(chalk.green("Task deleted successfully!"));
  } else {
    console.log(chalk.red("Invalid task number."));
  }
};

const showMenu = () => {
  console.log(chalk.blue("\nTo-Do List Menu:"));
  console.log("1. Add a Task");
  console.log("2. List Tasks");
  console.log("3. Mark Task as Completed");
  console.log("4. Delete a Task");
  console.log("5. Edit Task");
  console.log("6. Exit");
};

const run = () => {
  let exit = false;

  while (!exit) {
    showMenu();
    const choice = readline.questionInt("Choose an option: ");

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        listTasks();
        break;
      case 3:
        markCompleted();
        break;
      case 4:
        deleteTask();
        break;
      case 5:
        editTask();
        break;
      case 6:
        console.log(chalk.blue("Goodbye!"));
        exit = true;
        break;
      default:
        console.log(chalk.red("Invalid option. Please try again."));
    }
  }
};

run();
