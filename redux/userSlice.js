import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user", 
    initialState: {
        username: "", 
        email: "", 
        

    },
    reducers: {
        loggedUser: (state, action) => {
            state.username = action.payload.username; 
            state.email = action.payload.email; 
        }, 

        reset: (state) => {
            state.username = ""; 
            state.email = ""; 

        }
    }
}); 

export const { loggedUser, reset } = userSlice.actions; 

export default userSlice.reducer; 
