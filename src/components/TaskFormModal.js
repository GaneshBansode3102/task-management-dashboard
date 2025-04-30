import React, { useState } from 'react';
import { addTask } from '../api/api';
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, DialogActions, Button } from '@mui/material';

const TaskForm = ({ open, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async () => {
    await addTask({ title, description, status });
    onSuccess();
    onClose();
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField label="Title" fullWidth required margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Description" fullWidth multiline rows={4} margin="normal" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField select fullWidth label="Status" value={status} onChange={(e) => setStatus(e.target.value)} margin="normal">
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Add Task</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
