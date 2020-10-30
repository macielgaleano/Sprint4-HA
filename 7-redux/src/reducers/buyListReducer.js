function buyListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, { itemName: action.payload.itemText, bought: false }];

    case "REMOVE_LIST":
      const stateTemp = [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1),
      ];
      return stateTemp;
    case "CHECK_ITEM_LIST":
      state.map((item, index) => {
        if (Number(index) === Number(action.payload.index)) {
          item.bought = true;
        }
        return state;
      });
      return state;

    default:
      return [];
  }
}

export default buyListReducer;
