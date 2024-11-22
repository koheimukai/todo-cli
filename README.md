# Todo CLI

A command-line interface (CLI) application for managing your daily tasks, built with Node.js.

## Features

- Add new tasks
- List all tasks with completion status
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Persistent storage using JSON file
- Colored output for better visibility

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-cli
```

2. Install dependencies:
```bash
npm install
```

## Usage

Run the application:
```bash
node index.js
```

### Menu Options

1. **Add a Task**: Create a new task
2. **List Tasks**: Display all tasks with their completion status
3. **Mark Task as Completed**: Mark an existing task as done
4. **Delete a Task**: Remove a task from the list
5. **Edit Task**: Modify the description of an existing task
6. **Exit**: Close the application

### Task Status Indicators

- ✘ (Red): Task is incomplete
- ✔ (Green): Task is completed

## File Structure

- `index.js`: Main application file
- `tasks.json`: Storage file for tasks
- `package.json`: Project configuration and dependencies
- `README.md`: Project documentation

## Dependencies

- [chalk](https://github.com/chalk/chalk): Terminal string styling
- [readline-sync](https://github.com/anseki/readline-sync): Synchronous readline for interactive CLI

## License

ISC

## Author

[John Appleseed]
