import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: 'student',
    initialState: { value: 500},
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        }
    }
});

export default studentSlice.reducer;