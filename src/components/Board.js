import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/api';
import Column from './Column';
import TaskForm from './TaskFormModal';
import { Button, Box, Typography } from '@mui/material';

const statuses = ['To Do', 'In Progress', 'Done'];

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleUpdate = () => fetchTasks();

  return (
    <Box p={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>Add New Task</Button>
      <Box display="flex" justifyContent="space-between" mt={2}>
        {statuses.map((status) => (
          <Column key={status} status={status} tasks={tasks.filter(t => t.status === status)} onUpdate={handleUpdate} />
        ))}
      </Box>
      <TaskForm open={open} onClose={() => setOpen(false)} onSuccess={handleUpdate} />
    </Box>
  );
};

export default Board;
