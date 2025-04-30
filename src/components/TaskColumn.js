import React from 'react';
import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';

const TaskColumn = ({ title, tasks, updateTaskStatus }) => {
  return (
    <div style={{ width: '300px', margin: '0 10px' }}>
      <h2>{title}</h2>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ padding: '10px', background: '#f0f0f0', minHeight: '400px' }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} updateTaskStatus={updateTaskStatus} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
