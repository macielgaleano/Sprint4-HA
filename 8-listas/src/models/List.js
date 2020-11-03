export let List = (listId, listName, listDateCreated) => {
  this.listId = listId;
  this.listName = listName;
  this.listDateCreated = listDateCreated;
  this.listQuantityItems = 0; //Aranca en 0
  this.listItems = [];
};

// {
//   id: 1,
//   name: "Manzana",
//   checked: false,
// },
// {
//   id: 2,
//   name: "Pera",
//   checked: true,
// },
