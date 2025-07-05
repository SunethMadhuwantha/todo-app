# todo-app
Only the most recent 5 to-do tasks are listed in the UI.Users can mark a task as completed by clicking on the “Done” button in each task card. A completed task should not be visible in the UI.

# 📝 Full-Stack To-Do App

This is a simple full-stack task management application built using:

- **Frontend**: React
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL
- **Environment**: Docker + Docker Compose

---

## 📦 Project Structure
todo-app/

├── backend/ # Node.js REST API

├── frontend/ # React single-page app (SPA)

├── docker-compose.yml

└── README.md


---

## 🚀 Getting Started

### ✅ Prerequisites

- Docker
- Docker Compose
- Git
- Bash (Linux/Mac shell or WSL)

---

### 🛠️ Setup Instructions

1. Clone the Repo
   
   ```bash
[git clone https://github.com/SunethMadhuwantha/todo-app.git]

cd todo-app

docker-compose up --build

 --Start the Node.js backend (API on http://localhost:4000/tasks)
 
 --Start the React frontend (UI on http://localhost:3000)

2.   Frontend Unit Tests (React)

  --bash
docker-compose run frontend npm test -- --watchAll=false

To check coverage:

  --bash
  
docker-compose run frontend npm test -- --coverage --watchAll=false

Unit tests are written with Jest and React Testing Library.

3.   Backend Tests

  --bash
  
docker-compose run backend npm test

4.  Stopping the App
   
 --bash
 
docker-compose down


📎 Notes

Only Docker is required to build and run this project.

App follows clean folder separation (frontend/backend).

Use a modern browser (Chrome, Firefox, etc.) to open the UI.

🔗 GitHub Repository

👉 Click here to access the repository

https://github.com/SunethMadhuwantha/todo-app.git
