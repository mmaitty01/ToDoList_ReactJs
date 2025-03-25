# Todo List Application

This is a simple Todo List application built using React, Vite, and TailwindCSS. The app allows users to manage their tasks efficiently by adding, editing, deleting, and marking tasks as completed. All data is stored locally in the browser's `localStorage`.

<p align="center"><img src = "https://github.com/user-attachments/assets/1b33c874-237a-4ac3-b472-fcfe69b35b59"></p>
<p align="center" >
  <a href="#Features">Features</a> •
  <a href="#Installation">Installation</a> •
  <a href="#Project-Structure">Project Structure</a> •
  <a href="#Usage">Usage</a> •
   <a href="#Technologies Used">Usage</a> •
  <a href="#Screenshots">Screenshots</a>
</p>

## Features

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Persist tasks in `localStorage` to retain data even after refreshing the page.

## Installation

To set up and run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/todo-list.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the app.

## Project Structure

```
.
├── src
│   ├── App.css          # Styling for the application
│   ├── App.jsx          # Main component for the Todo List
│   ├── index.css        # Global TailwindCSS configuration
│   └── main.jsx         # Entry point for the React app
├── public               # Public assets
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## Usage

1. Type a task in the input field and click the `Add` button to add it to the list.
2. Click the checkbox to mark a task as completed. Completed tasks will be displayed with a strikethrough.
3. Use the `Edit` button to modify a task. The input field will populate with the selected task, and the button text will change to `Update`.
4. Click the `Delete` button to remove a task from the list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool.
- **TailwindCSS**: A utility-first CSS framework for styling.

## Screenshots

<p align="center"><img width="600" src = "https://github.com/user-attachments/assets/a7377dd3-c9e4-44c0-a6dd-aaf7a2d6ace4"></p>

https://github.com/user-attachments/assets/c749523a-47d8-4e4c-9f53-11826870786b
