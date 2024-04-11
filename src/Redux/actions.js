export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: Math.floor(Math.random() * 1000),
      text
    }
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
  });