
import { combineReducers, createStore } from "redux";
import { categoriesReduser } from "./reducer/categoriesReducer";

const rootReducer = combineReducers({
	categories: categoriesReduser
})

export const store = createStore(rootReducer);