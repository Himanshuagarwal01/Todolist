import {combineReducers } from "redux"; 
import { operations } from "./todoapp/reducers/operations";

export const rootreducer=combineReducers({
  operations,
  //more reducer can be added here 
})