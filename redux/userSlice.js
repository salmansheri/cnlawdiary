import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user", 
    initialState: {
        username: "", 
        email: "", 
        id: "", 
        photo: "", 
        

    },
    reducers: {
        loggedUser: (state, action) => {
            state.username = action.payload.username; 
            state.email = action.payload.email; 
            state.id = action.payload.id; 
            state.photo = action.payload.photo
        }, 

        reset: (state) => {
            state.username = ""; 
            state.email = ""; 
            state.id = ""; 
            state.photo = "";  

        }
    }
}); 

export const { loggedUser, reset } = userSlice.actions; 

export default userSlice.reducer; 
