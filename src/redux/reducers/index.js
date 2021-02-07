import { combineReducers } from "redux";
import sum from './sum'
import persons from './persons'

export default combineReducers({sum, persons});