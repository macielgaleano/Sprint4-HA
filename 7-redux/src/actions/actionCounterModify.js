export let actionCounterModify = (number) => {
  return {
    type: "MODIFY_COUNT",
    payload: { number: number },
  };
};
