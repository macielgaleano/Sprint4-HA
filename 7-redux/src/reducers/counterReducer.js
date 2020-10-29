function counterReduce(state = 0, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return state + 1;

    case "REMOVE_COUNT":
      return state - 1;

    case "MODIFY_COUNT":
      let number;
      action.payload.number >= 0 ? (number = action.payload.number) : (number = 0);
      return number;

    default:
      return 0;
  }
}

export default counterReduce;
