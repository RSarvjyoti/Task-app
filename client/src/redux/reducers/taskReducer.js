const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? action.payload.updatedTask : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'FILTER_TASKS':
      return state.filter((task) => task.status === action.payload);
    default:
      return state;
  }
};

export default taskReducer;
