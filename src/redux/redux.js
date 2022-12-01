/* eslint-disable no-unused-expressions */
import { createSlice, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// ----------------------- EMPLOYEE SLICE (employee list management) -------------------------------
const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addEmployee } = employeeSlice.actions


// ----------------------- STORE -------------------------------
// with react persist
const reducers = combineReducers({ employees: employeeSlice.reducer});
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
})

