/* eslint-disable no-unused-expressions */
import { createSlice, configureStore } from "@reduxjs/toolkit";

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
export const store = configureStore({
    reducer: {
        employees: employeeSlice.reducer
    }
})