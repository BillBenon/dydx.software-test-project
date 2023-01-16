import { createSlice } from "@reduxjs/toolkit";
const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    roomsData: [],
  },
  reducers: {
    changeRooms(state, action) {
      state.roomsData = action.payload;
    },
  },
});

export default roomsSlice;
