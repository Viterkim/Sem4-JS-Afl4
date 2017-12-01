import { combineReducers } from "redux";
import todoReducer from './todoReducer';

const allReducers = {
  todo: todoReducer
}

const rootReducer = combineReducers(allReducers);
export default rootReducer;