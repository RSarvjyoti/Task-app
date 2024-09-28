const initialState = [];

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, { message: action.payload }];
    default:
      return state;
  }
};

export default notificationReducer;
