import axios from "axios";
import { RoomInfo } from "../types/room";

export const apiKey =
  "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==";

export const host = "http://destifyfunc-api-dev.azurewebsites.net/api";

export const roomIds: string[] = [
  "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
  "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
];

export const Rooms = `${host}/rooms?roomIds=${roomIds.join(",")}`;

export const getRoomsById = async (roomIds: string[]) => {
  try {
    const response = await fetch(
      `https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff,4c0ad727-1652-3b6e-4adb-61c21a17a4b1`,
      {
        method: "GET",
        headers: {
          "x-functions-key":
            "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
        },
        mode: "cors",
      }
    );
    console.log(response)

    const data: RoomInfo[] = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
