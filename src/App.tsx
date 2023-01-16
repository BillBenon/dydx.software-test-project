import { useEffect, useState } from "react";
import { getRoomsById, roomIds } from "./lib/api";
import Room from "./components/room/room";
import { RoomInfo } from "./types/room";
import { useDispatch } from "react-redux";
import actions from "./services/roomActions";
import { roomInfomation } from "./data/roomsInformation";
function App() {
  const dispatch = useDispatch();
  let run = false;
  useEffect(() => {
    if (!run) {
      run = true;
      setTimeout(() => {
        dispatch(actions.changeRooms(roomInfomation));
      }, 1000);
    }
  }, [run]);

  return (
    <div className="App">
      <Room />
    </div>
  );
}

export default App;
