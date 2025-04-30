import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { updateTask } from '../api/api';
import { Paper, Typography } from '@mui/material';

const Column = ({ status, tasks, onUpdate }) => {
  const [, drop] = useDrop({
    accept: 'task',
    drop: async (item) => {
      if (item.status !== status) {
        await updateTask(item.id, { status });
        onUpdate();
      }
    }
  });

  return (
    <Paper ref={drop} sx={{ width: '30%', minHeight: 100, p: 2, backgroundColor: '#f4f4f4' }}>
      <Typography variant="h6">{status}</Typography>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </Paper>
  );
};

export default Column;
