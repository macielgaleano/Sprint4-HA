export let actionBuyListRemove = (index) => {
  return {
    type: "REMOVE_LIST",
    payload: { index: index },
  };
};
