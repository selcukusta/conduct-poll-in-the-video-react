const initialState = {
  one: 0,
  two: 0,
  three: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ONE":
      return { ...state, one: state.one + 1 };
    case "VOTE_TWO":
      return { ...state, two: state.two + 1 };
    case "VOTE_THREE":
      return { ...state, three: state.three + 1 };
    default:
      return state;
  }
};
