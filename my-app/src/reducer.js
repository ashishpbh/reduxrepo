import CentralStore from "./CentralStore";

const reducer = (state = CentralStore, action) => {
  switch (action.type) {
    case "ShowName":
      return {
        ...state,
        name: action.val
      };

    case "StoreName":
      return {
        ...state,
        name2: state.name
      };
  }
  return state;
};
export default reducer;
