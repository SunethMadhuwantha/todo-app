import React from 'react';

function TaskForm({ title, description, onTitleChange, onDescChange, onSubmit }) {
  return (
    <div className="left-panel">
      <h1>Add Task</h1>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          onChange={onTitleChange}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={onDescChange}
          placeholder="Description"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
