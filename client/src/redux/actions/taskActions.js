export const createTask = (task) => ({
    type: 'CREATE_TASK',
    payload: task,
  });
  
  export const updateTask = (id, updatedTask) => ({
    type: 'UPDATE_TASK',
    payload: { id, updatedTask },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });


  export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter,
  });
  
  