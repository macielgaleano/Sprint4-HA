function buyListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, action.payload.itemText];

    case "REMOVE_LIST":
      const stateTemp = [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1),
      ];
      return stateTemp;

    default:
      return [];
  }
}

export default buyListReducer;
