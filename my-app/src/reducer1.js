import CentralStore from "./CentralStore";

const reducer = (state = CentralStore, action) => {
  switch (action.type) {
    case "StoreResult":
      return {
        ...state,
        result: state.result.concat({ id: Date.now(), value: action.result }),
        name: ""
      };
    case "delResult":
      const arr = state.result.filter(value => value.id !== action.elemId);
      return {
        ...state,
        result: arr
      };
  }
  return state;
};

export default reducer;
