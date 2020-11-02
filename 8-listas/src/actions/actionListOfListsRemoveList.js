export let actionListOfListsRemoveList = (ListId) => {
  return {
    type: "REMOVE_LIST",
    payload: { ListId: ListId },
  };
};
