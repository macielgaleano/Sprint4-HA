export let actionListOfListsAddList = (listText) => {
  return {
    type: "ADD_LIST",
    payload: { listText: listText },
  };
};
