import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { inintState } from "./initiastate";
import { cardReducer } from "./reducers/cardReducers";

const reducer = combineReducers({
  item: cardReducer,
});
const middleWare = [thunk, logger];

const store = createStore(
  reducer,
  inintState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
