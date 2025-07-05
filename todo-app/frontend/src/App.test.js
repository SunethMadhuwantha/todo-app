import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

// ✅ Properly mock axios
import axios from 'axios';
jest.mock('axios');

beforeEach(() => {
  // Default GET response with empty task list
  axios.get.mockResolvedValue({ data: [] });
});

test('renders Add Task button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Add Task/i });
  expect(button).toBeInTheDocument();
});

test('adds a new task to the list', async () => {
  // Step 1: Empty list initially
  axios.get.mockResolvedValueOnce({ data: [] });

  // Step 2: Mock POST (task creation)
  axios.post.mockResolvedValueOnce({
    data: { id: 1, title: 'Test Task', description: 'Test Description' },
  });

  // Step 3: After POST, fetch updated tasks
  axios.get.mockResolvedValueOnce({
    data: [{ id: 1, title: 'Test Task', description: 'Test Description' }],
  });

  render(<App />);
  const titleInput = screen.getByPlaceholderText(/title/i);
  const descInput = screen.getByPlaceholderText(/description/i);
  const addButton = screen.getByRole('button', { name: /add task/i });

  await userEvent.type(titleInput, 'Test Task');
  await userEvent.type(descInput, 'Test Description');
  await userEvent.click(addButton);

  const newTask = await screen.findByText('Test Task');
  expect(newTask).toBeInTheDocument();
});

test('does not add a task with empty fields', async () => {
  axios.get.mockResolvedValueOnce({ data: [] });

  render(<App />);
  const addButton = screen.getByRole('button', { name: /add task/i });

  await userEvent.click(addButton);

  const taskText = await screen.findByText(/no tasks yet/i);
  expect(taskText).toBeInTheDocument();
});
