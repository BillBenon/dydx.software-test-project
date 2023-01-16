import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from "./roomSlice";
const store = configureStore({
    reducer: {
        rooms: roomsSlice.reducer
    }
})

export default store;