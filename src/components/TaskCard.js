import React from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { ...task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} sx={{ mb: 2, opacity: isDragging ? 0.5 : 1 }}>
      <CardContent>
        <Typography variant="subtitle1"><b>{task.title}</b></Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
