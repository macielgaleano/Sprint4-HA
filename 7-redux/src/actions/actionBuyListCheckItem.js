export let actionBuyListCheckItem = (index) => {
  return {
    type: "CHECK_ITEM_LIST",
    payload: { index: index },
  };
};
