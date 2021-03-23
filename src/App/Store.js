import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Features/Auth/userSlice';

const rootReducer = {
    user: userSlice,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;