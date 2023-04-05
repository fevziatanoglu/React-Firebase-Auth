import { configureStore} from "@reduxjs/toolkit";

import auth from "./auth";

const store = configureStore({
    reducer : {
        // get auth's reducers
        auth,
    }
});

export default store;