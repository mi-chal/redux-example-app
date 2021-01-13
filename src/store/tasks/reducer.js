import { ADD_TASK, REMOVE_LAST_TASK } from "./actions";

const initialState = [];

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_LAST_TASK:
      const newTasks = [...state];
      newTasks.pop();
      return newTasks;
    default:
      return state;
  }
}

export default tasksReducer;
