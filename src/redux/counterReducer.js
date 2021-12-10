const initialState = {
  count: 42,
  message: 'This came from the Counter Reducer!!!!',
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'SUBTRACT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return { ...state };
  }
};
