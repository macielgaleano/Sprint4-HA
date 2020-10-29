function counterReduce(state, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return state + 1;

    case "REMOVE_COUNT":
      return state - 1;

    case "MODIFY_COUNT":
      console.log(action);
      return;

    default:
      return 0;
  }
}

export default counterReduce;
