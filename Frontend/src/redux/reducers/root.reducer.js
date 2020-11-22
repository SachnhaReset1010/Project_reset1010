import { combineReducers } from "redux";
import sachNhaReducer from "./sachNha.reducer";
const rootReducer = combineReducers({
  sachNhaStore: sachNhaReducer,
});

export default rootReducer;
