const fs = requrie("fs");
const readline = require("readline-sync");
const chalk = require("chalk");

const filePath = "./tasks.json";

const loadTasks = () => {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  return [];
};

const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

let tasks = loadTasks();
