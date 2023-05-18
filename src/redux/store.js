import {createStore} from "@reduxjs/toolkit";
import { rootreducer } from "./rootreducer";

export const store=createStore(rootreducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())