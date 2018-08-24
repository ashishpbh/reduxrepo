const redux = require("redux");

const createStore = redux.createStore;

const intialState = {
  c: 0
};

//reducer
const rootReducer = (state = intialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      c: state.c + 1
    };
  }
  if (action.type === "DNC") {
    return {
      //u cant set state directly bcz it is immutable so always use spread operator
      ...state,
      c: state.c - 2
    };
  }
  return state;
};
//store

const store = createStore(rootReducer);
console.log(store.getState());

//subscription////getting trigger when ever state is update
store.subscribe(() => {
  console.log("[sub]", store.getState());
});

//dispatching action// action is performed
store.dispatch({ type: "INC" });
store.dispatch({ type: "DNC", value: 2 });

console.log(store.getState());
