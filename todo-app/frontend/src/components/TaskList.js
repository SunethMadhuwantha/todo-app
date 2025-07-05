import React from 'react';

function TaskList({ tasks, onMarkDone }) {
  return (
    <div className="right-panel">
      <h2>Recent Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onMarkDone(task.id)}>Done</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
