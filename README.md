# Todo-list

Todo-list is a simple and responsive task management app built with React, Vite, and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as completed, while storing the task list in local storage so the data stays available after refresh.

## Live Demo

[Live Site](https://todo-list-nu-livid-33.vercel.app/)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks in local storage
- Simple and clean interface
- Unique task IDs using UUID
- Built with a lightweight Vite setup

## Tech Stack

- React
- Vite
- Tailwind CSS
- UUID
- JavaScript

## Project Structure

```bash
src/
  components/
    Navbar.jsx
  App.jsx
  App.css
  index.css
  main.jsx

How It Works
Users type a task into the input field and add it to the list
Each todo item is stored with:
id
todo
isCompleted
Tasks are saved in browser local storage
On page load, the app reads existing tasks from local storage and restores them
Users can toggle completion, edit a task, or delete it from the list

Installation
git clone https://github.com/sadgi41/Todo-list.git
cd Todo-list
npm install
npm run dev

Available Scripts
npm run dev
npm run build
npm run preview
npm run lint

Future Improvements
Add task filters such as All, Active, and Completed
Add due dates or priorities
Improve mobile layout and accessibility
Add confirmation before deleting tasks
Add drag-and-drop task ordering

Author
Sadgi Jain

GitHub: sadgi41
