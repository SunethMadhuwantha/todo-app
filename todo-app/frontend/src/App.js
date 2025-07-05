import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API = 'http://localhost:4000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post(API, { title, description });
    setTitle('');
    setDescription('');
    fetchTasks();
  };

  const markDone = async (id) => {
    await axios.put(`${API}/${id}/done`);
    fetchTasks();
  };

  return (
    <div className="App">
      <TaskForm
        title={title}
        description={description}
        onTitleChange={(e) => setTitle(e.target.value)}
        onDescChange={(e) => setDescription(e.target.value)}
        onSubmit={addTask}
      />
      <TaskList tasks={tasks} onMarkDone={markDone} />
    </div>
  );
}

export default App;
