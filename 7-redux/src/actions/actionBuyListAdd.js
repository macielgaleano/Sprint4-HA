export let actionBuyListAdd = (itemText) => {
  return {
    type: "ADD_LIST",
    payload: { itemText: itemText },
  };
};
