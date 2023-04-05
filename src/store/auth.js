import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // user: JSON.parse(localStorage.getItem('user')) || false,
    user: false
}

const auth = createSlice({
    name: "auth",
    initialState,

    // functions
    reducers: {

        // SET USER 
        setUser: (state, action) => {
            // action.payload => value came from funtion setUser

            // if (action.payload) {
            //     // there is a payload , set it on localStorage
            //     localStorage.setItem("user", JSON.stringify(action.payload));
            // } else {
            //     // there is no payload , remove old user on localStorage
            //     localStorage.removeItem("user")
            // }

            // user of state assign as new variable 
            state.user = action.payload;
        },

    }

})

// actions of auth
export const { setUser } = auth.actions;

export default auth.reducer;