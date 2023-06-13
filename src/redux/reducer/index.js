import { combineReducers } from "@reduxjs/toolkit";
import todos from './todos'
import visibilityFilter from "./filter";

export default combineReducers({
  todos,
  visibilityFilter
}) 