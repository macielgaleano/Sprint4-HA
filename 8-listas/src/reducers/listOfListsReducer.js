import moment from "moment";
import Randomcolor from "randomcolor";
import { REHYDRATE } from "redux-persist";

function listOfListsReducer(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      let newState = action.payload.listOfListsReducer
        ? action.payload.listOfListsReducer
        : [];
      return [...newState];

    case "ADD_LIST":
      let listId = 0;
      state.forEach((el) => {
        listId++;
      });
      let newList = {
        listId: listId,
        listName: action.payload.listText,
        listDateCreated: moment().format("ll"),
        listQuantityItems: 0, //Aranca en 0
        listItems: [],
        listCardColor: Randomcolor({ luminosity: "dark" }),
      };
      return [...state, newList];

    case "REMOVE_LIST":
      const stateTemp = [
        ...state.slice(0, action.payload.ListId),
        ...state.slice(action.payload.ListId + 1),
      ];
      return stateTemp;
    default:
      return [];
  }
}

export default listOfListsReducer;
