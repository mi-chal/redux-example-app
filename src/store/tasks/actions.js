export const ADD_TASK = 'ADD_TASK';
export const REMOVE_LAST_TASK = 'REMOVE_LAST_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = () => ({
  type: REMOVE_LAST_TASK,
});
